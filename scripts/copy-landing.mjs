import { copyFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const source = join(root, 'planet-english-landing.html')
const target = join(root, 'public', 'planet-english-landing.html')

copyFileSync(source, target)
console.log('Landing HTML copied to public/planet-english-landing.html')
