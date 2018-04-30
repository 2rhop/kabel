import http from 'http'
import app from './app_conf'
import colors from '../utils/console_color'

const server = http.createServer(app)//create a server with app config
const port = app.get('port')

server.listen(port, () => console.log(colors[3], `Listening on port: ${port}`))