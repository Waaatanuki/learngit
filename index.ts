import { writeFile } from 'node:fs/promises'
import { updateRepo } from './git'

await writeFile('../asset/test.txt', String(Date.now()))
await updateRepo()
