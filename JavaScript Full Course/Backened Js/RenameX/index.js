const fs = require('fs');
const path = require('path');
const replacethis = "ankit"
const replacewith = "john"
const folder = __dirname
const preview = false
try {
    fs.readdir(folder, (err, data) => {
        // console.log(data)
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldfile = path.join(folder, item)
            let newfile = path.join(folder,item.replaceAll(replacethis,replacewith))
            if (!preview) {
                fs.rename(oldfile, newfile, () => {
                    console.log("Rename Successful",item,newfile)
                })
            }
            else{
                if ("data/" + item !== newfile)   console.log("" + item + " will be replced to " +  newfile)
            }
        // console.log("data/" + item, newfile)
        }
    })
} catch (error) {
    console.log(error)
}