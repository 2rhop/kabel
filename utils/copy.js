import fs from 'fs'
import colors from './console_color'

//copy a file from .. to ..
export default function copy(from, to) {
    //if the destination file is not exists
    // if (!fs.existsSync(to))
        fs.copyFile(from, to, (err) => {
            if (err)
                console.log(colors[0], err);
            else
                console.log(colors[4], `copy file from ${from} to ${to}`);
        });
}