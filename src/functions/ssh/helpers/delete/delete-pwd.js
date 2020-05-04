module.exports = async (key) => {
  const chalk = require('chalk')
  const pwdManager = require(appRoot + '/src/utils/auth/pwd-manager.js')
  clog.info(`Deleting password for ${chalk.italic.cyan(key)}...`)
  await pwdManager.deletePwd(key)
  clog.success(`Successfully password for ${chalk.italic.cyan(key)}!`)
}
