// CREATOR SC : KTDPrjct
// MW RECODE RECODE AJA TAPI JAN HAPUS CREATORNYA

// TQ TO
// ALLAH SWT
// KTDPRJCT
// RIDHO YANG BANTU
// ORANG TUA
// Alphabot yg kasih apikey
// DAN LAIN LAIN

var
{
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WAMessageProto,
  ReconnectMode,
  ProxyAgent,
  ChatModification,
  GroupSettingChange,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  waChatKey,
  mentionedJid,
  processTime,
  prepareMessageFromContent,
  relayWAMessage
} = require("@adiwajshing/baileys")
var simple = require('./lib/simple.js')
var WAConnection = simple.WAConnection(_WAConnection)
var fs = require("fs")
var hx = require('hxz-api')
var ggs = require('google-it')
var axios = require('axios')
var brainly = require('brainly-scraper')
var googleImage = require('g-i-s')
var path = require('path')
var speed = require("performance-now")
var util = require('util')
var crypto = require('crypto')
var request = require('request')
var {
  exec,
  spawn
} = require('child_process')
var fetch = require('node-fetch')
var ms = require('parse-ms')
var toMs = require('ms')
var moment = require('moment-timezone')
var ffmpeg = require('fluent-ffmpeg')
var yts = require('yt-search')

//════[ Ucapan wktu ]════//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (time2 < "22:00:00") {
  var ucapanWaktu = 'Selamat Malam'
}
if (time2 < "19:00:00") {
  var ucapanWaktu = 'Selamat Petang'
}
if (time2 < "18:00:00") {
  var ucapanWaktu = 'Selamat Sore'
}
if (time2 < "15:00:00") {
  var ucapanWaktu = 'Selamat Siang️'
}
if (time2 < "11:00:00") {
  var ucapanWaktu = 'Selamat Pagi'
}
if (time2 < "05:00:00") {
  var ucapanWaktu = 'Selamat Malam'
}

//════[ LIB ]════//
var help = require("./help.js")
var Exif = require('./lib/exif')
var exif = new Exif()
var off = require('./lib/afk.js')
var premiuma = require("./lib/premiun")
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var {
  fetchJson,
  getBase64,
  kyun,
  createExif
} = require('./lib/fetcher')
var {
  uploadImages
} = require('./lib/uploadimage')
var {
  sleep,
  isAfk,
  cekafk,
  addafk
} = require('./lib/offline')
var {
  fetchJosn,
  fetchText
} = require('./lib/fetcher')
var {
  wikiSearch
} = require('./lib/wiki')
var { 
  color,
  bgcolor
} = require('./lib/color')
var {
  wait,
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  start,
  info,
  success,
  close
} = require('./lib/functions')
var { yta, ytv, uploadImages, styleText } = require('./lib/ytdl')
var { y2mateA, y2mateV } = require('./lib/y2mate')

//════[ Setting & Thumb ]════//
offline = false
blocked = []
owner = setting.OwnerNumber
ownername = setting.OwnerName
botname = setting.BotName
ktdkey = setting.Apikey
fake = `@Ktdprjct`
timestampe = speed();
latensie = speed() - timestampe

var fakeimage = fs.readFileSync('./media/logonya.jpg')

//════[ Data Base ]════//
var afk = JSON.parse(fs.readFileSync('./lib/off.json'))
var ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
var _user = JSON.parse(fs.readFileSync('./database/user/user.json'))
var premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
let _off = JSON.parse(fs.readFileSync('./database/group/afk.json'))
var _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))

var cekUser = (sender) => {
  let status = false
  Object.keys(_user).forEach((i) => {
    if (_user[i].id === sender) {
      status = true
    }
  })
  return status
}

