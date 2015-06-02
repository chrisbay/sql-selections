var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var mysql = require('mysql');

exercise = filecheck(exercise);
exercise = execute(exercise);


exercise.addProcessor(function (mode, callback) {

    var solutionQuery = require(this.solution);
    var submissionQuery = require(process.cwd() + "/" + this.submission);

    function compareResults(){

        if (mode == "verify" && (!this.submissionResults || !this.solutionResults))
            return;

        var us = this.submissionResults;
        var them = this.solutionResults;

		if (mode == "verify") {
	        
			var usJSON = JSON.stringify(us);
			var themJSON = JSON.stringify(them);
			var equal = usJSON === themJSON;
			
	        this.emit(equal ? 'pass' : 'fail', 'Query results match expected');
			
			console.log("\nSOLUTION\nRows: " + us.length + "\nFields: " + 				(Object.keys(us[0]).join(", ")));
			console.log("\nSUBMISSION\nRows: " + them.length + "\nFields: " + 				(Object.keys(them[0]).join(", ")));
			
		} else {
			console.log(this.submissionResults);
		}

        pool.end(function(err){
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }

        });

        process.nextTick(function(){
            callback(null, equal);
        });
    }

    var pool = mysql.createPool({
        connectionLimit: 2,
        host     : 'localhost',
        user     : 'sql_selections',
        password : 'iloverelationaldata',
        database : 'sql_selections'
    });

    function query(queryStr, type, _callback){

        pool.getConnection(function(err, connection) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }

            connection.query(queryStr, function(err, rows) {
                if (err) throw err;

                _this[type + "Results"] = rows;
                _callback.call(_this);
            });

            connection.release();
        });
    }

    var _this = this;
    if (mode == "verify") query(solutionQuery, "solution", compareResults);
    query(submissionQuery, "submission", compareResults);

});

module.exports = exercise;
