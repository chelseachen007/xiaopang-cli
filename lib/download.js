const download = require("download-git-repo");
const path = require("path");
const ora = require("ora");
module.exports = function (target) {
  let url = 'https://github.com:chelseachen007/baseVue.git#master"';
  const spinner = ora(`正在下载项目模板，源地址：${url}`);
  target = path.join(target || ".", ".download-temp");
  spinner.start();
  return new Promise((resolve, reject) => {
    download(url, target, { clone: true }, (err) => {
      if (err) {
        spinner.fail(); // wrong :(
        reject(err);
      } else {
        spinner.succeed(); // ok :)
        // 下载的模板存放在一个临时路径中，下载完成后，可以向下通知这个临时路径，以便后续处理
        resolve(target);
      }
    });
  });
};
