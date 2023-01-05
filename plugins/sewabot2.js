let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/5ed101baedcca6c885961.jpg'
let text = `━━ꕥ〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕
┃
┃✾ 1 ʜᴀʀɪ RM2 / ɢʀᴏᴜᴘ
┃✾ 7 ʜᴀʀɪ RM5 / ɢʀᴏᴜᴘ
┃✾ 30 ʜᴀʀɪ RM10 / ɢʀᴏᴜᴘ
┃✾ 90 ʜᴀʀɪ RM20 / ɢʀᴏᴜᴘ
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
┃
┃✾ 15 ʜᴀʀɪ RM5
┃✾ 30 ʜᴀʀɪ RM10 
┃✾ 45 ʜᴀʀɪ RM15
┃✾ 60 ʜᴀʀɪ RM25
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 450+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ *${author}* ꕥ━⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: `https://wa.me/60109102984?text=Hallo admin, saya tertarik untuk menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(masuk)$/i

export default handler
