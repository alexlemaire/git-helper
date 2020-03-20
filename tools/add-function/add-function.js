(async function main() {
  const promptly = require('promptly')
  const consola = require('consola')
  const fs = require('fs')
  const name = await promptly.prompt('Function name: ')
  const root = `functions/${name}`
  const path = `${root}/index.js`
  const fctsPath = './functions.json'
  fs.mkdirSync(root)
  fs.copyFileSync('tools/add-function/function.js', path)
  let fcts = JSON.parse(fs.readFileSync(fctsPath, 'utf-8'))
  fcts[name] = {
    path: `./${path}`,
    desc: '',
    args: []
  }
  fs.writeFileSync(fctsPath, JSON.stringify(fcts, null, 2))
  consola.success(`Function ${name} successfully added!`)
})()
