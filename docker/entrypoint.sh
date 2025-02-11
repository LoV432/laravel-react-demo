#!/bin/sh

set -e

# Create .env if missing
if [ ! -f .env ]; then
    cp .env.example .env
fi

# Generate application key
php artisan key:generate

# Create SQLite database
if [ ! -f database/database.sqlite ]; then
    touch database/database.sqlite
fi

# Set permissions
chmod -R 775 storage bootstrap/cache
chmod 777 database/database.sqlite

# Run migrations
php artisan migrate

exec "$@"