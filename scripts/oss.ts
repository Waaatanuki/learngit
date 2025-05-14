import process from 'node:process'

console.log('=================================================================')
console.log({
  internal: !!Number(process.env.OSS_INTERNAL),
  accessKeyId: process.env.OSS_ACCESSKEY_ID || '',
  accessKeySecret: process.env.OSS_ACCESSKEY_SECRET || '',
  bucket: process.env.OSS_BUCKET_FILE,
})

function add(a: number, b: number) {
  return a + b
}

console.log(add(1, 1))

console.log('=================================================================')
