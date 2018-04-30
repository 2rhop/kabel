import dotenv from 'dotenv'
import config from './../knexfile'
import knex from 'knex'

dotenv.config()// setting the env variables

const environment = process.env.ENVIRONMENT
const db=knex(config[environment])// configuring the knex with the env varibles

export default db