sql-selections
================

Install this workshopper by running the following at a command prompt: `npm install -g sql-selections`

## Setting up the data
We assume that you already have a local MySQL server installed. In fact, the default parameters for the database setup scripts assume that you are working on a Mac with the default MAMP installation.

### Connecting
Try running `mysql` from the command line. If receive a `command not found` message, set up a link:
```
ln -s /Applications/MAMP/Library/bin/mysql /usr/local/bin/mysql
```
If you have any setup other than the default MAMP config, edit `scripts/dbconf.sh` to reflect your `mysql` location and connection parameters (MAMP's default user/password are `root/root`). 

### Set up database
`cd` to `/usr/local/lib/node_modules/sql-selections/scripts` and run
```
./createdb.sh
```
If you encounter an error like the following, it means your MySQL isntance isn't running. Start it up via MAMP
```
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/Applications/MAMP/tmp/mysql/mysql.sock' (2)
```

### Set up user
Connect to your database via the command line (adjusting accordingly for non-MAMP situations):
```
mysql -uroot -proot
```
You should now have a prompt: `mysql>`. Run the following two commands:
```sql
CREATE USER sql_selections IDENTIFIED BY 'iloverelationaldata';
GRANT ALL ON sql_selections.* TO 'sql_selections'@'localhost';
```

Test your user by trying to connect via the command line:
```
mysql -usql_selections -piloverelationaldata
```

## Restoring data
If at any point you want or need to restore the database to its original state. From `/usr/local/lib/node_modules/sql-selections/scripts`, run:
```
./restoredb.sh
```

## Testing your queries
There are a few ways that you can test your queries. These are listed in order of our preference, but you may choose whichever you're more comfortable with.

### w3schools
The data for this exercise was taken from the [w3schools sandbox database environment](http://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all). You can use this same sandbox to run your queries.

### Local MySQL instance via command line
Running MySQL via its command-line utility puts you in direct contact with the database, with no middleman. In a Terminal window, run
```
mysql -usql_selections -piloverelationaldata sql_selections
```
to connect (note the lack of spaces after the `-u` and `-p` flags).

### Local MySQL instance via phpMyAdmin
If you are running MySQL via MAMP, then you can use the bundled phpMyAdmin instance to interact with the database. Select `sql_selections` from the left-hand pane, and then select the SQL tab.

### The `sql-selections run` command
You may use the build-in `run` command by placing your query in the solution file and running:
```
sql-selections run solution.js
```
This will display the results of your query in a [JSON](http://en.wikipedia.org/wiki/JSON)-like format. These results may look a bit different from what you see when interacting more directly with MySQL, and error messages may be mixed in with Javascript errors, and thus harder to decipher, so this is the least-recommended method of testing your queries.

## Getting ready
If you're new to SQL, spend a couple of minutes reading the w3schools [SQL Intro](http://www.w3schools.com/sql/sql_intro.asp) and [SQL Syntax](http://www.w3schools.com/sql/sql_syntax.asp) articles. (The [w3schools SQL Tutorial section(http://www.w3schools.com/sql/default.asp) should be your go-to reference for these exercises.)

## Getting started
Once you're ready to dive in, set up your directories, grab your favorite text editor and a couple of Terminal windows, and run `sql-selections`.

## Resources
For easy reference, here are some of the more useful resources listed throughout the exercise set.

* [`SELECT` syntax](http://www.w3schools.com/sql/sql_select.asp)
