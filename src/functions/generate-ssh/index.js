module.exports = async (args) => {
  const clog = require('../../utils/loggers/console-log.js')
  const info = await require('./helpers/info-prompter.js')()
  require('./helpers/generate-ssh.js')(info)
  require('./helpers/init-shell-update.js')(info.path)
  await require('./helpers/user-info.js')(info.path).catch(err => {clog.error(err); process.exit(1)})
}