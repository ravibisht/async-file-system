const express = require('express')
const app = express()
const afs = require('./workerThread/workerFileReader')
const path = require('path')

const fs = require('fs')

app.get('/status',(req,res)=>{
  res.json({ message : 'Working file on my machine'})
  res.download()
})


app.get('/hello',async (req,res)=>{

  const result = await afs.readAsync(path.resolve('/home/ravindrasingh/Downloads/WalkabilityIndex.zip'))
  await afs.readAsync(path.resolve('/home/ravindrasingh/Downloads/WalkabilityIndex.zip'))
  await afs.readAsync(path.resolve('/home/ravindrasingh/Downloads/WalkabilityIndex.zip'))
  await afs.readAsync(path.resolve('/home/ravindrasingh/Downloads/WalkabilityIndex.zip'))
  await afs.readAsync(path.resolve('/home/ravindrasingh/Downloads/WalkabilityIndex.zip'))
  await afs.readAsync(path.resolve('/home/ravindrasingh/Downloads/WalkabilityIndex.zip'))
  await afs.readAsync(path.resolve('/home/ravindrasingh/Downloads/WalkabilityIndex.zip'))


  console.log('Testing',result)
  res.json({
    message : 'Hello from the server side...',
  })
})




app.get('/helloSync', (req,res)=>{

  const result =  fs.readFileSync('/home/ravindrasingh/Downloads/WalkabilityIndex.zip')
  console.log('Testing',result)
  res.json({
    message : 'Hello from the Sync server side...',
  })
})






app.listen(8081)