module.exports = async (type, key) => {
  const chalk = require('chalk')
  const path = require('path')
  const pwdManager = require(appRoot + '/src/utils/auth/pwd-manager.js')
  clog.info(`Deleting password for ${chalk.italic.cyan(type === 'ssh' ? path.basename(key) : key)}...`)
  await pwdManager.deletePwd(key)
  clog.success(`Successfully deleted password!`)
}