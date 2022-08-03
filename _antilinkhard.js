let linkRegexi = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegexi.exec(m.text)

    if (chat.antiLinkhard && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroupp = `chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroupp)) return !0
        }
        if (isBotAdmin && chat.antiLinkhard) {
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiLinkhard) return //m.reply('')
    }
    return !0
    
}
