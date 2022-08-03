import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['355695555738', 'Kali', true], 
  ['687737337'], 
  ['359988770885', 'Strix', true], 
 ['573125484672'] 
  
] //Numeros de owner 

global.mods = [] // Moderadores
global.prems = ['355695555738', '359988770885', '573125484672']  // El usuario Premium tiene diamantes ilimitado
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  zenz: 'https://zenzapis.xyz',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'kali&strix-bot'
global.author = 'kali&strix'
global.igfg = '\n▢ Sígueme en Instagram\nhttps://www.instagram.com/kali69696969    https://www.instagram.com/1x.strix' 
global.fgsc = 'https://youtu.be/dQw4w9WgXcQ' 
global.fgyt = 'https://youtu.be/dQw4w9WgXcQ'

global.wait = '*sto caricando dammi un secondo porco dio...*'

global.multiplier = 69 // Cuanto más alto, más difícil subir de nivel


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
