function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *Kali&Strix
  ▢ WhatsApp :
  • https://chat.whatsapp.com/KUrJU7UoqEL3fbCjNlQnjM
  • https://chat.whatsapp.com/HRj6FEL1SAi3pRPrAoOFzh
▢ Instagram :
  • https://instagram.com/kali69696969
▢ GitHub :
  • https://tse2.mm.bing.net/th?id=OIP.Izb8Opc6RPenYYRNRStdZAHaNJ&pid=15.1
▢ Telegram : 
  • t.me/kali69696969
▢ YouTube : 
  • https://youtu.be/dQw4w9WgXcQ
  
 *≡ HELPERS*
  *CRISS*
▢ Instagram : https://www.instagram.com/kali69696969
▢ WhatsApp : wa.me/355695555738
▢ Instagram : https://www.instagram.com/kali69696969
▢ WhatsApp : wa.me/355695555738
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
