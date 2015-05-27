#!/bin/bash

source dbconf.sh

$MYSQL_PATH -u$MYSQL_USER -p$MYSQL_PASS < "../data/drop.sql"

source createdb.sh

$MYSQL_PATH -u$MYSQL_USER -p$MYSQL_PASS $DB_NAME < "../data/populate.sql"
