exports.verify = (Ktdprjct, pushname, sender, serialUser, twib, tanggal, _user) => {
  return `╭─「 Info 」
│ NAMA : ${pushname}
│ NOMOR : ${sender.split("@")[0]}
│ SN : ${serialUser}
│ TIME : ${twib} WIB
│ Date  : ${tanggal}
│ Total :  [ ${_user.length} ] Pengguna
╰────`
}

exports.menu = (Ktdprjct, pushname, ucapanWaktu, botname, _user) => {
  return `Hai ${pushname} 👋${ucapanWaktu}
${botname} Di Sini

╭─「 Info 」
│ Author : KTDPRJCT
│ Wa : wa.me/62895342581896
╰────
╭─「 Info Bot 」
│ Bot : ${botname}
│ Author : KTDPRJCT
│ Total :  [ ${_user.length} ] User
╰────
╭─「 Rules Bot 」
│ 1. Dilarang Spam
│ 2. Telp/vc = auto block
│ 3. Menghina Bot = block
╰────`
}

exports.help =  (Ktdprjct, mek, botname, pushname, isOwner, isPrem, isUser, isBan, prefix) => {
  return`
╭─「 ${botname} 」
│ Hai, ${pushname}
│
│ Nama : ${pushname}*
│ Owner : ${isOwner? "Owner👑️": "User⚔️"}
│ Premium : ${isPrem? "Aktif  ✓": "Tidak ✘"}
│ Register : ${isUser? `Done`: `Belum Daftar`}
│ Banned: ${isBan?`True`: `False`}
╰───
╭─「 Simpel Menu 」
│ ${prefix}ping
│ ${prefix}owner
│ ${prefix}rules
│ ${prefix}verify
│ ${prefix}delete
│ ${prefix}asupan
│ ${prefix}runtime
│ ${prefix}simi <teks>
│ ${prefix}report <fitur apa>
│ ${prefix}request <fitur apa>
│ ${prefix}tourl <tag foto/video>
╰───
╭─「 Sticker  Menu 」
│ ${prefix}smeme <teks>
│ ${prefix}sticker <reply foto>
│ ${prefix}tovideo <reply sticker>
│ ${prefix}toimage <reply sticker>
│ ${prefix}memegen <teks atas|teks bawah>
╰───
╭─「 Premium Menu」
│ ${prefix}premium
│ ${prefix}cekpremium
│ ${prefix}listpremium
╰───
╭─「 Search Menu 」
│ ${prefix}wiki <query>
│ ${prefix}image <query>
│ ${prefix}google <query>
│ ${prefix}brainly <query> error
│ ${prefix}ytsearch <query>
│ ${prefix}pinterest <query>
│ ${prefix}playstore <query>
│ ${prefix}searchgrup <query>
│ ${prefix}githubsearch <query>
╰───
╭─「 Download Menu 」
│ ${prefix}ytmp3 <url> 
│ ${prefix}ytmp4 <url> error
│ ${prefix}play <query> 
│ ${prefix}tiktokdl <url>
│ ${prefix}tiktokwm <url>
╰───
╭─「 Owner Menu 」
│ ${prefix}bc
│ ${prefix}ban
│ ${prefix}setfake
│ ${prefix}setthumb
│ ${prefix}allchats
│ ${prefix}clearall
╰───
╭─「 Group Menu 」
│ ${prefix}afk
│ ${prefix}setpp
│ ${prefix}tagall
│ ${prefix}online
│ ${prefix}infogc
│ ${prefix}demote
│ ${prefix}promote
│ ${prefix}setname
│ ${prefix}setdesc
│ ${prefix}hidetag
│ ${prefix}antilink
│ ${prefix}linkgroup
│ ${prefix}listadmin
│ ${prefix}resetlink
│ ${prefix}caripesan <teks>
│ ${prefix}sider <reply chat bot>
╰───
╭─「 Absen  Menu 」
│ ${prefix}absen
│ ${prefix}cekabsen
│ ${prefix}delabsen
│ ${prefix}mulaiabsen
╰───
╭─「 Nulis  Menu 」
│ ${prefix}nuliskiri
│ ${prefix}foliokiri
│ ${prefix}nuliskanan
│ ${prefix}foliokanan
╰───
╭─「 Anime Menu 」
│ ${prefix}loli
│ ${prefix}neko
│ ${prefix}waifu
│ ${prefix}chara 
│ ${prefix}megumin
╰───
╭─「 Audio Menu 」
│ ${prefix}fat
│ ${prefix}bass
│ ${prefix}bown
│ ${prefix}deep
│ ${prefix}fast
│ ${prefix}slow
│ ${prefix}robot
│ ${prefix}tupai
│ ${prefix}smooth
│ ${prefix}earrape
│ ${prefix}reverse
│ ${prefix}nightcore
╰───
╭─「 Sound Menu 」
│ ${prefix}sound1-75
╰───

_*BIG THANKS TO*_
*ALLAH SWT*
*ORTU*
*KTDPRJCT ( Me )*
*Ridho ( My pren )*
*Narutomo*


[ *POWERED BY ${ownername}* ]
`
}

exports.rules =  (Ktdprjct, botname) => {
  return`╭──「 Rules ${botname} 」
│ 1. Dilarang Spam
│ 2. Telp/vc = auto block
│ 3. Menghina Bot = block
╰────`
}

exports.playstore =  (Ktdprjct, i) => {
  return`\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n────────────────\n\n`
}

exports.github =  (Ktdprjct, repo, index, formatDate) => {
  return`${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`
}

exports.youtube =  (Ktdprjct, ytdl) => {
  return`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆                *YOUTUBE PLAY*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶
        
\`\`\`▢ Title : ${ytdl.all[0].title}\`\`\`
\`\`\`▢ Upload : ${ytdl.all[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${ytdl.all[0].views}\`\`\`
\`\`\`▢ Duration : ${ytdl.all[0].timestamp}\`\`\`
\`\`\`▢ Channel : ${ytdl.all[0].author.name}\`\`\`
\`\`\`▢ Link : ${ytdl.all[0].url}\`\`\``
}

exports.absen =  (Ktdprjct, from, tanggal, absen, list) => {
  return`Tanggal: ${tanggal}
${Ktdprjct.absen[from][2] ? Ktdprjct.absen[from][2] + '\n': ''}
╭─「 Daftar Absen 」
│Total: ${absen.length}
${list}
╰────`
}


	
	
	