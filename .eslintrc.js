module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  //指定当前规则配置从哪里继承。
  //extends 中可以省略包名的前缀 eslint-config-、eslint-plugin-
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
  }
}
