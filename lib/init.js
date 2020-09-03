const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = (content) => console.log(chalk.green(content))
const { clone } = require('./download')
const open = require('open')

module.exports = async (name) => {
  // 打印欢迎画面
  clear()
  const data = await figlet('KKB Welcome')
  log(data)
}

// promisiy化spawn
// 对接输出流
const spawn = async (...args) => {
  const { spawn } = require('child_process')
  const options = args[args.length - 1]
  if (process.platform === 'win32') {
    // 设置 shell 选项为 true 以隐式地调用 cmd
    options.shell = true
  } else {
    // nothing
  }
  return new Promise((resolve) => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}
module.exports.init = async (name) => {
  console.log('init ' + name)

  log('创建项目:' + name)
  // 从github克隆项目到指定文件夹
  await clone('github:chelseachen007/baseVue', name)

  log('安装依赖')
  await spawn('cnpm', ['install'], { cwd: `./${name}` })
  log(
    chalk.green(
      ` 👌安装完成：
           To get Start: 
           =========================== 
           cd ${name} 
           npm run serve 
           ===========================`
    )
  )

  // 打开浏览器
  await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
  open('http://localhost:8080')
}