//════[ Module ]════//
module.exports = Ktdprjct = async (Ktdprjct, chatUpdate, mek) => {
  try {
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    mek = chatUpdate.messages.all()[0]
    if (!mek.message) return
    if (mek.key && mek.key.remoteJid == 'status@broadcast') return
    global.blocked
    simple.smsg(Ktdprjct, mek)
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message: mek.message
    if (typeof mek.text !== 'string') mek.text = ''
    var content = JSON.stringify(mek.message)
    var from = mek.key.remoteJid
    var {
      text,
      extendedText,
      contact,
      contactsArray,
      groupInviteMessage,
      listMessage,
      buttonsMessage,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
      quotedMsg
    } = MessageType
    var tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
    var twib = moment().tz('Asia/Jakarta').format("HH:mm:ss")
    var twita = moment().tz('Asia/Makassar').format("HH:mm:ss");
    var twit = moment().tz('Asia/Jayapura').format("HH:mm:ss");
    var type = Object.keys(mek.message)[0]
    var cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation: (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption: (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption: (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text: ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    var prefix = /^[#]/.test(cmd) ? cmd.match(/^[#]/gi): '#'
    body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation: (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption: (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption: (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text: (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId: (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId: ''
    budy = (type === 'conversation') ? mek.message.conversation: (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text: ''
    let chats = cmd.match(prefix) ? cmd.split(prefix).find((v) => v === cmd.replace(prefix, "")): cmd;

    var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
    var args = body.trim().split(/ +/).slice(1)
    var arg = budy.slice(command.length + 2, budy.length)
    var ar = args.map((v) => v.toLowerCase())
    var isCmd = body.startsWith(prefix)
    var q = args.join(' ')
    var Verived = "${owner}@s.whatsapp.net"
    var txt = mek.message.conversation
    var botNumber = Ktdprjct.user.jid
    var ownerNumber = [`${owner}@s.whatsapp.net`,"6285161212950@s.whatsapp.net"]
    var isGroup = from.endsWith('@g.us')
    let sender = isGroup ? mek.participant: mek.key.remoteJid
    let senderr = mek.key.fromMe ? Ktdprjct.user.jid: mek.key.remoteJid.endsWith('@g.us') ? mek.participant: mek.key.remoteJid
    var groupMetadata = isGroup ? await Ktdprjct.groupMetadata(from): ''
    var groupName = isGroup ? groupMetadata.subject: ''
    var groupId = isGroup ? groupMetadata.jid: ''
    var groupMembers = isGroup ? groupMetadata.participants: ''
    var groupDesc = isGroup ? groupMetadata.desc: ''
    var groupOwner = isGroup ? groupMetadata.owner: ''
    var groupAdmins = isGroup ? getGroupAdmins(groupMembers): ''
    var isGroupAdmins = groupAdmins.includes(sender) || false
    var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
    var isBan = ban.includes(sender)
    var isPrem = isOwner || mek.key.fromMe ? true: premiuma.checkPremiumUser(sender, premium)
    var isUser = cekUser(sender)
    var isAfkOn = off.checkAfkUser(sender, _off)
    var senderNumber = sender.split("@")[0]
    var hour_now = moment().format('HH:mm:ss')
    var conts = mek.key.fromMe ? Ktdprjct.user.jid: Ktdprjct.contacts[mek.sender]
    var pushname = mek.key.fromMe ? Ktdprjct.user.name: !conts?'-': conts.notify || conts.vname || conts.name || '-'
    var mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid: []
    var mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "": ""
    var mention = typeof(mentionByTag) == 'string' ? [mentionByTag]: mentionByTag
    mention != undefined ? mention.push(mentionByreply): []
    var mentionUser = mention != undefined ? mention.filter(n => n): []

    var isAntiLink = isGroup ? _antilink.includes(from): false
    var isOwner = ownerNumber.includes(sender)
    var imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
    var quoted = mek.quoted ? { message: { [mek.quoted.mtype]: mek.quoted } } : mek
    var totalChat = await Ktdprjct.chats.all()
    var groups = Ktdprjct.chats.array.filter(v => v.jid.endsWith('g.us'))
    var privat = Ktdprjct.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))

    //════[ mess ]════//

    mess = {
      prem: `Fitur Ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan tekan button di bawah`,
      wait: '[❗] _Tunggu Sebentar, Perintah Sedang Di Proses..._',
      eror: '⚠️ Fitur ini sedang eror',
      success: '[❗] _Done_ ',
      ban: 'kamu telah di ban oleh bot',
      error: {
        stick: '[❗] _Maaf Itu Bukan Sticker_',
        Iv: '[❗] _Link invalid_'
      },
      only: {
        group: '[❗] _Fitur Hanya Bisa di Grup_',
        owner: '[❗] _Fitur ini Khusus Owner_',
        admin: '[❗] _Fitur ini Khusus Admin Grup_',
        Badmin: '[❗] _Jadikan Bot Admin Grup_'
      }
    }

    //════[ reply dll ]════//
    var isUrl = (url) => {
      return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
    }
    var reply = (teks) => {
      Ktdprjct.sendMessage(from, teks, text, {
        quoted: mek, thumbnail: fakeimage
      })
    }
    var fakethumb = (teks, yes) => {
      Ktdprjct.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync('./media/logonya.jpg'), quoted: mek, caption: yes
      })
    }
    var mentions = (teks, memberr, id) => {
      (id == null || id == undefined || id == false) ? Ktdprjct.sendMessage(from, {
        text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/logonya2.png')}, extendedText, {
        sendEphemeral: true, contextInfo: {
          "mentionedJid": memberr
        }
      }): Ktdprjct.sendMessage(from, {
        text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/logonya2.png')}, extendedText, {
        sendEphemeral: true, quoted: mek, contextInfo: {
          "mentionedJid": memberr
        }
      })
    }

    var addRegisterUser = (userid, sender, twib, serials) => {
      var obj = {
        id: userid,
        name: sender,
        time: twib,
        serial: serials
      }
      _user.push(obj)
      fs.writeFileSync('./database/user/user.json', JSON.stringify(_user))
    }
    const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya `
    const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak jika button tidak terlihat ketik #verify```'
    var createSerial = (size) => {
      return crypto.randomBytes(size).toString('hex').slice(0, size)
    }
    var serialUser = createSerial(10)
    var costum = (pesan, tipe, target, target2) => {
      Ktdprjct.sendMessage(from, pesan, tipe, {
        quoted: {
          key: {
            fromMe: false, participant: `${target}`, ...(from ? {
              remoteJid: from
            }: {})
          }, message: {
            conversation: `${target2}`
          }
        }
      })
    }
    function monospace (str) {
      return "```" + str + "```"
    }
    function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())]
    }
    var freply = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? {
          remoteJid: '16504228206@s.whatsapp.net'
        }: {})
      },
      message: {
        "contactMessage": {
          "displayName": `${pushname}`,
          "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          "jpegThumbnail": fs.readFileSync('./media/logonya.jpg')
        }}}

    //════[ button ]════//
    
    //════[ run time ]════//
    var runtime = function (seconds) {
      seconds = Number(seconds);
      var d = Math.floor(seconds / (3600 * 24));
      var h = Math.floor((seconds % (3600 * 24)) / 3600);
      var m = Math.floor((seconds % 3600) / 60);
      var s = Math.floor(seconds % 60);
      var dDisplay = d > 0 ? d + (d == 1 ? " hari, ": " Hari, "): "";
      var hDisplay = h > 0 ? h + (h == 1 ? " jam, ": " Jam, "): "";
      var mDisplay = m > 0 ? m + (m == 1 ? " menit, ": " Menit, "): "";
      var sDisplay = s > 0 ? s + (s == 1 ? " detik": " Detik"): "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
    }
    function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  }

    //════[ fake ]════//
    var ftrol = {
      key: {
        participant: '0@s.whatsapp.net'
      },
      message: {
        orderMessage: {
          itemCount: 123,
          status: 1,
          surface: 1,
          message: `RUNTIME : ${runtime(process.uptime())}`,
          orderTitle: `${botname}`,
          thumbnail: fakeimage,
          sellerJid: '${owner}@s.whatsapp.net'
        }
      }
    }

    //════[ mess sticker ]════//
    var sticGrup = (hehe) => {
      ano = fs.readFileSync('./sticker/mess/grup.webp')
      Ktdprjct.sendMessage(hehe, ano, sticker, {
        quoted: mek
      })
    }
    var sticOwner = (hehe) => {
      ano = fs.readFileSync('./sticker/mess/owner.webp')
      Ktdprjct.sendMessage(hehe, ano, sticker, {
        quoted: mek
      })
    }
    var sticNotAdmin = (hehe) => {
      ano = fs.readFileSync('./sticker/mess/notadmin.webp')
      Ktdprjct.sendMessage(hehe, ano, sticker, {
        quoted: mek
      })
    }
    var sticAdmin = (hehe) => {
      ano = fs.readFileSync('./sticker/mess/admin.webp')
      Ktdprjct.sendMessage(hehe, ano, sticker, {
        quoted: mek
      })
    }
    var sticWait = (hehe) => {
      ano = fs.readFileSync('./sticker/mess/wait.webp')
      Ktdprjct.sendMessage(hehe, ano, sticker, {
        quoted: mek
      })
    }
    var sticBan = (hehe) => {
      ano = fs.readFileSync('./sticker/mess/banned.webp')
      Ktdprjct.sendMessage(hehe, ano, sticker, {
        quoted: mek
      })
    }
    var sticToxic = (hehe) => {
      ano = fs.readFileSync('./sticker/mess/toxic.webp')
      Ktdprjct.sendMessage(hehe, ano, sticker, {
        quoted: mek
      })
    }

    //════[ storage ]════//
    var sendStickerFromUrl = async(to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        })
      }
      download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
          let media = fs.readFileSync(asw)
          Ktdprjct.sendMessage(to, media, MessageType.sticker, {
            quoted: mek
          })
          fs.unlinkSync(filess)
          fs.unlinkSync(asw)
        })
      })
    }

    var sendFileFromUrl = async(link, type, options) => {
      hasil = await getBuffer(link)
      Ktdprjct.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
          Ktdprjct.sendMessage(from, hasil, type, options).catch(e => {
            Ktdprjct.sendMessage(from, {
              url: link
            }, type, options).catch(e => {
              reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
              console.log(e)
            })
          })
        })
      })
    }

    var sendMediaURL = async(to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids)
      }
      var fn = Date.now() / 10000;
      var filename = fn.toString()
      let mime = ""
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers['content-type']
          request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        })
      }
      download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if (mime === "image/gif") {
          type = MessageType.video
          mime = Mimetype.gif
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio
        }
        Ktdprjct.sendMessage(to, media, type, {
          quoted: ftrol, mimetype: mime, caption: text, contextInfo: {
            "mentionedJid": mids
          }})
        fs.unlinkSync(filename)
      })
    }

    //════[ Afk ]════//
    cekafk(afk)
    if (!mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        Ktdprjct.sendMessage(mek.key.remoteJid, `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text, {
          contextInfo: {
            mentionedJid: [`${owner}@s.whatsapp.net`], 'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {
              "imageMessage": {
                "caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
      }
    }
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
              for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return
                  addafk(mek.key.remoteJid)
                  heheh = ms(Date.now() - waktu)
                  Ktdprjct.sendMessage(mek.key.remoteJid, `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text, {
                    contextInfo: {
                      mentionedJid: [`${owner}@s.whatsapp.net`], 'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {
                        "imageMessage": {
                          "caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
                }
              }
            }
          }
        }
      }
    }

    if (isGroup && !mek.key.fromMe) {
      for (let ment of mentionUser) {
        if (off.checkAfkUser(ment, _off)) {
          getId = off.getAfkId(ment, _off)
          getReason = off.getAfkReason(getId, _off)
          getTime = Date.now() - off.getAfkTime(getId, _off)
          heheh = ms(getTime)
          Ktdprjct.sendMessage(from, `Jangan tag, dia sedang afk\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`, text, {
            quoted: mek
          })
          // Ktdprjct.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: Ktdprjct.parseMention(budy)}})
        }
      }
      if (off.checkAfkUser(sender, _off)) {
        getId = off.getAfkId(sender, _off)
        getReason = off.getAfkReason(getId, _off)
        getTime = Date.now() - off.getAfkTime(getId, _off)
        heheh = ms(getTime)
        _off.splice(off.getAfkPosition(sender, _off), 1)
        fs.writeFileSync('./database/group/afk.json', JSON.stringify(_off))
        Ktdprjct.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {
          contextInfo: {
            mentionedJid: [sender]}})
      }
    }

    //════[ read ]════//
    Ktdprjct.chatRead(from, "read")
    //════[ hidetag ]════//
    var hideTag = async function(from,
      text) {
      let anu = await Ktdprjct.groupMetadata(from)
      let members = anu.participants
      let ane = []
      for (let i of members) {
        ane.push(i.jid)
      }
      Ktdprjct.sendMessage(from, {
        text: text, jpegThumbnail: fs.readFileSync('media/logonya2.png')}, 'extendedTextMessage', {
        contextInfo: {
          "mentionedJid": ane
        }})
    }

    //════[ anti link ]════//
    if (budy.includes("https://chat.whatsapp.com/")) {
      if (!isGroup) return
      if (!isAntiLink) return
      if (isGroupAdmins) return
      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
      reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
      setTimeout(() => {
        Ktdprjct.groupRemove(from, [kic]).catch((e) => {
          reply(`Selamat Lu Untung Bot Bukan Admin`)
        })
      }, 0)
    }

    //════[ termos ]════//
    colors = ['red',
      'white',
      'black',
      'blue',
      'yellow',
      'green']
    var isMedia = (type === 'imageMessage' || type === 'videoMessage')
    var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
    if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '|\x1b[1;32m CHAT \x1b[1;37m|', twita, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '|\x1b[1;32m GRUP \x1b[1;37m|', twita, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

    //════[ command ]════//
    try {
      switch (command) {

        case 'daftar': case 'ktdprjctreg': case 'verify': case 'register':
        case 'registrasi': {
            if (isUser) return reply('Kamu Sudah Pernah Melakukan Registrasi Sebelumnya..')
            addRegisterUser(sender, pushname, twib, serialUser)
            Ktdprjct.sendButton(from, help.verify(Ktdprjct, pushname, sender, serialUser, twib, tanggal, _user), '© KTDPRJCT メ Bo† ༆', 'ALL MENU', `${prefix}allmenu`, mek)
          }
          break

        case 'menu': case 'help': case 'm':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          Ktdprjct.send3ButtonLoc(from, fakeimage, help.menu(Ktdprjct, pushname, ucapanWaktu, botname, _user), `@Ktdprjct`, 'All menu', `${prefix}allmenu`, 'Owner', `${prefix}owner`, 'Rules', `${prefix}ruls`, mek)
          break

        case 'allmenu':
          var imgs = await Ktdprjct.prepareMessage('0@c.us', fakeimage, image, {
            thumbnail: fakeimage
          })
          var imgCatalog = imgs.message.imageMessage
          var ctlg = await Ktdprjct.prepareMessageFromContent(from, {
            "productMessage": {
              "product": {
                "productImage": imgCatalog,
                "productId": "4457725420906655",
                "title": `_*MENU ${botname}*_`,
                "description": help.help(Ktdprjct, mek, botname, pushname, isOwner, isPrem, isUser, isBan, prefix),
                "productImageCount": 1,
                "firstImageId": 1,
                "salePriceAmount1000": "1000",
                "retailerId": `${tanggal}`,
                "url": "Thank You All"
              },
              "businessOwnerJid": "62895342581896@s.whatsapp.net",
            }
          }, {
            quoted: mek, mimetype: 'image/jpeg'
          })
          Ktdprjct.relayWAMessage(ctlg)
          break

        //════[ Simpel Menu ]════//
        case 'ping': case 'speed':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          reply(`「 _Speed Test_ 」\nMerespon dalam ${latensie.toFixed(4)} Sec`)
          break

        case 'owner':
          members_ids = []
          for (let mem of groupMembers) {
            members_ids.push(mem.jid)
          }
          vcard2 = 'BEGIN:VCARD\n'
          + 'VERSION:3.0\n'
          + `FN:${ownername}\n`
          + `ORG: Creator ${ownername} ;\n`
          + `TEL;type=CELL;type=VOICE;waid=62895342581896:62895342581896\n`
          + 'END:VCARD'.trim()
          Ktdprjct.sendMessage(from, {
            displayName: `Ownernya ${botname}`, vcard: vcard2
          }, contact,
            {
              quoted: ftrol,
            })
          break

        case 'ruls': case 'rulesbot':
          Ktdprjct.send2Button(from, help.rules(Ktdprjct, botname), '@Ktdprjct', 'ALL MENU', `${prefix}allmenu`, 'OWNER', `${prefix}owner`, mek)
          break

        case 'del': case 'd': case 'delete':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          Ktdprjct.deleteMessage(from, {
            id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
          })
          reply(`Sukses Menghapus Pesan Bot`)
          break
          
        case 'asupan':{
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          const asupan = JSON.parse(fs.readFileSync('./database/bot/asupan.json'))
          Ktdprjct.sendFile(from, pickRandom(asupan), 'asupan.mp4', '', mek)
        }
        break

        case 'runtime':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          reply(`RunTime : ${runtime(process.uptime())}`)
          break

        case 'simi': {
          let res = await fetch(global.API('https://api.simsimi.net', '/v2/', {
            text: encodeURIComponent(args.join ``), lc: "id"
          }, ''))
          let json = await res.json()
          if (json.success) reply(json.success)
          else throw json
        }
          break

        case 'report': case 'bug':
          const cfrr1 = body.slice(8)
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (args.length < 1) return reply(`Ketik ${prefix}report [fiturnya] (Error Nya Gimana)`)
          if (cfrr1.length > 300) return Ktdprjct.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {
            quoted: mek
          })
          var nomor = mek.participant
          const ress1 = `*[ REPORT VITUR ]*\n\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr1}`
          var options = {
            text: ress1,
            contextInfo: {
              mentionedJid: [nomor]},
          }
          Ktdprjct.sendMessage('62895342581896@s.whatsapp.net', options, text, {
            quoted: mek
          })
          reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
          break

        case 'request': case 'req':
          const cfrr = body.slice(8)
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (args.length < 1) return reply(`Ketik ${prefix}request [request fitur apa]`)
          if (cfrr.length > 300) return Ktdprjct.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {
            quoted: mek
          })
          var nomor = mek.participant
          const ress = `*[ REQUEST VITUR ]*\n\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
          var options = {
            text: ress,
            contextInfo: {
              mentionedJid: [nomor]},
          }
          Ktdprjct.sndMessage('62895342581896@s.whatsapp.net', options, text, {
            quoted: mek
          })
          reply('Request Anda Telah Sampai Ke Pembuat SC,\nRequests palsu atau main² tidak akan ditanggapi.')
          break

        case 'tourl':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
            owgi = await Ktdprjct.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
          } else {
            reply('reply gambar/video')
          }
          break

        //════[ Sticker Menu ]════//
        case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme':
        case 'smeme': {
            if (isBan) return sticBan(from)
            if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
            if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* KTDPRJCT`)
            if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* KTDPRJCT`)
            try {
              if (!isQuotedImage) return reply(`Reply Gambar!`)
              sticWait(from)
              var teks2 = args.join(' ')
              var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
              var mediia = await Ktdprjct.downloadMediaMessage(enmedia)
              var njay = await uploadImages(mediia)
              var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
              sendStickerFromUrl(from, `${resu}`)
            } catch (e) {
              console.log(e)
            }
          }
          break

        case 'stickerwm': case 'gifstiker': case 's': case 'stickergif': case 'sticker': case 'stiker': case 'swm':
        case 'takestick': {
            if (isBan) return sticBan(from)
            if (!isUser) return sendButMessage(from, mess.noregis, `Created By KTDPRJCT メ Bo†`, [{
              buttonId: `${prefix}ktdprjctreg`, buttonText: {
                displayText: `Daftar`,
              }, type: 1,
            }], {
              quoted: ftrol
            });
            let packname1 = q.split('|')[0] ? q.split('|')[0]: `KTDPRJCT Bot`
            let author1 = q.split('|')[1] ? q.split('|')[1]: '62895342581896'
            if (isMedia && !mek.message.videoMessage || isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
              let media = await Ktdprjct.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
              exif.create(packname1, author1, `stickwm_${sender}`)
              await ffmpeg(`${media}`)
              .input(media)
              .on('start', function (cmd) {
                console.log(color(`STARTED : ${cmd}`, 'yellow'))
              })
              .on('error', function (err) {
                console.log(color(`ERROR : ${err}`, 'red'))
                fs.unlinkSync(media)
                reply(`error kak silahkan coba lagi nanti`)
              })
              .on('end', function () {
                console.log(color(`FINISH`, 'magenta'))
                exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                  if (error) return reply(`error kak silahkan coba lagi nanti`)
                  Ktdprjct.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {
                    quoted: mek
                  })
                  fs.unlinkSync(media)
                  fs.unlinkSync(`./sticker/${sender}.webp`)
                  fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
                })
              })
              .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(`./sticker/${sender}.webp`)
            } else if ((isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 7000000)) {
              let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
              let media = await Ktdprjct.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
              exif.create(packname1, author1, `stickwm_${sender}`)
              sticWait(from)
              await ffmpeg(`${media}`)
              .inputFormat(media.split('.')[4])
              .on('start', function (cmd) {
                console.log(color(`STARTED : ${cmd}`, 'yellow'))
              })
              .on('error', function (err) {
                console.log(color(`ERROR : ${err}`, 'red'))
                fs.unlinkSync(media)
                let tipe = media.endsWith('.mp4') ? 'video': 'gif'
                reply(`error kak silahkan coba lagi nanti`)
              })
              .on('end', function () {
                console.log((`FINISH`, 'magenta'))
                exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                  if (error) return reply(`error kak silahkan coba lagi nanti`)
                  Ktdprjct.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {
                    quoted: mek
                  })
                  fs.unlinkSync(media)
                  fs.unlinkSync(`./sticker/${sender}.webp`)
                  fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
                })
              })
              .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(`./sticker/${sender}.webp`)
            } else if (isQuotedSticker) {
              let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              let media = await Ktdprjct.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
              exif.create(packname1, author1, `takestick_${sender}`)
              exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                if (error) return reply(`error kak silahkan coba lagi nanti`)
                Ktdprjct.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {
                  quoted: mek
                })
                fs.unlinkSync(media)
                fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
              })
            } else {
              reply(`Tag Gambar / Video Dengan Caption ${prefix}sticker \nNote : Durasi video maximal 6 detik`)
            }
          }
          break

        case 'tovideo': {
          let {
            webp2mp4
          } = require('./lib/webp2mp4')
          let {
            ffmpeg
          } = require('./lib/converter')
          if (!quoted) throw 'reply stickernya'
          let mime = quoted.mimetype || ''
          if (!/webp|audio/.test(mime)) throw 'Reply sticker or audio!'
          sticWait(from)
          let media = await quoted.download()
          let out = Buffer.alloc(0)
          if (/webp/.test(mime)) {
            out = await webp2mp4(media)
          } else if (/audio/.test(mime)) {
            out = await ffmpeg(media, [
              '-filter_complex', 'color',
              '-pix_fmt', 'yuv420p',
              '-crf', '51',
              '-c:a', 'copy',
              '-shortest'
            ], 'mp3', 'mp4')
          }
          await Ktdprjct.sendFile(from, out, 'out.mp4', null, mek)
        }
          break

        case 'toimg':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isQuotedSticker) return reply('reply stickernya')
          encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
          media = await Ktdprjct.downloadAndSaveMediaMessage(encmedia)
          ran = getRandom('.png')
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
            buffer = fs.readFileSync(ran)
            Ktdprjct.sendMessage(from, buffer, image, {
              quoted: mek, caption: '@Ktdprjct'
            })
            fs.unlinkSync(ran)
          })
          break

        case 'memegenerator': case 'memegen': {
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
          if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
          try {
            if (!isQuotedImage) return reply(`Reply Gambar!`)
            sticWait(from)
            var teks1 = q.split('|')[0] ? q.split('|')[0]: ''
            var teks2 = q.split('|')[1] ? q.split('|')[1]: ''
            var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
            var mediiia = await Ktdprjct.downloadMediaMessage(enmedia)
            var njay = await uploadImages(mediiia)
            var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
            Ktdprjct.sendMessage(from, resu, image, {
              caption: 'Jadiin Sticker bang', thumbnail: Buffer.alloc(0), quoted: mek
            })
            fs.unlinkSync(mediiia)
          } catch (e) {
            console.log(e)
          }
        }
          break

        //════[ Premium Menu ]════//
        case 'premium':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          reply(`Silahkan Click Link DiBawah Untuk Menjadi User Premium\n\nhttps://bit.ly/3IvgGt2`)
          break

        case 'premiumcheck': case 'cekprem': case 'cekpremium':
          if (!isPrem) return reply(`Akun kamu belum premium silahkan ${prefix}premium`)
          const cekExp = ms(await premiuma.getPremiumExpired(sender, premium) - Date.now())
          reply(`*「 PREMIUM EXPIRED 」*\n\n🆔 *ID*: ${sender}\n🏦 *Premium left*: ${cekExp.days} days ${cekExp.hours} hours ${cekExp.minutes} minutes`)
          break

        case 'listprem': case 'listpremium':
          let txt = `「 *PREMIUM USER LIST* 」\n\n`
          let men = [];
          for (let i of premium) {
            men.push(i.id)
            const checkExp = ms(i.expired - Date.now())
            txt += `🆔 *ID :* @${i.id.split("@")[0]}\n⏰ *Expired*: ${checkExp.days} days ${checkExp.hours} hours ${checkExp.minutes} minutes\n\n`
          }
          mentions(txt, men, true)
          break

        //════[ Search Menu ]════//
        case 'wiki': case 'wikipedia':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
          teks = args.join(' ')
          sticWait(from)
          res = await wikiSearch(teks).catch(e => {
            return reply('_[ ! ] Error Hasil Tidak Ditemukan_')
          })
          result = `\n*「 _WIKIPEDIA_ 」*\n\n*Judul :* ${res[0].judul}\n\n*Wiki :* ${res[0].wiki}`
          sendFileFromUrl(res[0].thumb, image, {
            quoted: ftrol, caption: result
          }).catch(e => {
            reply(result)
          })
          break

        case 'image': case 'gimg': case 'gimage': case 'googleimage':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (args.length < 1) return reply('Apa Yang Mau Dicari?')
          sticWait(from)
          teks = args.join(' ')
          res = await googleImage(teks, google)
          function google(error, result) {
            if (error) {
              return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')} else {
              gugIm = result
              random = gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {
                quoted: freply, caption: `*Hasil Pencarian Dari :* ${teks}`
              })
            }
          }
          break

        case 'googlesearch': case 'googlesrc': case 'google': case 'ggs': {
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (args.length < 1) return reply('Yang mau di cari apaan?')
          teks = args.join(' ')
          sticWait(from)
          res1 = await ggs({
            'query': `${teks}`
          })
          kant = `\n*「 _GOOGLE SEARCH_ 」*\n\n*query* : ${teks}`
          for (let i of res1) {
            kant += `\n\n*Judul* : ${i.title}\n\n*Link* : ${i.link}\n*Keterangan* : ${i.snippet}\n───────────\n`
          }
          var akhir = kant.trim()
          reply(akhir)
        }
          break

        case 'ytsearch': case 'yts':
          if (isBan)return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (args.length < 1) return reply('Tolong masukan query!')
          var srch = args.join('');
          sticWait(from)
          try {
            var aramas = await yts(srch);
          } catch {
            return await Ktdprjct.sendMessage(from, 'Error!', MessageType.text, dload)
          }
          aramat = aramas.all
          var tbuff = await getBuffer(aramat[0].image)
          var ytresult = '';
          ytresult += `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆           *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶\n\n*search :* ${q}\n\n\n`
          aramas.all.map((video) => {
            ytresult += '🐣 Title : ' + video.title + '\n'
            ytresult += '📬 Link : ' + video.url + '\n'
            ytresult += '⏰ Durasi : ' + video.timestamp + '\n'
            ytresult += '👀 view : ' + video.views + '\n'
            ytresult += '👤 Channel : ' + video.author.name + '\n'
            ytresult += '🚀 Upload : ' + video.ago + '\n________________________\n\n'
          });
          ytresult += '*KTDPRJCT メ Bo† ༆*'
          await fakethumb(tbuff, ytresult)
          break

        case 'pinterest':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!q) return reply('gambar apa?')
          sticWait(from)
          let pin = await hx.pinterest(q)
          let ac = pin[Math.floor(Math.random() * pin.length)]
          let di = await getBuffer(ac)
          await Ktdprjct.sendMessage(from, di, image, {
            quoted: mek, caption: `hasil pencarian dari: ${q}`
          })
          break

        case 'playstore':
          if (isBan)return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!q) return reply('*Mau Cari Aplikasi Apa?*')
          let play = await hx.playstore(q)
          let store = '\n────────────────\n'
          for (let i of play) {
            store += help.playstore(Ktdprjct,i)
          }
          reply(store)
          break

        case 'searchgrup': case 'srcgrup':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isPrem)return reply(mess.prem)
          if (args.length < 1) return reply(`Nama Group? Contohnya\n${prefix + command} jb`)
          sticWait(from)
          hx.linkwa(q).then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
              res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
          })
          break
        
        case 'githubsearch':{
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          let res = await fetch(global.API('https://api.github.com', '/search/repositories', {q}))
          let json = await res.json()
          if (res.status !== 200) throw json
          let str = json.items.map((repo, index) => {
            return help.github(Ktdprjct, repo, index, formatDate).trim()
          }).join('\n\n')
          reply(str) 
        }
          break
        
        //════[ Download Menu ]════//
        case 'play':
        case 'ytdl':
        case 'ytplay':
        case 'play2': {
            if (isBan) return sticBan(from)
            if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
            if (!q) return reply(`Example : ${prefix+command} Judul`)
            reply(mess.wait)
            let ytdl = await yts(q)
            let thumbInfo = help.youtube(Ktdprjct, ytdl)
            Ktdprjct.sendButtonLoc(from, `${ytdl.all[0].image}`, thumbInfo, 'Pencet Tombol Dibawah Untuk Download\n@Ktdprjct', 'Audio 🎶', `${prefix}pleybuttonaudio ${ytdl.all[0].url}`, mek)
          }
          break
          
        case 'pleybuttonaudio': {
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          sticWait(from)
          let yut = await yts(q)
          yta(yut.videos[0].url)
          .then((res) => {
            const {
              dl_link, thumb, title, filesizeF, filesize
            } = res
            axios.get(`${dl_link}`)
            .then((a) => {
              if (Number(filesize) >= 20000) return reply('FILE TERLALU BESAR!!!')
              sendFileFromUrl(dl_link, audio, {
                mimetype: 'audio/mp4', quoted: mek
              })
            })
          })
        }
          break
        
        case 'ttdl': case 'savetiktok': case 'tiktok': case 'tiktokdl': case 'tiktoknowm': {
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!q) return reply('Linknya?')
          var {
            TiktokDownloader
          } = require('./lib/tiktokdl')
          sticWait(from)
          res = await TiktokDownloader(`${q}`).catch(e => {
            reply(mess.error.api)
          })
          console.log(res)
          sendMediaURL(from, `${res.result.nowatermark}`)
        }
          break

      case 'ttwm': case 'tiktokwm':{
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!q) return reply('Linknya?')
          var {
            TiktokDownloader
          } = require('./lib/tiktokdl')
          sticWait(from)
          res = await TiktokDownloader(`${q}`).catch(e => {
            reply(`Gagal Mendapatkan Data...`)
          })
          console.log(res)
          sendMediaURL(from, `${res.result.watermark}`)
        }
          break

        //════[ Owner Menu ]════//
        case 'bc':
          if (!isOwner && !mek.key.fromMe) return sticOwner(from)
          if (args.length < 1) return reply('teks?')
          anu100 = await Ktdprjct.chats.all()
          if (isMedia && !Ktdprjct.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ktdprjct).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: Ktdprjct
            bc100 = await Ktdprjct.downloadMediaMessage(encmedia)
            for (let _ of anu100) {
              Ktdprjct.sendMessage(_.jid, bc100, image, {
                quoted: ftrol, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`
              })
            }
            reply('Suksess broadcast')
          } else {
            for (let _ of anu100) {
              Ktdprjct.sendMessage(_.jid,
                {
                  "contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
                  "footerText": `${tanggal}`,
                  "buttons": [{
                    "buttonId": `helloworld`,
                    "buttonText": {
                      "displayText": "OKE"
                    }, "type": "RESPONSE"
                  }], "headerType": 'LOCATION',
                  locationMessage: {
                    degreesLatitude: '',
                    degreesLongitude: '',
                    jpegThumbnail: fakeimage,
                  }}, MessageType.buttonsMessage)
            }
            reply('Suksess broadcast')
          }
          break

        case 'ban':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
            ny = `${args[0].replace('@', '')}@s.whatsapp.net`
            ban.push(ny)
            fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
            reply(`Nomor ${ny} telah dibanned!`)
          } else {
            ny = `${mentionUser}`
            ban.push(ny)
            fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
            reply(`Nomor ${ny} telah dibanned!`)
          }
          break

        case 'unban':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
            ah = `${args[0].replace("@", "")}@s.whatsapp.net`
            unb = ban.indexOf(ah)
            ban.splice(unb, 1)
            fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
            reply(`Nomor ${ah} telah di unban!`)
          } else {
            ah = `${mentionUser}`
            unb = ban.indexOf(ah)
            ban.splice(unb, 1)
            fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
            reply(`Nomor ${ah} telah di unban!`)
          }
          break

        case 'setfake':
          if (!isOwner) return sticOwner(from)
          if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
            delb = await Ktdprjct.downloadMediaMessage(boij)
            fs.writeFileSync(`./media/logonya2.png`, delb)
            reply('Sukses')
          } else {
            reply(`Kirim gambar dengan caption ${prefix}setfake`)
          }
          break

        case 'setthumb':
          if (!isOwner) return sticOwner(from)
          if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
            delb = await Ktdprjct.downloadMediaMessage(boij)
            fs.writeFileSync(`./media/logonya.jpg`, delb)
            reply('Sukses')
          } else {
            reply(`Kirim gambar dengan caption ${prefix}setfake`)
          }
          break

        case 'allchats':
          let _groupChats = []
          let _privateChats = []
          Ktdprjct.chats.all().forEach(chats => {
            if (chats.jid.endsWith("@g.us")) {
              let str = `=> Group Name : ${chats.name}\n=> Group jid : ${chats.jid}\n`
              _groupChats.push(str)
            }
            if (chats.jid.endsWith("@s.whatsapp.net")) {
              let str = `=> Contact Name : ${chats.name}\n=> Contact jid : ${chats.jid}\n`
              _privateChats.push(str)
            }
          })
          let allchatHeader = monospace("==> [ A L L  C H A T S ] <==")
          reply(`${allchatHeader}\nGroup chats total : ${_groupChats.length}\nPrivate chats total : ${_privateChats.length}\nTotal chats : ${_groupChats.length + _privateChats.length}\n\n=> Group Chats <=\n${_groupChats.join("\n")}\n\n=> Private Chats <=\n${_privateChats.join("\n")}`)
          break

        case 'clearall':
          if (!isOwner) return reply('Kamu siapa?')
          anu = await Ktdprjct.chats.all()
          for (let _ of anu) {
            Ktdprjct.modifyChat(_.jid, 'clear', {
              includeStarred: false
            }).catch(console.log)
          }
          reply('Sukses delete all chat :)')
          break

        //════[ Group Menu ]════//
        case 'afk':
          if (!isGroup) return sticGrup(from)
          if (isAfkOn) return
          reason = q ? q: 'Nothing'
          off.addAfkUser(sender, Date.now(), reason, _off)
          papa = `*${pushname}* Sekarang sedang Afk\n*Reason :* ${reason}\n`
          Ktdprjct.sendMessage(from, papa, text, {
            quoted: mek
          })
          break

        case 'setppgrup':
        case 'setpp':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins && !mek.key.fromMe) return sticAdmin(from)
          if (!isBotGroupAdmins) return sticNotAdmin(from)
          if (isQuotedImage) {
            let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
            let media = await Ktdprjct.downloadMediaMessage(encmedia)
            Ktdprjct.updateProfilePicture(from, media)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
          } else {
            reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
          }
          break

        case 'tagall':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
          members_id = []
          teks = (args.length > 1) ? args.join(' ').trim(): ''
          teks += '\n\n'
          for (let mem of groupMembers) {
            teks += `• @${mem.jid.split('@')[0]}\n`
            members_id.push(mem.jid)
          }
          mentions(teks, members_id, true)
          break

        case 'online':
        case 'listonline':
        case 'here':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          try {
            let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0]: from
            let online = [...Object.keys(Ktdprjct.chats.get(ido).presences),
              Ktdprjct.user.jid]
            Ktdprjct.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
              quoted: mek, contextInfo: {
                mentionedJid: online
              }})
          } catch (e) {
            reply(`${e}`)
          }
          break

        case 'infogc':
        case 'infogrup':
        case 'infogrouup':
        case 'grupinfo':
        case 'groupinfo':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          try {
            var pic = await Ktdprjct.getProfilePicture(from)
          } catch {
            var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
          }
          let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* Auto Aktif\n*AntiLink :* ${isAntiLink ? 'Aktif': 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
          Ktdprjct.sendMessage(from, await getBuffer(pic), image, {
            quoted: mek, caption: ingfo, contextInfo: {
              "mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
          break

        case 'demote':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(only.admin)
          if (!isBotGroupAdmins) return sticNotAdmin(from)
          if (args.length < 1) return reply(`Tag Orangnya`)
          Ktdprjct.groupDemoteAdmin(from, mentionUser)
          reply(`D O N E ! ! !`)
          break

        case 'promote':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(only.admin)
          if (!isBotGroupAdmins) return sticNotAdmin(from)
          if (args.length < 1) return reply(`Tag Orangnya`)
          Ktdprjct.groupMakeAdmin(from, mentionUser)
          reply(`D O N E ! ! !`)
          break

        case 'setname':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins) return reply(only.admin)
          if (!isBotGroupAdmins) return sticNotAdmin(from)
          Ktdprjct.groupUpdateSubject(from, `${body.slice(9)}`)
          Ktdprjct.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, {
            quoted: ftrol
          })
          break

        case 'setdesc':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins) return reply(only.admin)
          if (!isBotGroupAdmins) return sticNotAdmin(from)
          Ktdprjct.groupUpdateDescription(from, `${body.slice(9)}`)
          Ktdprjct.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, {
            quoted: ftrol
          })
          break

        case 'hidetag':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(only.admin)
          try {
            hidetext = q ? q: 'Nothing'
            quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
            hideTag(from, `${quotedText}`)
          } catch {
            hideTag(from, `HIDE TAG\n\nFrom : ${pushname}\nText : ${hidetext}`)
          }
          break

        case 'antilink':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(only.admin)
          if (!isBotGroupAdmins) return sticNotAdmin(from)
          if (!q) return reply(`Pilih on atau off`)
          if (args[0].toLowerCase() === 'on') {
            if (isAntiLink) return reply(`Udah aktif`)
            _antilink.push(from)
            fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
            reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
          } else if (args[0].toLowerCase() === 'off') {
            let anu = _antilink.indexOf(from)
            _antilink.splice(anu, 1)
            fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
            reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
          } else {
            reply(`_Pilih on atau off_`)
          }
          break

        case 'linkgroup':
        case 'linkgrup':
        case 'linkgc':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          if (!isBotGroupAdmins) return sticNotAdmin(from)
          linkgc = await Ktdprjct.groupInviteCode(from)
          yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
          Ktdprjct.sendMessage(from, yeh, text, {
            quoted: ftrol
          })
          break

        case 'listadmin': case 'tagadmin':
          if (!isGroup) return sticGrup(from)
          teks = `「 _TAG ADMIN_ 」\nGroup : ${groupMetadata.subject}\nTeks : ${q}\n\nTotal Admin : ${groupAdmins.length}\n`
          no = 0
          for (let adgrup of groupAdmins) {
            no += 1
            teks += `[${no.toString()}] @${adgrup.split('@')[0]}\n`
          }
          mentions(teks, groupAdmins, true)
          break

        case 'resetlinkgc':
        case 'resetlinkgroup':
        case 'resetlinkgrup':
        case 'revoke':
        case 'resetlink':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins && !mek.key.fromMe) return reply(only.admin)
          if (!isBotGroupAdmins) return sticNotAdmin(from)
          json = ['action',
            'inviteReset',
            from]
          Ktdprjct.query({
            json, expect200: true
          })
          reply('Sukses Mereset Link Group')
          break

        case 'caripesan':
        case 'searchmessage':
          if (isBan) return sticBan(from)
          if (!mek.key.fromMe) return sticOwner(from)
          if (!q)return reply('pesannya apa bang?')
          reply('Sedang Mencari Pesan...')
          let v = await Ktdprjct.searchMessages(q, from, 10, 1)
          let s = v.messages
          let el = s.filter(v => v.message)
          el.shift()
          try {
            if (el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for (let i = 0; i < el.length; i++) {
              await Ktdprjct.sendMessage(from, 'Nih Pesannya', text, {
                quoted: el[i]})
            }
          } catch(e) {
            reply('Pesan tidak ditemukan!')
          }
          break

        case 'sider':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (!isGroup) return sticGrup(from)
          infom = await Ktdprjct.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
          tagg = []
          teks = `Telah Dibaca Oleh :\n\n`
          for (let i of infom.reads) {
            teks += '@' + i.jid.split('@')[0] + '\n'
            teks += `*Waktu :* ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
            tagg.push(i.jid)
          }
          mentions(teks, tagg, true)
          break

        //════[ Absen Menu ]════//
        case 'absen': case 'hadir': case 'present':{
          Ktdprjct.absen = Ktdprjct.absen ? Ktdprjct.absen: {}
          if (!(from in Ktdprjct.absen)) return Ktdprjct.sendButton(from, `Tidak ada absen berlangsung!`, '© KTDPRJCT メ Bo† ༆ from rexproject', 'Mulai', `${prefix}mulaiabsen`, mek)
          let absen = Ktdprjct.absen[from][1]
          const wasVote = absen.includes(sender)
          if (wasVote) return reply(`Kamu sudah absen!`)
          absen.push(sender)
          list = absen.map((v, i) => `│ ${i + 1}.  @${v.split`@`[0]}`).join('\n')
          caption = help.absen(Ktdprjct, from, tanggal, absen, list).trim()
          await Ktdprjct.send2Button(from, caption, '© KTDPRJCT メ Bo† ༆ from rexproject', 'Absen', `${prefix}absen`, 'Cek', `${prefix}cekabsen`, mek)
        }
          break

        case 'cekabsen':{
          if (!isGroup) return sticGrup(from)
          Ktdprjct.absen = Ktdprjct.absen ? Ktdprjct.absen: {}
          if (!(from in Ktdprjct.absen)) return Ktdprjct.sendButton(from, `Tidak ada absen berlangsung!`, '© KTDPRJCT メ Bo† ༆ from rexproject', 'Mulai', `${prefix}absen`, mek)
          let absen = Ktdprjct.absen[from][1]
          list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
          caption = help.absen(Ktdprjct, from, tanggal, absen, list).trim()
          Ktdprjct.send2Button(from, caption, '© KTDPRJCT メ Bo† ༆ from rexproject', 'Absen', `${prefix}absen`, 'Hapus', `${prefix}hapusabsen`, mek)
        }
          break

        case 'deleteabsen': case 'hapusabsen': case 'delabsen':
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
          Ktdprjct.absen = Ktdprjct.absen ? Ktdprjct.absen: {}
          if (!(from in Ktdprjct.absen)) return Ktdprjct.sendButton(from, `Tidak ada absen berlangsung!`, '© KTDPRJCT メ Bo† ༆ from rexproject', 'Mulai', `${prefix}absen`, mek)
          delete Ktdprjct.absen[from]
          reply("Absen successfully deleted.")
          break

        case 'mulaiabsen':
          if (!isGroup) return sticGrup(from)
          if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return sticAdmin(from)
          Ktdprjct.absen = Ktdprjct.absen ? Ktdprjct.absen: {}
          if (from in Ktdprjct.absen) return Ktdprjct.send2Button(from, `Masih ada absen di chat ini!`, 'KTDPRJCT メ Bo† ༆ from rexproject', 'Hapus', `${prefix}hapusabsen`, 'Cek', `${prefix}cekabsen`, Ktdprjct.absen[from][0])
          Ktdprjct.absen[from] = [
            await Ktdprjct.sendButton(from, `Absen dimulai`, '© KTDPRJCT メ Bo† ༆ from rexproject', 'Absen', `${prefix}absen`, mek),
            [],
            text
          ]
          break

        //════[ Nulis Menu ]════//
        case 'nulis':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
          break

        case 'nuliskiri': {
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
          sticWait(from)
          const tulisan = q
          const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
          const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
          spawn('convert', [
            './media/nulis/images/buku/sebelumkiri.jpg',
            '-font',
            './media/nulis/font/Indie-Flower.ttf',
            '-size',
            '960x1280',
            '-pointsize',
            '22',
            '-interline-spacing',
            '2',
            '-annotate',
            '+140+153',
            fixHeight,
            './media/nulis/images/buku/setelahkiri.jpg'
          ])
          .on('error', () => reply(`error`))
          .on('exit', () => {
            Ktdprjct.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {
              thumbnail: Buffer.alloc(0), quoted: mek, caption: `Jangan Malas`
            })
          })
        }
          break

        case 'foliokiri': {
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)

          if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
          sticWait(from)
          const tulisan = q
          const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
          const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
          spawn('convert', [
            './media/nulis/images/folio/sebelumkiri.jpg',
            '-font',
            './media/nulis/font/Indie-Flower.ttf',
            '-size',
            '1720x1280',
            '-pointsize',
            '23',
            '-interline-spacing',
            '4',
            '-annotate',
            '+48+185',
            fixHeight,
            './media/nulis/images/folio/setelahkiri.jpg'
          ])
          .on('error', () => reply(`error`))
          .on('exit', () => {
            Ktdprjct.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {
              thumbnail: Buffer.alloc(0), quoted: mek, caption: `Jangan Malas`
            })
          })
        }
          break

        case 'nuliskanan': {
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
          sticWait(from)
          const tulisan = q
          const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
          const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
          spawn('convert', [
            './media/nulis/images/buku/sebelumkanan.jpg',
            '-font',
            './media/nulis/font/Indie-Flower.ttf',
            '-size',
            '960x1280',
            '-pointsize',
            '23',
            '-interline-spacing',
            '2',
            '-annotate',
            '+128+129',
            fixHeight,
            './media/nulis/images/buku/setelahkanan.jpg'
          ])
          .on('error', () => reply(`error`))
          .on('exit', () => {
            Ktdprjct.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {
              thumbnail: Buffer.alloc(0), quoted: mek, caption: `Jangan Malas`
            })
          })
        }
          break

        case 'foliokanan': {
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)

          if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
          sticWait(from)
          const tulisan = q
          const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
          const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
          spawn('convert', [
            './media/nulis/images/folio/sebelumkanan.jpg',
            '-font',
            './media/nulis/font/Indie-Flower.ttf',
            '-size',
            '960x1280',
            '-pointsize',
            '23',
            '-interline-spacing',
            '3',
            '-annotate',
            '+89+190',
            fixHeight,
            './media/nulis/images/folio/setelahkanan.jpg'
          ])
          .on('error', () => reply(`error kak silahkan coba lagi nanti`))
          .on('exit', () => {
            Ktdprjct.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {
              thumbnail: Buffer.alloc(0), quoted: mek, caption: `Jangan Malas`
            })
          })
        }
          break

        //════[ Anime Menu ]════//
        case 'loli':{
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          sticWait(from)
          let lolie = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
          let lolies = lolie[Math.floor(Math.random() * (lolie.length))]
          let loliess = await getBuffer(lolies)
          Ktdprjct.sendFile(from,loliess, '', 'Ini lolinya kak...', mek)
        }
          break
          
        case 'neko':{
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          sticWait(from)
          let res = await fetch('https://api.waifu.pics/sfw/neko')
          if (!res.ok) throw await res.text()
          let json = await res.json()
          if (!json.url) throw 'Error!'
          Ktdprjct.sendFile(from, json.url, '', `Nyaa\nLink : ${json.url}`, mek)
        }
          break

        case 'waifu': {
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          sticWait(from)
          let res = await fetch('https://api.waifu.pics/sfw/waifu')
          if (!res.ok) throw await res.text()
          let json = await res.json()
          if (!json.url) throw 'Error!'
          Ktdprjct.sendFile(from, json.url, '', `yahaha istrinya kartun\nLink : ${json.url}`, mek)
        }
          break

        case 'chara':
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          if (args.length < 1) return reply('Tolong masukan query!')
          let im = await hx.chara(q)
          sticWait(from)
          let acak = im[Math.floor(Math.random() * im.length)]
          let li = await getBuffer(acak)
          await Ktdprjct.sendMessage(from, li, image, {
            quoted: mek, caption: `Random Character ${q}`
          })
          break

        case 'megumin': {
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          sticWait(from)
          let res = await fetch('https://api.waifu.pics/sfw/megumin')
          if (!res.ok) throw await res.text()
          let json = await res.json()
          if (!json.url) throw 'Error!'
          Ktdprjct.sendFile(from, json.url, '', `@Ktdprjct\nLink : ${json.url}`, mek)
        }
          break
          
        //════[ Audio Menu ]════//
        case 'bass': case 'bown': case 'deep': case 'earrape': case 'fat': case 'fast':
        case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          sticWait(from)
          let mime = ((mek.quoted ? mek.quoted : mek.msg).mimetype || '')
          let set
        if (/bass/.test(command)) set = '-af equalizer=f=94:width_type=o:width=2:g=30'
        if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
        if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
        if (/earrape/.test(command)) set = '-af volume=12'
        if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
        if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
        if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
        if (/reverse/.test(command)) set = '-filter_complex "areverse"'
        if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
        if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
        if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
        if (/tupai|squirrel|chipmunk/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
        if (/audio/.test(mime)) {
            let ran = getRandom('.mp3')
            let filename = path.join(__dirname, './tmp/' + ran)
            let media = await Ktdprjct.downloadAndSaveMediaMessage(quoted, filename)
            exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err, stderr, stdout) => {
                await fs.unlinkSync(media)
                if (err) throw `_*Error!*_`
                let buff = await fs.readFileSync(filename)
                Ktdprjct.sendFile(from, buff, ran, null, mek, /vn/.test(args[0]), { quoted: ftrol, mimetype: 'audio/mp4' })
                await fs.unlinkSync(filename)
              })
            } else throw `Balas vn/audio yang ingin diubah dengan caption *${prefix + command}*`
        }
        break
        
        //════[ Sound Menu ]════//
        case 'sound1':
        case 'sound2':
        case 'sound3':
        case 'sound4':
        case 'sound5':
        case 'sound6':
        case 'sound7':
        case 'sound8':
        case 'sound9':
        case 'sound10':
        case 'sound11':
        case 'sound12':
        case 'sound13':
        case 'sound14':
        case 'sound15':
        case 'sound16':
        case 'sound17':
        case 'sound18':
        case 'sound19':
        case 'sound20':
        case 'sound21':
        case 'sound22':
        case 'sound23':
        case 'sound24':
        case 'sound25':
        case 'sound26':
        case 'sound27':
        case 'sound28':
        case 'sound29':
        case 'sound30':
        case 'sound31':
        case 'sound32':
        case 'sound33':
        case 'sound34':
        case 'sound35':
        case 'sound36':
        case 'sound37':
        case 'sound38':
        case 'sound39':
        case 'sound40':
        case 'sound41':
        case 'sound42':
        case 'sound43':
        case 'sound44':
        case 'sound45':
        case 'sound46':
        case 'sound47':
        case 'sound48':
        case 'sound49':
        case 'sound50':
        case 'sound51':
        case 'sound52':
        case 'sound53':
        case 'sound54':
        case 'sound55':
        case 'sound56':
        case 'sound57':
        case 'sound58':
        case 'sound59':
        case 'sound60':
        case 'sound61':
        case 'sound62':
        case 'sound63':
        case 'sound64':
        case 'sound65':
        case 'sound66':
        case 'sound67':
        case 'sound68':
        case 'sound69':
        case 'sound70':{
          if (isBan) return sticBan(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
          sticWait(from)
        sound = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
        Ktdprjct.sendMessage(from, sound, MessageType.audio, { quoted: ftrol, mimetype: 'audio/mp4', ptt: true })
       }
            break
            
        case 'sound71':
        case 'sound71':
        case 'sound72':
        case 'sound73':
        case 'sound74':
        case 'sound75':{
          if (isBan) return sticBan(from)
          sticWait(from)
          if (!isUser) return Ktdprjct.sendButton(from, daftar1, daftar2, 'DAFTAR', `${prefix}ktdprjctreg`, mek)
        sound = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
        Ktdprjct.sendMessage(from, sound, MessageType.audio, { quoted: ftrol, mimetype: 'audio/mp4', ptt: true })
       }
            break

        //════[ Akhir ]════//
        
        //════[ Akhir ]════//
        default:
        }
      } catch (e) {
        reply(util.format(e))
      }
        if (budy.startsWith('>')) {
      if (!isOwner) return sticOwner(from)
      try {
          let evaled = await eval(budy.slice(2))
          if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          await reply(evaled)
      } catch (err) {
          await reply(String(err))
      }
  }

  if (budy.startsWith('$')) {
      if (!isOwner) return sticOwner(from)
      exec(budy.slice(2), (err, stdout) => {
          if(err) return reply(err)
          if (stdout) return reply(stdout)
         })
      }
    } catch (e) {
      console.log(e)
    }
  }