# Where Similar, Part II

Rather than specifying that we want to filter when things match a given criteria, we may want to exclude things that don't meet a certain criteria.
```sql
SELECT * FROM teams WHERE team_name NOT LIKE '%s';
```
This query returns rows corresponding to the White Sox and the Red Sox.

Let's combine this concept with a few other things that we've learned.

## Your Task
Retrieve a list of employees (first name, last name, employee ID) whose last name does not begin with either 'L' or 'P'; sort by last name.

## References
* http://www.w3schools.com/sql/sql_like.asp

## Boilerplate

```javascript
var query = ""; // place your solution within the query string

module.exports = query;
```
