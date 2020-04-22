if (process.env.GITHUB_ACTIONS) {
  process.exit(1)
}
if (!global.appRoot) {
  global.appRoot = require('app-root-path').path
}
const chalk = require('chalk')
const pjson = require(appRoot + '/package.json')
console.log('\n')
console.log(chalk.green(`Thanks for using this package! ${chalk.yellow('🖒')} ${chalk.red('♥')}\n`))
console.log(`${chalk.italic.blue('git-assist')} is a small node utility aiming to help with your basic GitHub tasks and more.`)
console.log('\n')
console.log(chalk.cyan(`If you would like to contribute to this project, you can find us on ${chalk.italic('GitHub')} at ${chalk.italic.yellow(pjson.homepage.replace('#readme', ''))}`))
console.log(chalk.red(`If you encounter any bugs and would like to report it, please head to our ${chalk.italic('GitHub repo issues')} at ${chalk.italic.yellow(pjson.bugs.url)}`))
console.log('\n')
