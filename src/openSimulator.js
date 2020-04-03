#! /usr/bin/env node
// 打开一个Simulator浏览器
const { exec } = require('child_process')
exec(`open -a Simulator`, err => {
  if (err) {
      console.log(err)
  }
})