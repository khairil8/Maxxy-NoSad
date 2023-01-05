let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = 'RM5'
let sn = 'RM10'
let ss = 'RM15'
let sp = 'RM20'
//premium
let ph = 'RM5'
let pn = 'RM15'
let pp = 'RM25'
let pv = 'RM35'
let ppm = 'RM35'
//jasa run
let ri = 'RM20'
let pk = 'RM30'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}/grup (7 Hari)_
┊⫹⫺ *Normal:* _${sn}/grup (1 bulan)_                                         
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph} (7 Hari)_
┊⫹⫺ *Normal:* _${pn} (1 bulan)_                                       
╰═┅═━––––––๑
╭━━━━「 *PERPANJANG SEWA* 」
┊⫹⫺ *Hemat:* _RM3 (7 Hari)_
┊⫹⫺ *Normal:* _RM5 (1 bulan)_                                       
╰═┅═━––––––๑
╭━━━━「 *PERPANJANG PREMIUM* 」
┊⫹⫺ *Hemat:* _RM3 (7 Hari)_
┊⫹⫺ *Normal:* _RM5 (1 bulan)_                                       
╰═┅═━––––––๑
╭━━━━「 *JASARUN* 」
┊⫹⫺ *Hemat:* _${ri} (7 Hari)_
┊⫹⫺ *Normal:* _${pk} (1 bulan)_                                       
╰═┅═━––––––๑
༅ _*FITUR BOT*

✧ *Virtex Menu✅*
✧ *Menu Keren✅*
✧ *Anti Link✅*
✧ *Button Menu✅*
✧ *Anti Sticker✅*
✧ *Anti Toxic↗️*
✧ *DLL*
✧ *MEMBELI BERATI SETUJU*

_Total Fitur:_ 570++

*⫹⫺ PAYMENT:*
• *Digi:60109102984*
• *Shopeepay:-*
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? Tidak boleh

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* RM5 • Sewa', description: 'PRICE: ' + sh + ' (7 Hari)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* RM10 • Sewa', description: 'PRICE: ' + sn + ' (1 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* RM5 • Premium', description: 'PRICE: ' + ph + ' (7 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* RM15 • Premium', description: 'PRICE: ' + pn + ' (1 bulan)' },
	]
    }, {
        title: `${htjava} JASA RUN ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* RM20 • Jasarun', description: 'PRICE: ' + ri + ' (25 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* RM30 • Jasarun', description: 'PRICE: ' + pk + ' (1 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
