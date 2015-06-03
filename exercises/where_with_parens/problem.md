# Where with Parens

When joining filter rules, we will sometimes care about the order that they are evaluated in. For example:
```sql
SELECT * FROM players WHERE batting_avg > 0.3 AND team = 'cardinals' OR team = 'cubs';
```
returns Cardinals players batting over .300 and *all* Cubs players. Effectively, the query is the same as this one:
```sql
SELECT * FROM players WHERE (batting_avg > 0.3 AND team = 'cardinals') OR team = 'cubs';
```
This query, however, returns all .300 or above hitters from both teams:
```sql
SELECT * FROM players WHERE batting_avg > 0.3 AND (team = 'cardinals' OR team = 'cubs');
```
We can use parens to control the order of evaluation.

## Your Task
Retrieve a list of order details for OrderID 10255 that have a quantity either of exactly 20 or more than 30.

## References
* http://www.w3schools.com/sql/sql_where.asp

## Boilerplate

```javascript
var query = ""; // place your solution within the query string

module.exports = query;
```
