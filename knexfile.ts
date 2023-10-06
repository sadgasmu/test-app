module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'test-app-mysql-1',
            port: '3306',
            user: 'root',
            password: 'root',
            database: 'houses_app',
        },
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds',
        },
    },
};