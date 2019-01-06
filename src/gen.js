/**
 * Create by Ajax.Kong on 2019/01/06
 */
const fs = require("fs-extra")
const chalk = require('chalk')

module.exports = {
    gen: function (type, name) {
        fs.pathExists('src', (error, exists) => {
            if (error) return console.error(error)
            if (!exists) return console.warn('define the src folder first')
            if(Object.prototype.toString.call(name) !== '[object String]') return console.error(chalk.red(`ERROR: uncaught name , you should input like $ kong g page demo`))

            switch (type) {
                case 'page':
                    const destPageFile = `./src/pages/${name}/${name}.vue`
                    const destStyleFile = `./src/pages/${name}/${name}.less`
                    const destJsFile = `./src/pages/${name}/${name}.js`

                    fs.pathExists(destPageFile, (err, exists) => {
                        if (err) return console.error(err)
                        if (exists) return console.info("file has been created")

                        fs.copy('./src/template/page.vue', destPageFile, err => {
                            if (err) return console.error(err)
                            console.info(`${destPageFile} has been created`)
                        })
                        fs.copy('./src/template/page.less', destStyleFile, err => {
                            if (err) return console.error(err)
                            console.info(`${destStyleFile} has been created`)
                        })
                        fs.copy('./src/template/page.js', destJsFile, err => {
                            if (err) return console.error(err)
                            console.info(`${destJsFile} has been created`)
                        })
                    })
                    break
                case 'component':
                    const destComponentFile = `./src/components/${name}/${name}.vue`
                    fs.pathExists(destComponentFile, (err, exists) => {
                        if (err) return console.error(err)
                        if (exists) return console.info("file has been created")

                        fs.copy('./src/template/component.vue', destComponentFile, err => {
                            if (err) return console.error(err)
                            console.info(`${destComponentFile} has been created`)
                        })
                    })
                    break
                default:
                    console.log(chalk.red(`ERROR: uncaught command , you should input like $ kong g page demo`))
                    console.log()
                    console.log('  Examples:')
                    console.log()
                    console.log(chalk.gray('    # create a new page'))
                    console.log('    $ kong g page product')
                    console.log()
                    console.log(chalk.gray('    # create a new component'))
                    console.log('    $ kong g component  product')
                    console.log()
                    break;
            }
        })
    }
}
