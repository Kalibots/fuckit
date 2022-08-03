let handler =  m => m.reply(`
sono la scimmia migliore di sto mondo non mettere ancora il mio nome in bocca se no finisci piu lontano della luna
`.trim())
handler.help = ['moon']
handler.tags = ['main']
handler.command = ['moon'] 

export default handler
