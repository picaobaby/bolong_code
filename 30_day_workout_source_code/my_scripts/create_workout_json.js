const fs = require('fs')
const path = require('path')
const thumb_dir = '../public/images/thumbs/'
const ext = '.jpg'

let obj = {}
let basename = ""

fs.readdir(thumb_dir, (err, files) => {
    const imagefiles = files.filter( 
        file => path.extname(file).toLowerCase() === ext
    )

    imagefiles.forEach( file => {
        basename = path.basename(file, ext)
        obj[basename] = {
            id: basename, 
            name: '', 
            desc: '', 
            tags: []
        }
    })
    // console.log(JSON.stringify(obj))
    fs.writeFileSync('./result.txt', JSON.stringify(obj))
})
