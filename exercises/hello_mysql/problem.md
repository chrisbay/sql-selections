# Hello, MySQL!

Welcome to SQL Seletions! We'll learn some basic SQL, using a local MySQL database. Before beginning, make sure you've followed the setup instructions on [the project page](https://github.com/chrisbay/sql-selections).

## Notes
* While working to get each query right, you have a few options. For details on each of these methods, consult the project page linked above.
* For each exercise, you will put an SQL query within a Javascript variable. This will allow your queries to be run and verified by the workshopper system. This is not, of course, reflective of how you will be writing queries in most other environments, so don't let that confuse you.
* While using semicolons `;` to end queries is required by MySQL, doing so is optional in this context.
* If you're new to SQL, you may wonder about commands in all-caps. This is not required, and is typically only done for readability. So note that when you read documentation, you'll often see MySQL keywords in all-caps, and user-specified parameters in lowercase. You may use caps, or not, in your queries.
* You'll want to create a folder for your solutions. Go ahead and do that (we recommend calling it `sql-selections`), and then place each exercise in a separate `.js` file. For example, you might name this first solution's file `01.js` or `hello_mysql.js`.

## Your task
To get started, let's make sure our database is set up properly.

Write a query that displays all columns in the `customers` table, assuming that we've already selected our database for this set of exercises with `USE sql_selections`.


## References
* https://dev.mysql.com/doc/refman/5.1/en/show-columns.html

## Boilerplate
Each of our exercises will use the same boilerplate, as below. Place your query within the `query` variable as string. Do not modify the other Javascript code from the boilerplate, as it is needed for the exercise runner to verify your query.

```javascript
var query = ""; // place your solution within the query string

module.exports = query
```