const program = require("commander");

program
  .version("1.0.0")
  .usage("<command> [项目名称]")
  .command("init", "创建新项目")
  .parse(process.argv);
program
  .command("add") // fe add
  .description("添加新模板")
  .alias("a") // 简写
  .action(() => {
    require("../cmd/add")();
  });

program
  .command("list") // fe list
  .description("查看模板列表")
  .alias("l") // 简写
  .action(() => {
    require("../cmd/list")();
  });

program
  .command("delete") // fe delete
  .description("查看模板列表")
  .alias("d") // 简写
  .action(() => {
    require("../cmd/delete")();
  });
