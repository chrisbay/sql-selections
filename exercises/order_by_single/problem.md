# Order by Single

Now that we can select data, let's learn how to sort our data by various column values. When selecting rows thus far, our data has been sorted, though we haven't explicitely asked for it to be so, and we haven't had any control over *how* it has been sorted.

What if, say, we wanted to get a list of customers sorted by postal code rather than name?

We can sort in SQL using the `ORDER BY` keyword (yes, this is two words, but they function as a pair so we still refer to them as a keyword).

```sql
SELECT column_name, column_name
FROM table_name
ORDER BY column_name ASC|DESC, column_name ASC|DESC;
```

`ASC` and `DESC` allow us to control whether the sort is ascending or descending on the given column. For example:
```sql
SELECT player_name, batting_avg FROM players ORDER BY batting_avg DESC;
```
will give a list of all players, starting with the player with the highest batting average and going down from there. If we don't specify `ASC` or `DESC` then our sort is ascending, by default.

## Your Task
Retrieve list of employees alphabetized by their last name

## References
* http://www.w3schools.com/sql/sql_orderby.asp

## Boilerplate

```javascript
var query = ""; // place your solution within the query string

module.exports = query
```