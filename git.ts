import cp from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import util from 'node:util'

export async function updateRepo() {
  const exec = util.promisify(cp.exec)

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const directoryPath = join(__dirname, './asset')

  await exec('git config --global user.email "watanukipublic@gmail.com"', { cwd: directoryPath })
  await exec('git config --global user.name "Waaatanuki"', { cwd: directoryPath })
  await exec('git add .', { cwd: directoryPath })
  await exec('git commit -m "chore"', { cwd: directoryPath })
  const { stdout, stderr } = await exec('git push origin main', { cwd: directoryPath })
  console.log('stdout:', stdout)
  console.error('stderr:', stderr)
}
