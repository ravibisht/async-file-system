const afs = require('./workerFileReader')
const path = require('path')
const  {ChildProcess, fork,exec,spawn} = require('node:child_process')

async function main(){
  const result = await afs.readAsync(path.resolve(__dirname,'./test.txt'))
  console.log('Testing',result)
}

main()

spawn('sdf',{})
