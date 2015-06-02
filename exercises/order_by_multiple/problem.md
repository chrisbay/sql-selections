# Order by Multiple

We can sort on multiple columns by giving multiple columns in our `ORDER BY` clause. For example:
```sql
SELECT * FROM players ORDER BY batting_avg DESC, slugging_pct DESC;
```
This query sorts players by `batting_avg` (batting average) first, displaying results from highest descending. If there are multiple players with the same batting average, those players are sorted according to `slugging_pct` (slugging percentage).

## Your Task
Retrieve list of orders, sorted by customer ID, then the order date, with most recently dated orders first

## References
* http://www.w3schools.com/sql/sql_orderby.asp

## Boilerplate

```javascript
var query = ""; // place your solution within the query string

module.exports = query;
```