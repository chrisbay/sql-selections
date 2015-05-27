#!/bin/bash

source dbconf.sh

$MYSQL_PATH -u$MYSQL_USER -p$MYSQL_PASS < "../data/create.sql"
