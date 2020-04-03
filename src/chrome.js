#! /usr/bin/env node
// 打开一个Chrome浏览器
const { exec } = require('child_process')
exec(`open -n /Applications/Google\\ Chrome.app/ --args  --user-data-dir=/Users/chengliang/Documents/workChrome`, err => {
  if (err) {
      console.log(err)
  }
})