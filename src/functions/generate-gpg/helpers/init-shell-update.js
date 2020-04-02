module.exports = (keyId) => {
  const spawnSync = require('child_process').spawnSync
  const clog = require('../../../utils/loggers/console-log.js')
  const chalk = require('chalk')
  const file = require('../../../utils/shell/get-init-file.js')()
  update(file, keyId)
  clog.success(`${file} updated with GPG key export!`)
  clog.info(`Please run ${chalk.cyan.italic('git-assist config')} or ${chalk.cyan.italic('git-assist config -g')} again in order to set your GPG key for GitHub.\n`, {makeLink: false, format: false})
  spawnSync('source', [file])
}

function update(file, keyId) {
  const fs = require('fs')
  let data = fs.readFileSync(file, 'utf-8')
  const params = {
    startToken: '# START GPG KEY EXPORT',
    endToken: '# END GPG KEY EXPORT'
  }
  const regex = new RegExp(`\\${params.startToken}[\\s\\S]*?\\${params.endToken}`, 'g')
  const regexMatch = data.match(regex)
  if (data.match(regex) !== null) {
    let blockLines = regexMatch[0].split('\n')
    blockLines[1] = `export GITHUB_GPGKEY=${keyId}`
    data = data.replace(regexMatch[0], blockLines.join('\n'))
  } else {
    data = `${data}\n# DO NOT MODIFY THIS BLOCK\n${params.startToken}\nexport GITHUB_GPGKEY=${keyId}\n${params.endToken}\n`
  }
  fs.writeFileSync(file, data, 'utf-8')
}