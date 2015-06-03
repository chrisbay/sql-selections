# Compound Where Clause

We can put specify multiple filter rules using `AND` and/or `OR` to join them together.
```sql
SELECT player_name,batting_avg WHERE batting_avg > 0.3 AND team='cardinals';
```

## Your Task
Retrieve a list of orders for customer IDs 4 and 7.

## References
* http://www.w3schools.com/sql/sql_where.asp

## Boilerplate

```javascript
var query = ""; // place your solution within the query string

module.exports = query;
```
