const { workerData, Worker, isMainThread, parentPort } = require('node:worker_threads')
const fs = require('fs')

if (isMainThread) {
  exports.readAsync = function readAsync (filePath) {
    return new Promise((resolve, reject) => {

      const worker = new Worker(__filename, {
          workerData: { filePath },
      })

      worker.once('message', async (data) => {

        console.log(`File Read with worker thread : ${worker.threadId}`)
        resolve(data)
      })

      worker.on('error', err => reject(err))
    })

  }

} else {
  const result = fs.readFileSync(workerData.filePath)
  parentPort.postMessage(result)
}





