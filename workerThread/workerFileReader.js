const { workerData, Worker, isMainThread, parentPort } = require('node:worker_threads')
const fs = require('fs')
const osUtils = require('node-os-utils')

if (isMainThread) {
  exports.readAsync = function readAsync (filePath) {
    return new Promise((resolve, reject) => {

      const worker = new Worker(__filename, {
          workerData: { filePath },
      })

      worker.once('message', async (data) => {
       const cpuUsage = await osUtils.os.cpu.usage()

        console.log(`File Read with worker thread : ${worker.threadId} => with CPU Core : ${cpuUsage.cpu}`)
        resolve(data)
      })

      worker.on('error', err => reject(err))
    })

  }

} else {
  const result = fs.readFileSync(workerData.filePath)
  parentPort.postMessage(result)
}





