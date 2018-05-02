# `Kabel`js

This is an API REST built in `javascript`. It includes object modeling thanks to [Knex](http://knexjs.org) (allows `pg` and `mysql` connection by default, others need to be configured), Kabel also includes [Express](https://expressjs.com/) for the server. Another useful tool is [Babel](http://babeljs.io) that converts all js files into ES standard to help browsers to understand the code. You don't need to restart the server every time you do changes because Kabel also includes [nodemon](https://nodemon.io/) to do that for you.

Well I hope you love this tool...

## Get started

Open yor command shell and try this out:

> `git clone git://github.com/2rhop/kabel.git kabel`

> `cd kabel`

## Installing all dependencies

Run this command to install all node_modules by npm

> `npm install`

## Configuring the environment

The server needs an `env` file to get configured. Run this command in the shell to let Kabel generate that file for you

>`npm run env`

Inside this file you can specify all the environment variables ( `DATABASE_DRIVER`= mysql, `DATABASE_HOST` = 127.0.0.1, `DATABASE_PORT`= 3002, etc ) for the [Express](https://expressjs.com/) server

## Setting the API routes

In this [file](https://github.com/2rhop/kabel/blob/master/_server/routes.js) you need to specify the routes with their http methods (e.g.

    .get('/users', (req, res) => {
        knex('users').then((users) => {
            res.json(users)
        })
    })

    .post('/user', (req, res) => {
        knex.insert([{ username: req.body.name, password: req.body.pass }]).into('users')
            .then(function (user) {
                knex('users').where('id', user[0]).then(function (user) {
                    res.send(user)
                })
            }).catch(function (error) {
                console.error(colors[0], error)
                return res.sendStatus(400)
            })
    })

    .delete('/user/:id', (req, res) => {
        knex('users').where('id', [req.params.id]).del().then((user) => {
            res.sendStatus(200)
        }).catch(function (error) {
            console.error(colors[0], error)
            res.sendStatus(400)
        })
    })

    .get('/user/:id', (req, res) => {
        knex('users').where('id', req.params.id).then((user) => {
            res.json(user)
        })
    })
    
    .put('/user/:id', (req, res) => {
        knex('users')
            .where('id', req.params.id)
            .update({
                username: req.body.name,
            }).then(function (user) {
                res.sendStatus(200)
            }).catch(function (error) {
                console.error(colors[0], error)
                res.sendStatus(400)
            })
    })

## Migrations and seeding

To make a new migration run this command 

>`npm run migration` (name_of_migration_here)

and run it

>`npm run migrate`

To make a new seed

>`npm run seed` (name_of_seed_here)

and run it

>`npm run seeding`

For further help with [migrations](http://knexjs.org/#Installation-migrations) and [seeding](http://knexjs.org/#Seeds-CLI) visit the [knex](http://knexjs.org/) website

## Populate data

If you want to put some data into the database (default `mysql`) just type the fallowing command (it will create a `users` table and add it some rows)

> `npm run populate`

## Running the server

You can run the server by typing in the shell

>`npm run server`

or just double click on the file `run_server.bat` (only for windows)

## Further help

Send me an [email](mailto:renerp2016@gmail.com) if you have some doubt or just add an [issue](https://github.com/2rhop/kabel/issues)