import { writeFile } from 'node:fs/promises'
import { updateRepo } from './git'

console.log(12345)

await writeFile('./asset/test.txt', String(Date.now()))
// await updateRepo()
