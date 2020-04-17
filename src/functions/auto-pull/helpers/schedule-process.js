module.exports = (opts) => {
  const clog = require('../../../utils/loggers/console-log.js')
  const chalk = require('chalk')
  clog.info(`Configuration of auto-pull on startup and scheduled is not supported yet. You can auto-pull manually by calling ${chalk.blue.italic('git-assist auto-pull')}`, {makeLink: false, format: false})
}
