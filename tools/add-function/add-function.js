(async function main() {
  const inquirer = require('inquirer')
  const clog = require('../../src/utils/loggers/console-log.js')
  clog.info('This function will create a new utility function for you.\n')
  const {name} = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Function name:'
  })
  const root = `src/functions/${name}`
  const path = `${root}/index.js`
  const fctsPath = './functions.json'
  const fs = require('fs')
  fs.mkdirSync(root)
  fs.copyFileSync('tools/add-function/function.js', path)
  let fcts = JSON.parse(fs.readFileSync(fctsPath, 'utf-8'))
  fcts[name] = {
    handler: `./${path}`,
    desc: '',
    args: []
  }
  fs.writeFileSync(fctsPath, JSON.stringify(fcts, null, 2))
  console.log('\n')
  clog.success(`Function ${name} successfully added!`)
})()
