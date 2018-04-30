import knex from '../_database/db'
import copy from './copy'
import colors from './console_color'

const mfile = 'create_table_users.js',
    sfile = 'users_seeder.js'

copy(__dirname+'/files/' + mfile, __dirname+'/../_database/migrations/' + mfile)
copy(__dirname+'/files/'+ sfile, __dirname+'/../_database/seeds/'+ sfile)

knex.migrate.latest()
    .then(function () {
        console.log(colors[1],'Seeding and migrating the database...')
        return knex.seed.run();
    })
    .then(function () {
        console.log(colors[1],'All migrations are finished!')
        process.exit(0)
    });