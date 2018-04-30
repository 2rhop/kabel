import express from 'express'
import knex from '../_database/db'
import colors from '../utils/console_color'

const routes = express.Router()

// ROUTES
routes
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


//------

export default routes
