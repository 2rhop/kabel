import fs from 'fs'
import colors from './console_color'

//copy a file from .. to ..
export default function copyAsync(from, to) {
    var prom = new Promise((resolve, reject) => {
        //if the destination file is not exists
        if (!fs.existsSync(to))
            fs.copyFile(from, to, (err) => {
                if (err) {
                    console.log(colors[0], err);
                    reject(err.toString())
                }
                else {
                    console.log(colors[4], `copy file from ${from} to ${to}`);
                    resolve()
                }
            });
        else {
            console.log(colors[2], 'The file is already exist');
            resolve()
        }
    })
    return prom
}