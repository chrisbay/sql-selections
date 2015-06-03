# Where Not

We can filter by specifying which rows to *exclude* rather than include. This requires use of the NOT operator, which looks like `<>`. An example:
```sql
SELECT player_name,batting_avg FROM players WHERE team <> 'cubs';
```

## Your Task
Retrieve list of categories that doesn't include condiments or confections (use the NOT operator).

## References
* http://www.w3schools.com/sql/sql_where.asp

## Boilerplate

```javascript
var query = ""; // place your solution within the query string

module.exports = query;
```
