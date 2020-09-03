const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
module.exports.clone = async function (repo, desc) {
  const ora = require('ora')
  const process = ora(`下载.....${repo}`)
  process.start()
  await download(repo, desc)
  process.succeed()
}
