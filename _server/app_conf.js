import dotenv from 'dotenv'
import mysql from 'mysql'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

dotenv.config()// setting the env variables

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


const app = express(),
  PORT = process.env.SERVER_PORT,
  ENV = process.env.ENVIRONMENT

/**** EXPRESS ****/
app
  .set('env', ENV)
  .set('port', PORT)

//MIDDLEWARES
app
  .use(urlencodedParser) // parse application/x-www-form-urlencoded
  .use(jsonParser) // parse application/json
  .use(routes)


if (app.get('env') === 'production') {//if my env is production
  app
    .use((req, res, next) => {
      let error = new Error('Not Found')
      error.status = 404
      next(error)
    })
    .use((err, req, res, next) => {
      res.sendStatus(err.status || 500)
    })

}
//---------

export default app