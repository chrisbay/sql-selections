# Where Similar

We'll sometimes want to filter not based on specific values, but based on values in a column matching a certain pattern. For this, we'll combine the `LIKE` keyword with the wildcard operator (`%`):
```sql
SELECT * FROM teams WHERE team_name LIKE 'C%';
```
If our `teams` tables holds all MLB baseball teams, this query returns rows corresponding to the Cardinals and Cubs.

## Your Task
Retrieve list of categories that only includes those items that start with 'Con'.

## References
* http://www.w3schools.com/sql/sql_like.asp

## Boilerplate

```javascript
var query = ""; // place your solution within the query string

module.exports = query;
```
