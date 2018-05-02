import knex from '../_database/db'
import copy from './copy'
import colors from './console_color'
import mkdir from './exists_folder'

const mfile = 'create_table_users.js',
    sfile = 'users_seeder.js',
    dir = __dirname + '/../_database'

mkdir(dir + '/migrations/').then(function () {
    mkdir(dir + '/seeds/').then(function () {
        copy(__dirname + '/files/' + mfile, dir + '/migrations/' + mfile).then(function () {
            copy(__dirname + '/files/' + sfile, dir + '/seeds/' + sfile)
        }).then(function () {
            knex.migrate.latest()
                .then(function () {
                    console.log(colors[1], 'Seeding and migrating the database...')
                    return knex.seed.run();
                })
                .then(function () {
                    console.log(colors[1], 'All migrations are finished!')
                    process.exit(0)
                }).catch(function (err) {
                    console.error(err)
                });
        }).catch(function (err) {
            console.error(err)
        })
    })
}).catch(function (err) {
    console.error(colors[0], err)
})