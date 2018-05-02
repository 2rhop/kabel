import fs from 'fs'
import colors from './console_color'

function mkdir(dir) {
    var prom = new Promise((resolve, reject) => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir)
            console.log(colors[4],'created folder: '+dir)
        }
        resolve()
    })
    return prom
}

export default mkdir