import dotenv from 'dotenv'

dotenv.config({path: './.env'})// setting the env variables

module.exports = {
    development: {
        client: process.env.DATABASE_DRIVER,
        connection: {
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            database: process.env.DATABASE_NAME
        },
        migrations: {
            tableName: 'migrations',
            directory: __dirname + '/_database/migrations',
        },
        seeds: {
            directory: __dirname + '/_database/seeds'
        }
    },
    production: {}
}