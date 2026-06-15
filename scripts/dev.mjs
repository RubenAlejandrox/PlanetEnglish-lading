import { copyFileSync, watch } from 'node:fs'
import { join } from 'node:path'
import { spawn } from 'node:child_process'

const root = process.cwd()
const source = join(root, 'planet-english-landing.html')
const target = join(root, 'public', 'planet-english-landing.html')

function copy() {
  copyFileSync(source, target)
  console.log('[sync] planet-english-landing.html → public/')
}

copy()

watch(source, copy)

spawn('npx', ['next', 'dev'], { stdio: 'inherit', shell: true, cwd: root })
