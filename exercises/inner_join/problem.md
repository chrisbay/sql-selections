# Inner Join - I

Getting data from a single table is boring. Let's join data from multiple tables together using the `INNER JOIN` syntax. Here's an example.
```sql
SELECT player_name, team_name FROM players INNER JOIN teams ON teams.id = players.team_id;
```
The result of this query is a list of all players (by player_name), along with the team for each player, based on the `team_id` column value for each player.

## Your Task

Retrieve the customer name of the customer with ID equal 7, along with each order (by order ID) that is associated with that customer.

## References
* http://www.w3schools.com/sql/sql_like.asp
* https://dev.mysql.com/doc/refman/5.0/en/join.html

## Boilerplate

```javascript
var query = ""; // place your solution within the query string

module.exports = query;
```
