var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var mysql = require('mysql');

exercise = filecheck(exercise);
exercise = execute(exercise);


// Given a table name, generate ID col name. Assumes ID col is singular version of
// table name with _id appended. Not very robust (doesn't work for table names such as 'movies')
function getIdColName(table) {

    var base;
    var singularParts = table.match(/(\w+)ies$/);

    if (singularParts) {
        base = singularParts[1] + "y";
    } else {
        base = table.slice(0,-1);
    }
    return base + "_id";
}

// Given an insert query, extract the table name
function getTableName(queryStr) {
    return queryStr.trim().match(/^insert\s+into\s+(\w+)\s/i)[1];
}

exercise.addProcessor(function (mode, callback) {

    var pool = mysql.createPool({
        connectionLimit: 4,
        host     : 'localhost',
        user     : 'sql_selections',
        password : 'iloverelationaldata',
        database : 'sql_selections'
    });

    var solutionQuery = require(this.solution);
    var submissionQuery = require(process.cwd() + "/" + this.submission);

    function closePool(){
        if (mode == "verify" && (this.submissionResults || this.solutionResults))
            return;

        pool.end(function(err){
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
        });
    }

    function compareResults(){

        if (mode == "verify" && (!this.submissionResults || !this.solutionResults))
            return;

        var them = this.submissionResults;
        var us = this.solutionResults;

		if (mode == "verify") {

            // Remove ID properties to allow for valid comparison of inserts
            if (this.isInsert) {
                var table = getTableName(solutionQuery);
                var idCol = getIdColName(table);

                us.forEach(function(row){
                    var rowId = row[idCol];
                    delete row[idCol];
                    delete this.solutionResults;
                    remove(table, rowId, idCol, closePool);
                });

                them.forEach(function(row){
                    var rowId = row[idCol];
                    delete row[idCol];
                    delete this.submissionResults;
                    remove(table, rowId, idCol, closePool);
                });
            } else {
                closePool();
            }

			var usJSON = JSON.stringify(us);
			var themJSON = JSON.stringify(them);
			var equal = usJSON === themJSON;

	        this.emit(equal ? 'pass' : 'fail', 'Query results match expected');

			console.log("\nSOLUTION\nRows: " + us.length + "\nFields: " + (Object.keys(us[0]).join(", ")));
			console.log("\nSUBMISSION\nRows: " + them.length + "\nFields: " + (Object.keys(them[0]).join(", ")));

		} else {
			console.log(this.submissionResults);
		}

        process.nextTick(function(){
            callback(null, equal);
        });
    }

    function remove(table, id, idCol, callback){

        pool.getConnection(function(err, connection) {
            if (err) throw err;

            connection.query("DELETE FROM " + table + " WHERE " + idCol + "=" + id, function(err, rows){
                if(err) throw err;

                connection.release();
                if (callback) callback.call(this);
            });
        });
    }

    function query(queryStr, type, _callback){

        pool.getConnection(function(err, connection) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }

            connection.query(queryStr, function(err, rows) {
                if (err) throw err;

                // For inserts, fetch contents of inserted row for verification
                if (Object.prototype.hasOwnProperty.call(rows, "insertId")) {
                    var table = getTableName(queryStr);
                    var id = rows['insertId'];
                    var idCol = getIdColName(table);
                    var selectStr = "select * from " + table + " where " + idCol + "=" + id;

                    query(selectStr, type, _callback);
                    _this.isInsert = true;

                } else {
                    _this[type + "Results"] = rows;
                    _callback.call(_this);
                }
            });

            connection.release();
        });
    }

    var _this = this;
    if (mode == "verify") query(solutionQuery, "solution", compareResults);
    query(submissionQuery, "submission", compareResults);

});

module.exports = exercise;
