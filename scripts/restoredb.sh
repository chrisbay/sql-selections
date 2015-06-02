#!/bin/bash

. dbconf.sh

$MYSQL_PATH -u$MYSQL_USER -p$MYSQL_PASS < "../data/drop.sql"

. createdb.sh

$MYSQL_PATH -u$MYSQL_USER -p$MYSQL_PASS $DB_NAME < "../data/populate.sql"
