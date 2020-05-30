#!/bin/bash

mysql -uroot -e "CREATE DATABASE ${DIRECTUS_DATABASE_NAME};"

mysql -uroot -e "GRANT ALL PRIVILEGES ON *.* TO '${DIRECTUS_DATABASE_USERNAME}'@'localhost' IDENTIFIED BY '$DIRECTUS_DATABASE_PASSWORD';"

echo "Database setup done."