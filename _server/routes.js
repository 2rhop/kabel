import express from 'express'
import knex from '../_database/db'

const routes = express.Router()

// ROUTES
routes
    .get('/users', (req, res) => {
        knex.raw('select * from users').then((users) => {
            res.json(users[0])
        })
    })
    .get('/user/:id', (req, res) => {
        knex.raw('select * from users where uid=?', [req.params.id]).then((user) => {
            res.json(user[0])
        })
    })
    .post('/user', (req, res) => {
        knex.raw('insert into users(username,password) values(?,?)', [req.body.name, req.body.pass]).then((user) => {
            res.json(user[0])
        })
    })
    .delete('/user/:id', (req, res) => {
        knex.raw('delete from users where uid=?', [req.params.id]).then((user) => {
              res.json(user[0])
          })
    })


//------

export default routes
