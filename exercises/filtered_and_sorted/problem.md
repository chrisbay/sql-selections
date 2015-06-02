# Where Clause

Another tool in our toolkit is filtering. We'll often want to retrieve only a few records from a table, based on a criteria. To do this, we'll employ a `WHERE` clause. A `WHERE` clause is the `WHERE` keyword along with a criteria to filter by.
````sql
SELECT column_name,column_name
FROM table_name
WHERE column_name operator value;
````

For example:
````sql
SELECT player_name,batting_avg FROM players WHERE batting_avg > 0.3;
````
This selects all players with batting average over .300.

## Your Task
Retrieve the first 14 customers from the customers table.

## References
* http://www.w3schools.com/sql/sql_where.asp

## Boilerplate

```javascript
var query = ""; // place your solution within the query string

module.exports = query;
```