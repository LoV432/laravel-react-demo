#!/bin/sh

set -e

# Create .env if missing
if [ ! -f .env ]; then
    cp .env.example .env
fi

# Create SQLite database
if [ ! -f db/database.sqlite ]; then
    touch db/database.sqlite
fi

# Set permissions
chmod -R 775 storage bootstrap/cache
chmod 777 db/database.sqlite

# Run migrations
php artisan migrate --force

exec "$@"