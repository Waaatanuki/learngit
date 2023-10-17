import { writeFile } from 'node:fs/promises'
import { updateRepo } from './git'

console.log(1111)

await writeFile('./test.txt', String(Date.now()))
await writeFile('../asset/test.txt', String(Date.now()))
// await updateRepo()
