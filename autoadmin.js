let handler =  m => m.reply(`
questo comando è disponibile solo sei kata se no torna a piangere nessuno ti darà admin
`.trim())
handler.help = ['autoadmin']
handler.tags = ['main']
handler.command = ['autoadmin'] 

export default handler