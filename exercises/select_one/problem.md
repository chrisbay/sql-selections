# Select One

We'll be focusing on read-only operations in this tutorial. That is, we'll be looking at various ways to query the database to get out information that we want, in the way we want it.

The command used for read operations in SQL is `SELECT`, and in its most basic form it looks like:
```sql
SELECT column_name,column_name
FROM table_name;
```
or 
```sql
SELECT * FROM table_name;
```

The first query selects two columns from a given table, while the second selects all columns. Note that all rows in the table are in the result set. We'll learn how to restrict the rows returned later on.

For example:
```sql
SELECT batting_avg, slugging_pct from PLAYERS;
```

## Your Task
Retrieve a list of categories by name

## References
* http://www.w3schools.com/sql/sql_select.asp

## Boilerplate

```javascript
var query = ""; // place your solution within the query string

module.exports = query
```