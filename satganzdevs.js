require("./config");
require("./lib/JSONstringify.d.js");
const {
  Browsers,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  fetchLatestBaileysVersion,
  getContentType,
  downloadContentFromMessage,
  getMediaKeys,
  generateThumbnail,
  extractUrlFromText,
} = require("@whiskeysockets/baileys");
const { WAMessageStubType } = require("@adiwajshing/baileys");
const fs = require("fs");
const fetch = require("node-fetch");
const cron = require("node-cron");
const moment = require("moment-timezone");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const util = require("util");
const request = require("request");
const chalk = require("chalk");
const os = require("os");
const speed = require("performance-now");
const { performance } = require("perf_hooks");
const axios = require("axios");
const cheerio = require("cheerio");
const { uptotelegra } = require("./lib/upload");
const path = require("path");
const QRCode = require("qrcode");
const { platform } = require("process");
const { exec, spawn, execSync } = require("child_process");
const {
  Sticker,
  createSticker,
  StickerTypes,
} = require("wa-sticker-formatter");
const Jimp = require("jimp");
const stringSimilarity = require("string-similarity");

//lIB FILE
const {
  Nothing,
  Failed,
  Succes,
  addAutoClear,
  autoClearChat,
  checkDataName,
  createDataId,
  addDataId,
  removeDataId,
  checkDataId,
  getHit,
  cmdAdd,
  expiredCmd,
} = require("./lib/totalcmd");
const {
  getAllCmd,
  getBuffer,
  getCases,
  tanggal,
  generateProfilePicture,
  sleep,
  getSizeMedia,
  fetchJson,
  runtime,
  parseMention,
  isUrl,
  formatDate,
  pickRandom,
  monospace,
  getGroupAdmins,
  getRandom,
  generateMessageTag,
} = require("./lib/functional.js");
const { pindl, soundcloud, pinterest } = require("./lib/skrep");
const { jadibot, stopjadibot, listjadibot } = require("./lib/clone");
const diferentme = require("./lib/JSONstringify.js");
const {
  gcc,
  tzy,
  pak,
  kel,
  doc,
  trol,
  ngetrol,
  ftroli,
  ft,
  gc,
  lok,
  aud,
} = require("./lib/fake");

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

// DATA DATA
const hitnya = JSON.parse(fs.readFileSync("./data/hit.json"));
const dash = JSON.parse(fs.readFileSync("./data/dash.json"));
const AntiSpam = JSON.parse(fs.readFileSync("./data/antispam.json"));
const bannedlist = JSON.parse(fs.readFileSync("./data/banned.json"));
const _vn = JSON.parse(fs.readFileSync("./data/vn.json"));
const galau = JSON.parse(fs.readFileSync("./src/galau.json"));
const isBanned = m.sender.includes(bannedlist) ? true : false;

module.exports = satria = async (satria, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    var prefix = prefa
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : prefa ?? global.prefix;
    global.prefix = prefix;
    const isCmd = body.startsWith(".");
    global.replyType = pickRandom(["web", "troli"]);
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    var args = body.trim().split(/ +/).slice(1);
    args = args.concat(["", "", "", "", "", ""]);
    const pushname = m.pushName || "No Name";
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    const isQuotedMsg = type == "extendedTextMessage";
    const isQuotedImage = isQuotedMsg
      ? content.includes("imageMessage")
        ? true
        : false
      : false;
    const botNumber = await satria.decodeJid(satria.user.id);
    const owners = JSON.parse(fs.readFileSync("./data/owner.json"));
    const isCreator =
      owners.includes(m.sender.replace("@s.whatsapp.net", "")) ||
      "6281316701742@s.whatsapp.net" === m.sender
        ? true
        : false;
    const itsMe = m.sender == botNumber ? true : false;
    const from = m.chat;
    const text = (q = args.join(" ").trim());
    const fatkuns = m.quoted || m;
    const quoted =
      fatkuns.mtype == "buttonsMessage"
        ? fatkuns[Object.keys(fatkuns)[1]]
        : fatkuns.mtype == "templateMessage"
        ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
        : fatkuns.mtype == "product"
        ? fatkuns[Object.keys(fatkuns)[0]]
        : m.quoted
        ? m.quoted
        : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = /image/.test(mime);
    const isVideo = /video/.test(mime);
    const isSticker = /sticker/.test(mime);
    const isAudio = /audio/.test(mime);
    const isAllMedia =
      type === "imageMessage" ||
      type === "videoMessage" ||
      type === "stickerMessage" ||
      type === "audioMessage" ||
      type === "contactMessage" ||
      type === "locationMessage";
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedTeks =
      type === "extendedTextMessage" && content.includes("quotedMessage");
    const isQuotedTag =
      type === "extendedTextMessage" && content.includes("mentionedJid");
    const isQuotedReply =
      type === "extendedTextMessage" && content.includes("Message");
    const isQuotedText =
      type === "extendedTextMessage" && content.includes("conversation");
    const senderNumber = m.sender.split("@")[0];
    const {
      msgFilter,
      addSpam,
      SpamExpired,
      cekSpam,
    } = require("./lib/antispam");
    const spammer = [];

    /* New Line */
    const isGroup = m.isGroup;
    const groupMetadata = m.isGroup
      ? await satria.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };

    // DB
    // batas kesabaran
    try {
      let isNumber = (x) => typeof x === "number" && !isNaN(x);
      let limitUser = isCreator
        ? global.limitawal.premium
        : global.limitawal.free;
      const user = db.data.users[m.sender];
      if (typeof user !== "object") db.data.users[m.sender] = {};
      if (user) {
        if (!("name" in user)) user.name = await satria.getName(m.sender);
        if (!isNumber(user.age)) user.age = 16;
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("afkReason" in user)) user.afkReason = "";
        if (!isNumber(user.limit)) user.limit = limitUser;
        if (!isNumber(user.balance)) user.balance = 0;
        if (!("pacar" in user)) user.pacar = "jomblo";
        if (!("banned" in user)) user.banned = false;
      } else
        global.db.data.users[m.sender] = {
          name: await satria.getName(m.sender),
          age: 16,
          afkTime: -1,
          afkReason: "",
          limit: limitUser,
          balance: 0,
          pacar: "jomblo",
          banned: false,
        };
      let chats = db.data.chats[m.chat];
      if (typeof chats !== "object") db.data.chats[m.chat] = {};
      if (chats) {
        if (!("mute" in chats)) chats.mute = false;
        if (!("antilink" in chats)) chats.antilink = false;
      } else
        global.db.data.chats[m.chat] = {
          mute: false,
          antilink: false,
        };
      let setting = db.data.settings[botNumber];
      if (typeof setting !== "object") db.data.settings[botNumber] = {};
      if (setting) {
        if (!("anticall" in setting)) setting.anticall = true;
        if (!isNumber(setting.status)) setting.status = 0;
        if (!("autobio" in setting)) setting.autobio = false;
        if (!("antiowntag" in setting)) setting.antiowntag = false;
      } else
        global.db.data.settings[botNumber] = {
          anticall: true,
          status: 0,
          autobio: false,
          antiowntag: false,
        };
    } catch (err) {
      console.error(err);
    }
    const firstchat = JSON.parse(fs.readFileSync("./data/fc.json"));
    global.chatModifying = "edit: key";
    async function Loading() {
      const satxy = [
        "《 ███▒▒▒▒▒▒▒▒▒▒▒ 》20%",
        "《 ██████▒▒▒▒▒▒▒▒ 》40%",
        "《 █████████▒▒▒▒▒ 》60%",
        "《 ████████████▒▒ 》80%",
        "《 ██████████████ 》100%",
        "ᴄᴏᴍᴘʟᴇᴛᴇ!",
      ];
      let { key } = await satria.sendMessage(m.chat, {
        text: "Waiting for command",
      });
      for (let i = 0; i < satxy.length; i++) {
        await satria.sendMessage(m.chat, { text: satxy[i], edit: key });
      }
    }
    const cekLimit = async () => {
      if (db.data.users[m.sender].limit === 0) {
        reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
      } else return;
    };
    const Tnow = (new Date() / 1000).toFixed(0);
    const seli = Tnow - m.messageTimestamp.low;
    if (seli > 100)
      return console.log(
        new ReferenceError(
          `Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`
        )
      );
    // Function By SatriaId
    function playRandom(folders) {
      const musicFiles = fs.readdirSync(folders);
      if (musicFiles.length === 0) {
        console.log("The folder is empty. No music files found.");
        return null;
      }
      const randomIndex = Math.floor(Math.random() * musicFiles.length);
      const randomMusicFile = musicFiles[randomIndex];
      const fullPath = path.join(folders, randomMusicFile);
      return fullPath;
    }
    const fkontak = {
      key: {
        participant: m.sender,
        ...(m.chat ? { remoteJid: from } : {}),
      },
      message: {
        contactMessage: {
          displayName: pushname,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:$pushname},\nitem1.TEL;waid=${
            m.sender.split("@")[0]
          }:${m.sender.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
          jpegThumbnail: global.thumb,
          thumbnail: global.thumb,
          sendEphemeral: true,
        },
      },
    };
    const gc = {
      key: {
        fromMe: false,
        participant: m.sender,
        ...(m.chat ? { remoteJid: "@s.whatsapp.net" } : {}),
      },
      message: {
        groupInviteMessage: {
          groupJid: "120363025461390219@g.us",
          inviteCode: "z0JcSBd3mAhIfSSY",
          inviteExpiration: "Powered By ❤️ SatganzDevs",
          groupName: "Powered By ❤️ SatganzDevs",
          caption: "Powered By ❤️ SatganzDevs",
        },
      },
    };
    const onlyPrem = async () => {
      return satria.sendMessage(
        m.chat,
        {
          text: `Hallo @${
            m.sender.split("@")[0]
          }, Mohon maaf, hanya pengguna premium yang dapat mengakses fitur ini melalui obrolan pribadi, atau bergabung ke dalam grup bot untuk menggunakan layanannya.`,
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              showAdAttribution: true,
              title: `Runtime ${runtime(process.uptime())}`,
              body: ``,
              previewType: "PHOTO",
              mediaType: 1,
              renderLargerThumbnail: true,
              thumbnailUrl: `https://images2.alphacoders.com/124/1242829.jpg`,
              sourceUrl: `https://chat.whatsapp.com/G6W25LQb4Ce2i8r4Z0du1q`,
            },
          },
        },
        { quoted: m }
      );
    };
    const reply = async (teks) => {
      try {
        ppuser = await satria.profilePictureUrl(m.sender, "image");
      } catch (err) {
        ppuser =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      let tagnya = null;
      if (typeof teks === 'string') {
        tagnya = [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
      } else {
        tagnya = [m.sender]
      }
      
     
      if (global.replyType == "web") {
        satria.sendMessage(
          m.chat,
          {
            text: teks,
            contextInfo: {
              mentionedJid: tagnya,
              externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                renderLargerThumbnail: true,
                title: `Runtime ${runtime(process.uptime())}`,
                previewType: "PHOTO",
                mediaType: 1,
                mediaUrl: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
                thumbnailUrl: ppuser,
                sourceUrl: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
              },
            },
          },
          { quoted: m }
        );
      } else if (global.replyType == "troli") {
        var satxxy = await prepareWAMessageMedia(
          { image: thumb },
          { upload: satria.waUploadToServer }
        );
        var troli = generateWAMessageFromContent(
          m.chat,
          proto.Message.fromObject({
            orderMessage: {
              orderId: "436664297902534",
              thumbnail: thumb,
              itemCount: 1945,
              status: 1,
              surface: 1,
              message: teks,
              orderTitle: `Runtime ${runtime(process.uptime())}`,
              sellerJid: "6281268248904@s.whatsapp.net",
              token: "AR6ew8v8oH4gt78Ufm/sMBCeaQJwJlDhOTto8qAZytAdQA==",
              contextInfo: {
                mentionedJid: tagnya,
                quotedAd: {
                  advertiserName: "SatganzDevs",
                  mediaType: 1,
                  jpegThumbnail: thumb,
                  caption: `Runtime ${runtime(process.uptime())}`,
                },
              },
            },
          }),
          { userJid: m.chat, quoted: m }
        );
        satria.relayMessage(m.chat, troli.message, {
          messageId: troli.key.id,
        });
      }
    };

    function makeid(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    const FileSize = (number) => {
      var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"];
      var tier = (Math.log10(Math.abs(number)) / 3) | 0;
      if (tier == 0) return number;
      var postfix = SI_POSTFIXES[tier];
      var scale = Math.pow(10, tier * 3);
      var scaled = number / scale;
      var formatted = scaled.toFixed(1) + "";
      if (/\.0$/.test(formatted))
        formatted = formatted.substr(0, formatted.length - 2);
      return formatted + postfix;
    };

    const clockString = (ms) => {
      let h = Math.floor(ms / 3600000);
      let m = Math.floor(ms / 60000) % 60;
      let s = Math.floor(ms / 1000) % 60;
      console.log({ ms, h, m, s });
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    };
    const react = async (tol) => {
      let rec = {
        react: {
          text: tol,
          key: {
            remoteJid: m.chat,
            fromMe: false,
            key: m.key,
            id: m.key.id,
            participant: m.sender,
          },
        },
      };
      satria.sendMessage(m.chat, rec);
    };
    function didYouMean(inputWord, wordArray) {
      function levenshteinDistance(a, b) {
        if (a.length === 0) return b.length;
        if (b.length === 0) return a.length;
        let matrix = Array(a.length + 1)
          .fill(null)
          .map(() => Array(b.length + 1).fill(null));
        for (let i = 0; i <= a.length; i++) {
          matrix[i][0] = i;
        }
        for (let j = 0; j <= b.length; j++) {
          matrix[0][j] = j;
        }
        for (let i = 1; i <= a.length; i++) {
          for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
              matrix[i - 1][j] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j - 1] + cost
            );
          }
        }
        return matrix[a.length][b.length];
      }
      if (wordArray.includes(inputWord)) {
        return null;
      }
      let minDistance = Infinity;
      let closestWord = "";
      for (const word of wordArray) {
        const distance = levenshteinDistance(inputWord, word);
        if (distance < minDistance) {
          minDistance = distance;
          closestWord = word;
        }
      }
      const wordLength = Math.max(inputWord.length, closestWord.length);
      const similarity = ((wordLength - minDistance) / wordLength) * 100;
      return {
        correctedWord: closestWord,
        similarity: similarity.toFixed(2),
      };
    }
    const toFirstCase = (str) => {
      let first = str
        .split(" ")
        .map((nama) => nama.charAt(0).toUpperCase() + nama.slice(1))
        .join(" ");
      return first;
    };
    function formatNomorTelepon(nomor) {
      const cleanNomor = nomor.replace(/\D/g, "");
      if (cleanNomor.startsWith("0")) {
        // Ganti "0" pertama dengan "62"
        return "62" + cleanNomor.slice(1);
      } else if (cleanNomor.startsWith("+62")) {
        // Hapus "+" dan spasi, jika ada
        return "62" + cleanNomor.slice(3).replace(/ /g, "");
      } else {
        // Jika nomor sudah dalam format yang benar, kembalikan as is
        return cleanNomor;
      }
    }
    const emot = `${pickRandom([
      "⎔",
      "✦",
      "⭑",
      "ᯬ",
      "⭔",
      "◉",
      "⬟",
      "▢",
      "᭻",
      "»",
      "〆",
      "々",
      "⛥",
      "✗",
      "⛊",
      "⚝",
      "⚚",
      "♪",
    ])}`;

    satria.readMessages([m.key]);

    if (db.data.audio[budy]) {
      let nono = {
        key: { fromMe: false, participant: m.sender, remoteJid: from },
        message: {
          liveLocationMessage: {
            title: `${pushname} \n「 AUDIO 」 ${db.data.audio[budy].name}`,
            jpegThumbnail: fs.readFileSync("./src/t2.jpg"),
          },
        },
      };
      satria.sendMessage(
        from,
        {
          audio: { url: db.data.audio[budy].link },
          ptt: true,
          waveform: new Uint8Array(64),
          mimetype: "audio/mpeg",
        },
        { quoted: nono }
      );
    }

    if (m.message) {
      if (!firstchat.includes(m.sender) && !m.isGroup) {
        await reply(`Hai @${m.sender.split("@")[0]} 👋🏻
Baymax hadir di sini untuk memberikan bantuan seperti sistem otomatis yang Anda sebutkan. Saya adalah sebuah AI (Artificial Intelligence) yang dirancang untuk memberikan dukungan dan informasi dalam berbagai hal melalui berbagai platform, termasuk WhatsApp.
ketik .menu untuk melihat menu
*NOTE*: mohon gunakan . di awal pesan ya`);
        firstchat.push(m.sender);
        fs.writeFileSync("./data/fc.json", JSON.stringify(firstchat));
      }
      console.log(
        chalk.black(chalk.bgWhite("[ PESAN ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> Dari"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`) +
          "\n" +
          chalk.blueBright("=> Di"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
      );
    }

    //Auto Hit
    expiredCmd(hitnya, dash);
    const thisHit = `${getHit("run", hitnya)}`;
    //add to dashboard  db.data.allcommand.push(toFirstCase(command)) //
    //if(!isGroup) //addAutoClear(m, "1h", clearchat)
    if (isCmd) {
      cmdAdd("run", "1d", hitnya);
    }

    let mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    for (let jid of mentionUser) {
      let user = global.db.data.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      if (!afkTime || afkTime < 0) continue;
      let reason = user.afkReason || "";
      reply(`Jangan tag dia!
Dia sedang AFK ${reason ? "dengan alasan " + reason : "tanpa alasan"}
Selama ${clockString(new Date() - afkTime)}`);
    }
    if (db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender];
      reply(`@${m.sender.split("@")[0]} berhenti AFK${
        user.afkReason ? " setelah " + user.afkReason : ""
      }
Selama ${clockString(new Date() - user.afkTime)}`);
      user.afkTime = -1;
      user.afkReason = "";
    }

    if (isCmd) {
      switch (command) {
        case "afk":
          {
            let user = global.db.data.users[m.sender];
            user.afkTime = +new Date();
            user.afkReason = text;
            reply(`${m.pushName} Telah Afk${text ? ": " + text : ""}`);
          }
          break;
        case "owner":
          {
            await react("😜");
            const vcard = `BEGIN:VCARD
VERSION:3.0
N:SatganzDevs
FN:SatganzDevs
ORG:CLAY COMMUNITY;
TEL;TYPE=CELL;TYPE=VOICE;waid=6281316701742:+62 813 1670 1742
EMAIL:satganzdevs@gmail.com
INSTAGRAM:instagram.com/kurniawan_satriaaaa
ADR;TYPE=WORK,PREF:;;Jalan Raya No. 123;Jakarta;DKI Jakarta;12345;Indonesia
END:VCARD`;
            const sentMsg = await satria.sendMessage(
              from,
              {
                contacts: { displayName: "SatganzDevs", contacts: [{ vcard }] },
              },
              { quoted: m }
            );
            await satria.sendMessage(
              from,
              {
                audio: fs.readFileSync("./owner.mp3"),
                mimetype: "audio/mpeg",
                ptt: true,
                waveform: new Uint8Array(64),
              },
              { quoted: sentMsg }
            );
          }
          break;
        case "menu":
          {
            await react("✅");
            function nomorRandom(min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            let _cmd = await getAllCmd();
            let cmds__ = _cmd
              .sort((a, b) => a.localeCompare(b))
              .map((v, i) => `│ ${emot} .${v}`)
              .join("\n");
              const { version, isLatest } = await fetchLatestBaileysVersion();
  console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);
            let anu = `${greetingMessage} @${m.sender.split("@")[0]} 👋🏻
Baymax hadir di sini untuk memberikan bantuan seperti sistem otomatis yang Anda sebutkan. Saya adalah sebuah AI (Artificial Intelligence) yang dirancang untuk memberikan dukungan dan informasi dalam berbagai hal melalui berbagai platform, termasuk WhatsApp.

╭╌╌╌╌❑ *Bot Information* ❑╌╌╌╌╌⟢
┊ ◩ *Library* : @whiskeysockets/baileys
┊ ◩ *Version* : v${version.join(".")}
┊ ◩ *Hit Today* : ${getHit("run", hitnya)} Hit
┊ ◩ *Feature* : ${_cmd.length} Feature
┊ ◩ *Hostname* : 🐦 Ptrodactyl
┊ ◩ *Runtime* : ⏳ ${runtime(process.uptime())}
┊ ◩ *Server Date* : ${moment.tz("Asia/Jakarta").format("DD/MM/YY")}
┊ ◩ *Server Time* : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")}
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈๛

*_🚀 ${pickRandom(quotes.motivasi)} ${readMore}${readMore}_*


╭─▸ 〔 *MAIN* 〕
│
│ ${emot} .owner
│ ${emot} .runtime
│ ${emot} .ping
│
╰────────────˧


╭─▸ 〔 *OWNER* 〕
│
│ ${emot} .addvn
│ ${emot} .delvn
│ ${emot} .addowner
│ ${emot} .blockcmd
│ ${emot} .unblockcmd
│ ${emot} >
│ ${emot} $
│
╰────────────˧


╭─▸ 〔 *GROUP* 〕
│
│ ${emot} .add
│ ${emot} .kick
│ ${emot} .promote
│ ${emot} .demote
│ ${emot} .setppgc
│ ${emot} .setsubject
│ ${emot} .setdesc
│ ${emot} .tagall
│ ${emot} .hidetag
│
╰────────────˧


╭─▸ 〔 *RANDOM IMAGE* 〕
│
│ ${emot} .meme
│ ${emot} .darkjoke
│ ${emot} .mountainview
│ ${emot} .cyberspace
│ ${emot} .programming
│ ${emot} .waifu
│ ${emot} .akira
│ ${emot} .akiyama
│ ${emot} .anna
│ ${emot} .asuna
│ ${emot} .ayuzawa
│ ${emot} .boruto
│ ${emot} .chitanda
│ ${emot} .chitoge
│ ${emot} .deidara
│ ${emot} .doraemon
│ ${emot} .elaina
│ ${emot} .emilia
│ ${emot} .asuna
│ ${emot} .erza
│ ${emot} .gremory
│ ${emot} .hestia
│ ${emot} .hinata
│ ${emot} .inori
│ ${emot} .isuzu
│ ${emot} .itachi
│ ${emot} .itori
│ ${emot} .kaga
│ ${emot} .kagura
│ ${emot} .kakasih
│ ${emot} .kaori
│ ${emot} .kosaki
│ ${emot} .kotori
│ ${emot} .kuriyama
│ ${emot} .kuroha
│ ${emot} .kurumi
│ ${emot} .loli
│ ${emot} .madara
│ ${emot} .mikasa
│ ${emot} .miku
│ ${emot} .minato
│ ${emot} .naruto
│ ${emot} .natsukawa
│ ${emot} .neko2
│ ${emot} .nekohime
│ ${emot} .nezuko
│ ${emot} .nishimiya
│ ${emot} .onepiece
│ ${emot} .pokemon
│ ${emot} .rem
│ ${emot} .rize
│ ${emot} .sagiri
│ ${emot} .sakura
│ ${emot} .sasuke
│ ${emot} .shina
│ ${emot} .shinka
│ ${emot} .shizuka
│ ${emot} .shota
│ ${emot} .tomori
│ ${emot} .toukachan
│ ${emot} .tsunade
│ ${emot} .yatogami
│ ${emot} .yuki
│
╰────────────˧


╭─▸ 〔 *RANDOM STICKER* 〕
│
│ ${emot} .ttp
│ ${emot} .ttp2
│ ${emot} .ttp3
│ ${emot} .ttp4
│ ${emot} .attp
│ ${emot} .paimon
│ ${emot} .patrick
│ ${emot} .doge
│ ${emot} .amongus
│ ${emot} .mukalu
│
╰────────────˧


╭─▸ 〔 *RANDOM MENU* 〕
│
│ ${emot} .quotes
│ ${emot} .taugasih
│ ${emot} .wallpaperanime
│ ${emot} .couple
│
╰────────────˧


╭─▸ 〔 *TOOLS* 〕
│
│ ${emot} .sticker
│ ${emot} .smeme
│ ${emot} .qc
│ ${emot} .toptv
│ ${emot} .toaud
│ ${emot} .tomp3
│ ${emot} .togif
│ ${emot} .tovideo
│ ${emot} .remini
│ ${emot} .bitly
│ ${emot} .tinyurl
│
╰────────────˧


╭─▸ 〔 *DOWNLOADER* 〕
│
│ ${emot} .tiktok
│ ${emot} .tiktokmp3
│ ${emot} .ig
│ ${emot} .scdl
│ ${emot} .ytmp4
│ ${emot} .ytmp3
│
╰────────────˧


╭─▸ 〔 *INTERNET* 〕
│
│ ${emot} .lirik
│ ${emot} .kbbi
│ ${emot} .infocuaca
│ ${emot} .pinterest
│ ${emot} .yts
│ ${emot} .play
│
╰────────────˧


╭─▸ 〔 *PREMIUM* 〕
│
│ ${emot} .kenon
│ ${emot} .banned
│ ${emot} .unbanned
│ ${emot} .unbannedv2
│ ${emot} .unbannedv3
│ ${emot} .unbannedv4
│ ${emot} .unbannedv5
│
╰────────────˧
`;
            //${i + 1}.
            let prop = await generateWAMessageFromContent(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "IDR",
                  amount1000: 1000000,
                  requestFrom: m.sender,
                  noteMessage: {
                    extendedTextMessage: {
                      text: anu,
                      contextInfo: {
                        mentionedJid: [m.sender],
                        externalAdReply: {
                          showAdAttribution: true,
                          title: satria.username,
                          thumbnail: await getBuffer(thumb),
                          sourceUrl:
                            "https://instagram.com/@kurniawan_satriaaaa",
                        },
                      },
                    },
                  },
                  expiryTimestamp: 9778423,
                  amount: {
                    value: 1,
                    offset: 244423513,
                    currencyCode: "IDR",
                  },
                  contextInfo: {
                    mentionedJid: await parseMention(`${anu}`),
                    externalAdReply: {
                      showAdAttribution: true,
                      containsAutoReply: true,
                      title: "＞︿＜",
                      thumbnail: await getBuffer(thumb),
                      sourceUrl: "https://instagram.com/@kurniawan_satriaaaa",
                    },
                  },
                },
              },
              { userJid: m.chat, quoted: m }
            );
            //satria.relayMessage(from, { scheduledCallCreationMessage: { callType: "VIDEO", scheduledTimestampMs:99990362720,title: anu,body: anu,contextInfo: {mentionedJid: await parseMention(anu),}}}, {})
            // satria
            //   .sendMessage(
            //     from,
            //     {
            //       video: fs.readFileSync("./menu.mp4"),
            //       mimetype: "video/mp4",
            //       caption: anu,
            //       gifPlayback: true,
            //       height: 576,
            //       width: 576,
            //       mentions: await parseMention(anu),
            //     },
            //     { quoted: fkontak }
            //   )
              satria.relayMessage(m.chat, prop.message, {messageId: prop.key.id }).then(() => {
                satria.sendMessage(
                  from,
                  {
                    audio: {
                      url: `https://github.com/Aisyah-Aldi/Sound/raw/main/sound${nomorRandom(
                        1,
                        119
                      )}.mp3`,
                    },
                    mimetype: "audio/mpeg",
                    ptt: true,
                    waveform: new Uint8Array(64),
                    contextInfo: {
                      externalAdReply: {
                        containsAutoReply: true,
                        showAdAttribution: true,
                        title: "👋 Hay Kak :> " + pushname,
                        body: pickRandom(quotes.body),
                        previewType: "PHOTO",
                        mediaType: 1,
                        thumbnail: thumb,
                        sourceUrl: `https://instagram.com/kurniawan_satriaaaa`,
                      },
                    },
                  },
                  { quoted: fkontak }
                );
              });
          }
          break;
          case "ping":
            case "botstatus":
            case "statusbot":
              {
                const used = process.memoryUsage();
                const cpus = os.cpus().map((cpu) => {
                  cpu.total = Object.keys(cpu.times).reduce(
                    (last, type) => last + cpu.times[type],
                    0
                  );
                  return cpu;
                });
                const cpu = cpus.reduce(
                  (last, cpu, _, { length }) => {
                    last.total += cpu.total;
                    last.speed += cpu.speed / length;
                    last.times.user += cpu.times.user;
                    last.times.nice += cpu.times.nice;
                    last.times.sys += cpu.times.sys;
                    last.times.idle += cpu.times.idle;
                    last.times.irq += cpu.times.irq;
                    return last;
                  },
                  {
                    speed: 0,
                    total: 0,
                    times: {
                      user: 0,
                      nice: 0,
                      sys: 0,
                      idle: 0,
                      irq: 0,
                    },
                  }
                );
                let timestamp = speed();
                let latensi = speed() - timestamp;
                neww = performance.now();
                oldd = performance.now();
                respon = `
    Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${
                  oldd - neww
                } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
    
    💻 Info Server
    RAM: ${os.totalmem() - os.freemem()} / ${os.totalmem()}
    
    _NodeJS Memory Usaage_
    ${Object.keys(used)
      .map(
        (key, _, arr) =>
          `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${used[key]}`
      )
      .join("\n")}
    
    ${
      cpus[0]
        ? `_Total CPU Usage_
    ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
            .map(
              (type) =>
                `- *${(type + "*").padEnd(6)}: ${(
                  (100 * cpu.times[type]) /
                  cpu.total
                ).toFixed(2)}%`
            )
            .join("\n")}
    _CPU Core(s) Usage (${cpus.length} Core CPU)_
    ${cpus
      .map(
        (cpu, i) =>
          `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
            cpu.times
          )
            .map(
              (type) =>
                `- *${(type + "*").padEnd(6)}: ${(
                  (100 * cpu.times[type]) /
                  cpu.total
                ).toFixed(2)}%`
            )
            .join("\n")}`
      )
      .join("\n\n")}`
        : ""
    }
    `.trim();
                reply(respon);
              }
              break;
            case "runtime":
              reply(runtime(process.uptime()));
              break;
            case "speedtest":
              {
                reply("Testing Speed...");
                let cp = require("child_process");
                let { promisify } = require("util");
                let exec = promisify(cp.exec).bind(cp);
                let o;
                try {
                  o = await exec("python speed.py");
                } catch (e) {
                  o = e;
                } finally {
                  let { stdout, stderr } = o;
                  if (stdout.trim()) reply(stdout);
                  if (stderr.trim()) reply(stderr);
                }
              }
              break;
        case "toptv":
          {
            await Loading();
            if (!m.quoted)
              return reply(`Balas Video Dengan Caption ${prefix + command}`);
            if (/video/.test(mime)) {
              var ppt = m.quoted;
              var ptv = generateWAMessageFromContent(
                from,
                proto.Message.fromObject({ ptvMessage: ppt }),
                { userJid: from, quoted: m }
              );
              satria.relayMessage(from, ptv.message, { messageId: ptv.key.id });
            }
          }
          break;
        case "callme":
          {
            await fetchJson(
              `https://fakedata.satganzdevs.repl.co/api/tools/call?number=${
                m.sender.split("@")[0]
              }`
            );
            reply("done bang");
          }
          break;
        case "test":
          {
            satria.sendMessage(
              from,
              {
                location: {
                  jpegThumbnail: await getBuffer(
                    "https://images2.alphacoders.com/716/716737.png"
                  ),
                },
                caption: `hai`,
              },
              { quoted: m }
            );
          }
          break;
        case "ttp":
        case "ttp2":
        case "ttp3":
        case "ttp4":
        case "attp":
          await reply(`Please Wait`);
          if (args.length == 0)
            return reply(`Example: ${prefix + command} Znxn Xyz`);
          ini_txt = args.join(" ");
          ini_buffer = await getBuffer(
            `https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`
          );
          satria.sendImageAsSticker(m.chat, ini_buffer, m, {
            packname: global.packname,
            author: global.author,
            categories: ["ðŸ¤©", "ðŸŽ‰"],
            id: "12345",
            quality: 100,
            background: "transparent",
          });
          break;
        //=================================================//
        case "qc":
          {
            let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
            if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`);
            await reply(`Please Wait`);
            const text = `${teks}`;
            const username = await satria.getName(
              m.quoted ? m.quoted.sender : m.sender
            );
            const avatar = await satria
              .profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, "image")
              .catch(
                () =>
                  `https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`
              );
            const json = {
              type: "quote",
              format: "png",
              backgroundColor: "#FFFFFF",
              width: 700,
              height: 580,
              scale: 2,
              messages: [
                {
                  entities: [],
                  avatar: true,
                  from: {
                    id: 1,
                    name: username,
                    photo: {
                      url: avatar,
                    },
                  },
                  text: text,
                  replyMessage: {},
                },
              ],
            };
            axios
              .post("https://bot.lyo.su/quote/generate", json, {
                headers: { "Content-Type": "application/json" },
              })
              .then(async (res) => {
                const buffer = Buffer.from(res.data.result.image, "base64");
                let encmedia = await satria.sendImageAsSticker(
                  m.chat,
                  buffer,
                  m,
                  {
                    packname: global.packname,
                    author: global.author,
                    categories: ["ðŸ¤©", "ðŸŽ‰"],
                    id: "12345",
                    quality: 100,
                    background: "transparent",
                  }
                );
                await fs.unlinkSync(encmedia);
              });
          }
          break;
        case "addsadsong":
          {
            if (/audio/.test(mime)) {
              const client = require("filestack-js").init(fileStackApi);
              if (db.data.audio[q])
                return reply("Nama tersebut sudah ada di dalam database");
              let media = await satria.downloadAndSaveMediaMessage(qmsg, q);
              await client
                .upload(media, {}, { filename: makeid(10) }, {})
                .then((data) => {
                  galau.push(data.url);
                  fs.writeFileSync("./src/galau.json", JSON.stringify(galau));
                });
              let teks = `Berhasil menambahkan audio
ke dalam database`;
              await reply(teks);
              await fs.unlinkSync(media);
            } else return reply("Reply audio");
          }
          break;
        case "addvn":
          {
            if (/audio/.test(mime)) {
              const client = require("filestack-js").init(fileStackApi);
              if (!q) return reply("Nama audionya apa?");
              if (db.data.audio[q])
                return reply("Nama tersebut sudah ada di dalam database");
              let media = await satria.downloadAndSaveMediaMessage(qmsg, q);
              await client
                .upload(media, {}, { filename: q }, {})
                .then((data) => {
                  db.data.audio[q] = {
                    name: data._file.name,
                    id: data.handle,
                    size: FileSize(data._file.size),
                    link: data.url,
                  };
                });
              let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`;
              await reply(teks);
              await fs.unlinkSync(media);
            } else return reply("Reply audio");
          }
          break;
        case "delvn":
          {
            if (!isCreator) return reply("hanya Owner");
            try {
              if (!db.data.audio[q])
                return reply("Nama tersebut tidak ada di dalam data base");
              delete db.data.audio[q];
              reply(`Sukses delete vn ${q}`);
            } catch (err) {
              console.log(err);
              reply("eror kak");
            }
          }
          break;
        case "listuser":{
          let ursListMessage = `*「 USER 」*\n\n`;
          for (let key in db.data.users) {
            if (db.data.users.hasOwnProperty(key)) {
              let pengguna = db.data.users[key];
              ursListMessage += `⭔ Name: @${pengguna.split('@')[0]}\n⭔ Limit: ${pengguna.limit}\n⭔ Banned: ${pengguna.banned}\n\n─────────────────\n\n`;
            }
          }
          reply(ursListMessage);
        }
        break
        case "listvn":
          let vnListMessage = `*── 「 VOICE NOTE LIST 」 ──*\nTotal: ${
            Object.keys(db.data.audio).length
          }\n\n`;
          for (let key in db.data.audio) {
            if (db.data.audio.hasOwnProperty(key)) {
              let voiceNote = db.data.audio[key];
              vnListMessage += `${emot} Name: ${voiceNote.name}\n${emot} ID: ${voiceNote.id}\n${emot} Size: ${voiceNote.size}\n${emot} Link: ${voiceNote.link}\n\n`;
            }
          }
          reply(vnListMessage);
          break;
        case "addowner":
          {
            if (!q) return reply("masukan nomor yang ingin di jadikan owner");
            const target = formatNomorTelepon(q);
            owners.push(target);
            fs.writeFileSync("./data/owner.json", JSON.stringify(owners));
            await reply(`sukses menjadikan @${target} sebagai Owner!`);
          }
          break;
        case "delowner":
          {
            if (!q) return reply("masukan nomor yang ingin di jadikan owner");
            const nilaiDalamArray = await db.get("owner");
            if (nilaiDalamArray && Array.isArray(nilaiDalamArray)) {
              const index = nilaiDalamArray.indexOf(q);
              if (index !== -1) {
                nilaiDalamArray.splice(index, 1);
              }
              fs.writeFileSync(
                "./data/owner.json",
                JSON.stringify(nilaiDalamArray)
              );
            }
            reply("sukses");
          }
          break;
        case "listowner":
          {
            let ownList = `*── 「 RESPONSE LIST 」 ──*\nTotal: ${
              owners.length
            }\n\n
${owners
  .sort((a, b) => a.localeCompare(b))
  .map((v, i) => `${i + 1}. @${v}`)
  .join("\n")}`;
            satria.sendMessage(
              m.chat,
              {
                text: ownList,
                contextInfo: {
                  mentionedJid: parseMention(`${ownList}`),
                  externalAdReply: {
                    showAdAttribution: true,
                    containsAutoReply: true,
                    title: `Runtime ${runtime(process.uptime())}`,
                    body: ``,
                    previewType: "PHOTO",
                    mediaType: 0,
                    mediaUrl: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
                    sourceType: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
                    sourceId: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
                    thumbnailUrl: thumb,
                    sourceUrl: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
                  },
                },
              },
              { quoted: m }
            );
          }
          break;
        case "gitclone":
          try {
            let regex =
              /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            if (!q)
              return reply(
                "link githubnya mana? contoh: https://github.com/satganzdevs/database"
              );
            if (!regex.test(q)) return setReply("link salah!");
            let [, user, repos] = q.match(regex) || [];
            let repo = repos.replace(/.git$/, "");
            let url = `https://api.github.com/repos/${user}/${repos}/zipball`;
            let filename = (await fetch(url, { method: "HEAD" })).headers
              .get("content-disposition")
              .match(/attachment; filename=(.*)/)[1];
            // 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
            reply(`*Mohon tunggu, sedang mengirim repository..*`);
            await satria.sendMessage(
              from,
              {
                document: { url: url },
                mimetype: "aplication/zip",
                title: "SatganzDevs",
                fileName: filename,
                caption: "done.",
              },
              { quoted: m }
            );
          } catch (err) {
            reply(mess.error.link);
          }
          break;
        case "mountainview":
          {
            satria.sendMessage(
              from,
              {
                image: {
                  url: "https://api.satganzdevs.cloud/api/wallpaper/pegunungan",
                },
                caption: "🌄",
              },
              { quoted: fkontak }
            );
          }
          break;
        case "meme":
          {
            let lol = await fetchjson(
              "https://raw.githubusercontent.com/HasamiAini/wabot_takagisan/main/whatsapp%20bot%20takagisan/whatsapp%20bot%20takagisan/lib/memeindo.json"
            );
            let tol = pickRandom(lol);
            satria.sendMessage(
              from,
              { image: { url: tol.image }, caption: "😁" },
              { quoted: fkontak }
            );
          }
          break;
        case "remini":
          {
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            const { remini } = diferentme;
            if (/image/.test(mime)) {
              try {
                let media = await satria.downloadMediaMessage(qmsg);
                let body = new FormData();
                body.append("image", media, "image");
                let res = await fetch(
                  "http://max-image-resolution-enhancer.codait-prod-41208c73af8fca213512856c7a09db52-0000.us-east.containers.appdomain.cloud/model/predict",
                  {
                    method: "POST",
                    body,
                  }
                );
                if (res.status !== 200) return reply(await res.json());
                await satria.sendMessage(
                  m.chat,
                  { image: res.buffer(), caption: "nih bang" },
                  { quoted: m }
                );
              } catch (e) {
                let media = await satria.downloadMediaMessage(qmsg);
                let resultan = await remini(media, "enhance");
                satria.sendMessage(
                  m.chat,
                  { image: resultan, caption: "nih bang" },
                  { quoted: m }
                );
              }
            } else return reply(`maaf, saya hanya bisa remini gambar.`);
          }
          break;
        case "tinyurl":
          {
            if (args.length < 1) return reply(`Masukkan link`);
            if (!/^(https?|ftp):\/\/[^\s\/$.?#][^\s]*$/.test(q))
              return reply(`Masukkan link`);
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            const fetchText = (url, optiono) => {
              return new Promise((resolve, reject) => {
                return fetch(url, optiono)
                  .then((response) => response.text())
                  .then((text) => resolve(text))
                  .catch((err) => {
                    console.log(color(err, "red"));
                    reject(err);
                  });
              });
            };
            let okok = await fetchText(
              `https://tinyurl.com/api-create.php?url=${q}`
            );
            let shorti = `*Result : ${okok}*`;
            reply(shorti);
          }
          break;
        case "bitly":
          {
            const { BitlyClient } = require("bitly");
            const bitly = new BitlyClient(
              "7d737131e678fc366699edead8bca146e69f6c78",
              {}
            );
            if (!q) return reply("Masukan link");
            if (!isUrl) return reply("Masukan link dengan benar");
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            try {
              let result = await bitly.shorten(q);
              reply(`Link: ${result.link}\nCreated at: ${result.created_at}`);
            } catch (e) {
              reply(`Url invalid`);
            }
          }
          break;
        case "toimg":
        case "toimage":
          {
            if (!/webp/.test(mime))
              return reply(`Reply stiker dengan caption *${prefix + command}*`);
            await reply(`Please Wait`);
            let { webp2mp4File } = require("./lib/uploader");
            let media = await satria.downloadAndSaveMediaMessage(qmsg);
            let webpToMp4 = await webp2mp4File(media);
            await satria.sendFileFromUrl(
              m.chat,
              webpToMp4.result,
              "Convert Webp To Video"
            );
            await fs.unlinkSync(media);
          }
          break;
        case "toaudio":
          {
            if (!/video/.test(mime) && !/audio/.test(mime))
              return reply(
                `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
                  prefix + command
                }`
              );
            await reply(`Please Wait`);
            let media = await satria.downloadMediaMessage(qmsg);
            let { toAudio } = require("./lib/converter");
            let audio = await toAudio(media, "mp4");
            satria.sendMessage(
              m.chat,
              { audio: audio, mimetype: "audio/mpeg" },
              { quoted: m }
            );
          }
          break;
        case "tomp3":
          {
            if (!/video/.test(mime) && !/audio/.test(mime))
              return reply(
                `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${
                  prefix + command
                }`
              );
            await reply(`Please Wait`);
            let media = await satria.downloadMediaMessage(qmsg);
            let { toAudio } = require("./lib/converter");
            let audio = await toAudio(media, "mp4");
            satria.sendMessage(
              m.chat,
              {
                document: audio,
                mimetype: "audio/mpeg",
                fileName: `Convert By SatganzDevs.mp3`,
              },
              { quoted: m }
            );
          }
          break;
        case "tovn":
          {
            if (!/video/.test(mime) && !/audio/.test(mime))
              return reply(
                `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${
                  prefix + command
                }`
              );
            await reply(`Please Wait`);
            let media = await satria.downloadMediaMessage(qmsg);
            let { toPTT } = require("./lib/converter");
            let audio = await toPTT(media, "mp4");
            satria.sendMessage(
              m.chat,
              {
                audio: audio,
                ptt: true,
                waveform: new Uint8Array(64),
                mimetype: "audio/mpeg",
              },
              { quoted: m }
            );
          }
          break;
        case "togif":
          {
            if (!/webp/.test(mime))
              return reply(`Reply stiker dengan caption *${prefix + command}*`);
            await reply(`Please Wait`);
            let { webp2mp4File } = require("./lib/uploader");
            let media = await satria.downloadAndSaveMediaMessage(qmsg);
            let webpToMp4 = await webp2mp4File(media);
            await satria.sendMessage(
              m.chat,
              {
                video: {
                  url: webpToMp4.result,
                  caption: "Convert Webp To Video",
                  streamingSidecar: new Uint8Array(300),
                },
                gifPlayback: true,
              },
              { quoted: m }
            );
            await fs.unlinkSync(media);
          }
          break;
        case "quotes":
          {
            if (!q)
              return satria.sendPoll(from, "Select One", [
                ".quotes senja",
                ".quotes islami",
                ".quotes anime",
                ".quotes bacot",
                ".quotes dilan",
              ]);
            if (q === "senja") {
              let med = await fetchJson(
                `https://api.satganzdevs.cloud/api/quotes/senja`
              );
              reply(med.quote);
            }
            if (q === "islami") {
              let med = await fetchJson(
                `https://api.satganzdevs.cloud/api/quotes/islami`
              );
              reply(med.quote);
            }
            if (q === "bacot") {
              let med = await fetchJson(
                `https://api.satganzdevs.cloud/api/quotes/${q}`
              );
              reply(med.quote);
            }
            if (q === "dilan") {
              let med = await fetchJson(
                `https://api.satganzdevs.cloud/api/quotes/${q}`
              );
              reply(med.quote);
            }
            if (q === "anime") {
              let med = await fetchJson(
                `https://api.satganzdevs.cloud/api/quotes/anime`
              );
              satria.sendMessage(
                from,
                { text: `${med.result.quotes}\n - ${med.result.karakter}` },
                { quoted: m }
              );
            }
          }
          break;
        case "ngegalau":
        case "ngesad":
          {
            let bro = await satria.sendMessage(
              from,
              { text: pickRandom(quotes.sad), mentions: [m.sender] },
              { quoted: m }
            );
            satria.sendMessage(
              from,
              {
                audio: { url: pickRandom(galau) },
                mimetype: "audio/mpeg",
                ptt: true,
                waveform: new Uint8Array(64),
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: ":)",
                    body: pickRandom(quotes.body),
                    previewType: "PHOTO",
                    mediaType: 1,
                    thumbnail: global.thumb,
                    sourceUrl: `https://instagram.com/kurniawan_satriaaaa`,
                  },
                },
              },
              { quoted: bro }
            );
          }
          break;
        case "verif@":
        case "kenon":
          {
            if (!isCreator) return;
            if (m.quoted || q) {
              var tosend = m.quoted
                ? m.quoted.sender
                : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
              if (tosend === global.owner)
                return reply(`Tidak bisa verif My Creator!`);
              var targetnya = tosend.split("@")[0];
              try {
                var axioss = require("axios");
                let ntah = await axioss.get(
                  "https://www.whatsapp.com/contact/noclient/"
                );
                let email = await axioss.get(
                  "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
                );
                let cookie = ntah.headers["set-cookie"].join("; ");
                const cheerio = require("cheerio");
                let $ = cheerio.load(ntah.data);
                let $form = $("form");
                let url = new URL(
                  $form.attr("action"),
                  "https://www.whatsapp.com"
                ).href;
                let form = new URLSearchParams();
                form.append("jazoest", $form.find("input[name=jazoest]").val());
                form.append("lsd", $form.find("input[name=lsd]").val());
                form.append("step", "submit");
                form.append("country_selector", "+");
                form.append("phone_number", `+${targetnya}`);
                form.append("email", email.data[0]);
                form.append("email_confirm", email.data[0]);
                form.append("platform", "ANDROID");
                form.append(
                  "your_message",
                  `Perdido/roubado: desative minha conta`
                );
                form.append("__user", "0");
                form.append("__a", "1");
                form.append("__csr", "");
                form.append("__req", "8");
                form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0");
                form.append("dpr", "1");
                form.append("__ccg", "UNKNOWN");
                form.append("__rev", "1007887737");
                form.append("__comment_req", "0");
                let res = await axioss({
                  url,
                  method: "POST",
                  data: form,
                  headers: {
                    cookie,
                  },
                });
                let payload = String(res.data);
                if (payload.includes(`"payload":true`)) {
                  reply(`##- WhatsApp Support -##

Hai,

Terima kasih atas pesan Anda.

Kami telah menonaktifkan akun WhatsApp Anda.  Ini berarti akun Anda telah di keluarkan maka untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut.  Harap dicatat: Tim Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.

Selama periode penonaktifan:

â€¢ Kontak Anda di WhatsApp mungkin masih melihat nama dan gambar profil Anda.
â€¢ Setiap pesan yang mungkin dikirim oleh kontak Anda ke

akun akan tetap dalam status tertunda hingga 30 hari.

Jika Anda ingin mendapatkan kembali akun Anda, daftarkan ulang akun Anda sebagai

secepatnya.  Daftar ulang akun Anda dengan memasukkan 6 digit

kode yang Anda terima melalui SMS atau panggilan telepon.  Jika Anda mendaftar ulang

pulihkan riwayat obrolan Anda di: Android |  iPhone.

file, cadangan, atau riwayat panggilan dari akun yang dihapus.

akun sebelum dihapus, Anda akan tetap berada di semua obrolan grup.  Anda akan memiliki opsi untuk memulihkan data Anda.  Pelajari caranya Jika Anda tidak mendaftarkan ulang akun Anda, akun tersebut mungkin akan dihapus dan proses ini tidak dapat dibatalkan.  Sayangnya, WhatsApp tidak dapat membantu Anda memulihkan obrolan, dokumen, media

Catatan: Jika perangkat Anda hilang atau dicuri, sebaiknya hubungi penyedia seluler Anda untuk memblokir kartu SIM Anda sesegera mungkin.  Memblokir kartu SIM Anda mencegah orang lain mendaftar dan mengakses akun yang terkait dengan kartu SIM.

Sumber daya terkait:

âš« Untuk informasi lebih lanjut tentang penonaktifan akun pada ponsel yang hilang dan dicuri, silakan baca artikel ini.

âš« Pelajari tentang akun yang dicuri di artikel ini.

Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami.  Kami akan dengan senang hati membantu!`);
                } else if (payload.includes(`"payload":false`)) {
                  reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`);
                } else reply(util.format(res.data));
              } catch (err) {
                reply(`${err}`);
              }
            } else reply("Masukkan nomor target!");
          }
          break;
        //=================================================
        case "banned":
          {
            if (!isCreator) return;
            if (m.quoted || q) {
              var tosend = m.quoted
                ? m.quoted.sender
                : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
              if (tosend === global.owner)
                return reply(`Tidak bisa verif My Creator!`);
              var targetnya = tosend.split("@")[0];
              try {
                var axioss = require("axios");
                let ntah = await axioss.get(
                  "https://www.whatsapp.com/contact/noclient/"
                );
                let email = await axioss.get(
                  "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
                );
                let cookie = ntah.headers["set-cookie"].join("; ");
                const cheerio = require("cheerio");
                let $ = cheerio.load(ntah.data);
                let $form = $("form");
                let url = new URL(
                  $form.attr("action"),
                  "https://www.whatsapp.com"
                ).href;
                let form = new URLSearchParams();
                form.append("jazoest", $form.find("input[name=jazoest]").val());
                form.append("lsd", $form.find("input[name=lsd]").val());
                form.append("step", "submit");
                form.append("country_selector", "+");
                form.append("phone_number", `+${targetnya}`);
                form.append("email", email.data[0]);
                form.append("email_confirm", email.data[0]);
                form.append("platform", "ANDROID");
                form.append(
                  "your_message",
                  `I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
Number : +${targetnya}`
                );
                form.append("__user", "0");
                form.append("__a", "1");
                form.append("__csr", "");
                form.append("__req", "8");
                form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0");
                form.append("dpr", "1");
                form.append("__ccg", "UNKNOWN");
                form.append("__rev", "1007887737");
                form.append("__comment_req", "0");
                let res = await axioss({
                  url,
                  method: "POST",
                  data: form,
                  headers: {
                    cookie,
                  },
                });
                reply(
                  `Wait 1-24 Jam an untuk proses banned dari bot dan tunggu Â±30 Detik an untuk melihat balasan email dari WhatsApp tuan grazeðŸ¥ºðŸ™`
                );
                await loading(180000);
                let payload = String(res.data);
                if (payload.includes(`"payload":true`)) {
                  reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`);
                } else if (payload.includes(`"payload":false`)) {
                  reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`);
                } else reply(util.format(res.data));
              } catch (err) {
                reply(`${err}`);
              }
            } else reply("Masukkan nomor target!");
          }
          break;
        //=================================================
        case "unbanned":
          {
            if (!isCreator) return;
            if (m.quoted || q) {
              var tosend = m.quoted
                ? m.quoted.sender
                : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
              if (tosend === global.owner)
                return reply(`Tidak bisa verif My Creator!`);
              var targetnya = tosend.split("@")[0];
              try {
                var axioss = require("axios");
                let ntah = await axioss.get(
                  "https://www.whatsapp.com/contact/noclient/"
                );
                let email = await axioss.get(
                  "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
                );
                let cookie = ntah.headers["set-cookie"].join("; ");
                const cheerio = require("cheerio");
                let $ = cheerio.load(ntah.data);
                let $form = $("form");
                let url = new URL(
                  $form.attr("action"),
                  "https://www.whatsapp.com"
                ).href;
                let form = new URLSearchParams();
                form.append("jazoest", $form.find("input[name=jazoest]").val());
                form.append("lsd", $form.find("input[name=lsd]").val());
                form.append("step", "submit");
                form.append("country_selector", "+");
                form.append("phone_number", `+${targetnya}`);
                form.append("email", email.data[0]);
                form.append("email_confirm", email.data[0]);
                form.append("platform", "ANDROID");
                form.append(
                  "your_message",
                  `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`
                );
                form.append("__user", "0");
                form.append("__a", "1");
                form.append("__csr", "");
                form.append("__req", "8");
                form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0");
                form.append("dpr", "1");
                form.append("__ccg", "UNKNOWN");
                form.append("__rev", "1007887737");
                form.append("__comment_req", "0");
                let res = await axioss({
                  url,
                  method: "POST",
                  data: form,
                  headers: {
                    cookie,
                  },
                });
                reply(
                  `Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu Â±30 Detik an untuk melihat balasan email dari WhatsApp tuan grazeðŸ¥ºðŸ™`
                );
                await loading(90000);
                let payload = String(res.data);
                if (payload.includes(`"payload":true`)) {
                  reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`);
                } else if (payload.includes(`"payload":false`)) {
                  reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`);
                } else reply(util.format(res.data));
              } catch (err) {
                reply(`${err}`);
              }
            } else reply("Masukkan nomor target!");
          }
          break;
        //=================================================
        case "unbannedv2":
          {
            if (!isCreator) return;
            if (m.quoted || q) {
              var tosend = m.quoted
                ? m.quoted.sender
                : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
              if (tosend === global.owner)
                return reply(`Tidak bisa verif My Creator!`);
              var targetnya = tosend.split("@")[0];

              try {
                var axioss = require("axios");
                let ntah = await axioss.get(
                  "https://www.whatsapp.com/contact/noclient/"
                );
                let email = await axioss.get(
                  "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
                );
                let cookie = ntah.headers["set-cookie"].join("; ");
                const cheerio = require("cheerio");
                let $ = cheerio.load(ntah.data);
                let $form = $("form");
                let url = new URL(
                  $form.attr("action"),
                  "https://www.whatsapp.com"
                ).href;
                let form = new URLSearchParams();
                form.append("jazoest", $form.find("input[name=jazoest]").val());
                form.append("lsd", $form.find("input[name=lsd]").val());
                form.append("step", "submit");
                form.append("country_selector", "+");
                form.append("phone_number", `+${targetnya}`);
                form.append("email", email.data[0]);
                form.append("email_confirm", email.data[0]);
                form.append("platform", "ANDROID");
                form.append(
                  "your_message",
                  `Pihak WhatsApp yang terhormat mohon bantuan anda segera
[${targetnya}]
Saya telah mengirim beberapa email dan laporan ke pihak WhatsApp untuk mengajukan banding agar nomor saya cepat di buka dari daftar blokir, saya sangat membutuhkan untuk keperluan pribadi berkomunikasi dengan keluarga jika saya melakukan pelanggaran sebelumnya maka saya akan menggunakan nomor saya tersebut dengan lebih hati-hati dan lebih baik lagi dari sebelumnya dan saya sekarang telah menuruti apa yang pihak WhatsApp sarankan, dan saya sangat berharap sekarang juga nomor saya dapat di gunakan kembali. Terimakasih`
                );
                form.append("__user", "0");
                form.append("__a", "1");
                form.append("__csr", "");
                form.append("__req", "8");
                form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0");
                form.append("dpr", "1");
                form.append("__ccg", "UNKNOWN");
                form.append("__rev", "1007887737");
                form.append("__comment_req", "0");

                let res = await axioss({
                  url,
                  method: "POST",
                  data: form,
                  headers: {
                    cookie,
                  },
                });
                reply(
                  `Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu Â±30 Detik an untuk melihat balasan email dari WhatsApp tuan grazeðŸ¥ºðŸ™`
                );
                await loading(90000);
                let payload = String(res.data);
                if (payload.includes(`"payload":true`)) {
                  reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`);
                } else if (payload.includes(`"payload":false`)) {
                  reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`);
                } else reply(util.format(res.data));
              } catch (err) {
                reply(`${err}`);
              }
            } else reply("Masukkan nomor target!");
          }
          break;
        //=================================================
        case "unbannedv3":
          {
            if (!isCreator) return;
            if (m.quoted || q) {
              var tosend = m.quoted
                ? m.quoted.sender
                : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
              if (tosend === global.owner)
                return reply(`Tidak bisa verif My Creator!`);
              var targetnya = tosend.split("@")[0];

              try {
                var axioss = require("axios");
                let ntah = await axioss.get(
                  "https://www.whatsapp.com/contact/noclient/"
                );
                let email = await axioss.get(
                  "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
                );
                let cookie = ntah.headers["set-cookie"].join("; ");
                const cheerio = require("cheerio");
                let $ = cheerio.load(ntah.data);
                let $form = $("form");
                let url = new URL(
                  $form.attr("action"),
                  "https://www.whatsapp.com"
                ).href;
                let form = new URLSearchParams();
                form.append("jazoest", $form.find("input[name=jazoest]").val());
                form.append("lsd", $form.find("input[name=lsd]").val());
                form.append("step", "submit");
                form.append("country_selector", "+");
                form.append("phone_number", `+${targetnya}`);
                form.append("email", email.data[0]);
                form.append("email_confirm", email.data[0]);
                form.append("platform", "ANDROID");
                form.append(
                  "your_message",
                  `Hola WhatsApp
Actualmente, algunas personas tienen muchas formas efectivas de bloquear nÃºmeros de usuario e informarlos sin ningÃºn motivo, de hecho, conozco bien los tÃ©rminos de servicio y los cumplÃ­, pero algunos piratas informÃ¡ticos me hicieron un informe falso y mi nÃºmero fue bloqueado, desbloquee el nÃºmero ${targetnya}`
                );
                form.append("__user", "0");
                form.append("__a", "1");
                form.append("__csr", "");
                form.append("__req", "8");
                form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0");
                form.append("dpr", "1");
                form.append("__ccg", "UNKNOWN");
                form.append("__rev", "1007887737");
                form.append("__comment_req", "0");

                let res = await axioss({
                  url,
                  method: "POST",
                  data: form,
                  headers: {
                    cookie,
                  },
                });
                reply(
                  `Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu Â±30 Detik an untuk melihat balasan email dari WhatsApp tuan grazeðŸ¥ºðŸ™`
                );
                await loading(90000);
                let payload = String(res.data);
                if (payload.includes(`"payload":true`)) {
                  reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`);
                } else if (payload.includes(`"payload":false`)) {
                  reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`);
                } else reply(util.format(res.data));
              } catch (err) {
                reply(`${err}`);
              }
            } else reply("Masukkan nomor target!");
          }
          break;
        //=================================================
        case "unbannedv4":
          {
            if (!isCreator) return;
            if (m.quoted || q) {
              var tosend = m.quoted
                ? m.quoted.sender
                : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
              if (tosend === global.owner)
                return reply(`Tidak bisa verif My Creator!`);
              var targetnya = tosend.split("@")[0];

              try {
                var axioss = require("axios");
                let ntah = await axioss.get(
                  "https://www.whatsapp.com/contact/noclient/"
                );
                let email = await axioss.get(
                  "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
                );
                let cookie = ntah.headers["set-cookie"].join("; ");
                const cheerio = require("cheerio");
                let $ = cheerio.load(ntah.data);
                let $form = $("form");
                let url = new URL(
                  $form.attr("action"),
                  "https://www.whatsapp.com"
                ).href;
                let form = new URLSearchParams();
                form.append("jazoest", $form.find("input[name=jazoest]").val());
                form.append("lsd", $form.find("input[name=lsd]").val());
                form.append("step", "submit");
                form.append("country_selector", "+");
                form.append("phone_number", `+${targetnya}`);
                form.append("email", email.data[0]);
                form.append("email_confirm", email.data[0]);
                form.append("platform", "ANDROID");
                form.append(
                  "your_message",
                  `Good day whatsApp team. My whatApp account has been burned permanently, please i plead with you unblock it, i cannot use another number again. I donâ€™t know why it is burned but my friends re suggesting its because i use GB whatsApp, which i didnâ€™t know it was wrong. My number is [ ${targetnya} ]. Please whatsApp team, help me unblock my account. please i cannot use a new number as my current number is connected to slot of important things like vacancies.
Thank you`
                );
                form.append("__user", "0");
                form.append("__a", "1");
                form.append("__csr", "");
                form.append("__req", "8");
                form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0");
                form.append("dpr", "1");
                form.append("__ccg", "UNKNOWN");
                form.append("__rev", "1007887737");
                form.append("__comment_req", "0");

                let res = await axioss({
                  url,
                  method: "POST",
                  data: form,
                  headers: {
                    cookie,
                  },
                });
                reply(
                  `Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu Â±30 Detik an untuk melihat balasan email dari WhatsApp tuan grazeðŸ¥ºðŸ™`
                );
                await loading(90000);
                let payload = String(res.data);
                if (payload.includes(`"payload":true`)) {
                  reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`);
                } else if (payload.includes(`"payload":false`)) {
                  reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`);
                } else reply(util.format(res.data));
              } catch (err) {
                reply(`${err}`);
              }
            } else reply("Masukkan nomor target!");
          }
          break;
        //=================================================
        case "unbannedv5":
          {
            if (!isCreator) return;
            if (m.quoted || q) {
              var tosend = m.quoted
                ? m.quoted.sender
                : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
              if (tosend === global.owner)
                return reply(`Tidak bisa verif My Creator!`);
              var targetnya = tosend.split("@")[0];

              try {
                var axioss = require("axios");
                let ntah = await axioss.get(
                  "https://www.whatsapp.com/contact/noclient/"
                );
                let email = await axioss.get(
                  "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
                );
                let cookie = ntah.headers["set-cookie"].join("; ");
                const cheerio = require("cheerio");
                let $ = cheerio.load(ntah.data);
                let $form = $("form");
                let url = new URL(
                  $form.attr("action"),
                  "https://www.whatsapp.com"
                ).href;
                let form = new URLSearchParams();
                form.append("jazoest", $form.find("input[name=jazoest]").val());
                form.append("lsd", $form.find("input[name=lsd]").val());
                form.append("step", "submit");
                form.append("country_selector", "+");
                form.append("phone_number", `+${targetnya}`);
                form.append("email", email.data[0]);
                form.append("email_confirm", email.data[0]);
                form.append("platform", "ANDROID");
                form.append(
                  "your_message",
                  `Aloha WhatsApp, ua Ê»aihue Ê»ia kaÊ»u helu e ka mea hacker, e Ê»oluÊ»olu e wehe hou iÄ ia [${targetnya}]`
                );
                form.append("__user", "0");
                form.append("__a", "1");
                form.append("__csr", "");
                form.append("__req", "8");
                form.append("__hs", "19561.BP:whatsapp_www_pkg.2.0.0.0.0");
                form.append("dpr", "1");
                form.append("__ccg", "UNKNOWN");
                form.append("__rev", "1007887737");
                form.append("__comment_req", "0");

                let res = await axioss({
                  url,
                  method: "POST",
                  data: form,
                  headers: {
                    cookie,
                  },
                });
                reply(
                  `Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu Â±30 Detik an untuk melihat balasan email dari WhatsApp tuan grazeðŸ¥ºðŸ™`
                );
                await loading(90000);
                let payload = String(res.data);
                if (payload.includes(`"payload":true`)) {
                  reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`);
                } else if (payload.includes(`"payload":false`)) {
                  reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`);
                } else reply(util.format(res.data));
              } catch (err) {
                reply(`${err}`);
              }
            } else reply("Masukkan nomor target!");
          }
          break;
        case "couple":
          {
            await reply(`Please Wait`);
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json"
            );
            let random = anu[Math.floor(Math.random() * anu.length)];
            satria.sendMessage(
              m.chat,
              { image: { url: random.male }, caption: `Couple Male` },
              { quoted: fkontak }
            );
            satria.sendMessage(
              m.chat,
              { image: { url: random.female }, caption: `Couple Female` },
              { quoted: fkontak }
            );
          }
          break;
        case "ytsearch":
        case "yts":
          {
            if (!text)
              return reply(`Example : ${prefix + command} story wa anime`);
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            let yts = require("yt-search");
            let search = await yts(text);
            let teks = "YouTube Search\n\n Result From " + text + "\n\n";
            let no = 1;
            for (let i of search.all) {
              teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${
                i.videoId
              }\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${
                i.timestamp
              }\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${
                i.url
              }\n\n─────────────────\n\n`;
            }
            satria.sendMessage(
              m.chat,
              { image: { url: search.all[0].thumbnail }, caption: teks },
              { quoted: m }
            );
          }
          break;
        case "play":
          {
            if (!text)
              return reply(`Example : ${prefix + command} story wa anime`);
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            let yts = require("yt-search");
            let search = await yts(text);
            let anu = search.videos[0];
            console.log(anu);
            try {
              var thumbnya = `https://i.ytimg.com/vi/${anu.url}/hqdefault.jpg`;
            } catch (err) {
              var thumbnya = `https://i.ytimg.com/vi/${anu.url}/default.jpg`;
            }
            try {
              let bro = await ytdl.getInfo(anu.url);
              console.log(bro);
              let mp3File = getRandom(".mp3");
              ytdl(anu.url, {
                filter: "audioonly",
              })
                .pipe(fs.createWriteStream(mp3File))
                .on("finish", async () => {
                  await satria.sendMessage(
                    m.chat,
                    {
                      audio: fs.readFileSync(mp3File),
                      mimetype: "audio/mpeg",
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                          title: "[ YOUTUBE PLAY ]",
                          previewType: "PHOTO",
                          mediaType: 1,
                          renderLargerThumbnail: true,
                          containsAutoReply: true,
                          thumbnailUrl: anu.thumbnail,
                          sourceUrl: anu.url,
                        },
                      },
                    },
                    { quoted: m }
                  );
                  fs.unlinkSync(mp3File);
                });
            } catch (err) {
              console.log(err);
            }
          }
          break;
        case "ytmp3":
          {
            if (!text) return m.reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27`);
            try {
              var thumbnya = `https://i.ytimg.com/vi/${q}/hqdefault.jpg`;
            } catch (err) {
              var thumbnya = `https://i.ytimg.com/vi/${q}/default.jpg`;
            }
            try {
              let bro = await ytdl.getInfo(q);
              let mp3File = getRandom(".mp3");
              ytdl(q, {
                filter: "audioonly",
              })
                .pipe(fs.createWriteStream(mp3File))
                .on("finish", async () => {
                  await satria.sendMessage(
                    m.chat,
                    {
                      audio: fs.readFileSync(mp3File),
                      mimetype: "audio/mpeg",
                      second: 86400,
                      contextInfo: {
                        externalAdReply: {
                          showAdAttribution: true,
                          title: bro.title,
                          body: bro.description,
                          previewType: "PHOTO",
                          mediaType: 1,
                          renderLargerThumbnail: true,
                          thumbnailUrl: thumbnya,
                          sourceUrl: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
                        },
                      },
                    },
                    { quoted: m }
                  );
                  fs.unlinkSync(mp3File);
                });
            } catch (err) {
              reply('error')
            console.log(err)
            }
          }
          break;
        case "ytmp4":
          {
            if (!text) return m.reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27`);
            try {
              let res = await ytdl.getInfo(q);
              let info = res.videoDetails;
              console.log(res);
              let mp4File = getRandom(".mp4");
              ytdl(q, {
                filter: "videoonly",
              })
                .pipe(fs.createWriteStream(`./${m.sender}.mp4`))
                .on("finish", async (info) => {
                  satria.sendMessage(m.chat, { video: fs.readFileSync(`./${m.sender}.mp4`), caption: `Nih`, mimetype: "video/mp4"},{ quoted: m })
                });
            } catch (err) {
              console.log(err);
            }
          }
          break;
        case "send":
          {
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 5; // kurangi 1 limit
            await reply(`Please Wait`);
            let users__ = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            const kalgans = {
              key: {
                fromMe: [],
                participant: "0@s.whatsapp.net",
                ...(from ? { remoteJid: "" } : {}),
              },
              message: {
                stickerMessage: {
                  url: "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
                  fileSha256: "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
                  fileEncSha256: "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
                  mediaKey: "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
                  mimetype: "image/webp",
                  height: 40,
                  width: 40,
                  directPath:
                    "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
                  fileLength: "99999999",
                  mediaKeyTimestamp: "16572901099967",
                  isAnimated: [],
                },
              },
            };

            if (!users__)
              return reply(
                `Balas pesan target, tag target, atau tempel nomor target.`
              );

            let satxy = 20;
            for (let i = 0; i < satxy; i++) {
              await sleep(300);
              satria.sendMessage(users__, { text: "" }, { quoted: kalgans });
              satxy -= 1;
            }

            if (satxy === 0) return reply("done");
          }
          break;

        case "tiktok":
          {
            if (!q) return reply("mana linknya?");
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            const { ttdl } = require("btch-downloader");
            try {
              await ttdl(budy).then(async (res) => {
                await satria.sendMessage(
                  m.chat,
                  {
                    video: await getBuffer(res.video),
                    caption: ``,
                    streamingSidecar: new Uint8Array(300),
                  },
                  { quoted: m }
                );
              });
              await react(pickRandom(["👌", "✅", "✔️"]));
            } catch (error) {
              let url = `https://dlpanda.com/id?url=${budy}&token=G7eRpMaa`;
              let response = await axios.get(url);
              const html = response.data;
              const $ = cheerio.load(html);
              let media = [];
              // Mengekstrak video
              $("div.hero.col-md-12.col-lg-12.pl-0.pr-0 video source").each(
                (index, element) => {
                  media.push($(element).attr("src"));
                }
              );
              // Jika tidak ada video, Anda bisa menambahkan penanganan lain sesuai kebutuhan
              if (media.length === 0) {
                let url = `https://dlpanda.com/id?url=${budy}&token=G7eRpMaa`;
                let response = await axios.get(url); // Menggunakan metode 'GET' alih-alih 'HEAD'
                const html = response.data;
                const $ = cheerio.load(html);
                let imgSrc = [];
                let creator = "Jikarinka";
                $("div.col-md-12 > img").each((index, element) => {
                  imgSrc.push($(element).attr("src"));
                });
                let fix = imgSrc.map((e) => {
                  return { img: e, creator: creator };
                });
                for (let i of fix) {
                  satria.sendFileFromUrl(m.chat, i.img, "done", m);
                }
              } else {
                // Mengirim video ke obrolan
                for (let videoSrc of media) {
                  satria.sendFileFromUrl(m.chat, videoSrc, "done", m, {
                    streamingSidecar: new Uint8Array(300),
                  });
                }
              }
              await react(pickRandom(["👌", "✅", "✔️"]));
            }
          }
          break;
        case "tiktokmp3":
          {
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            try {
              const tik = require("tiktod");
              tik.download(text).then((json) => {
                console.log(json);
                satria.sendMessage(
                  m.chat,
                  {
                    audio: { url: json.result.music.url },
                    mimetype: "audio/mpeg",
                  },
                  { quoted: fkontak }
                );
              });
            } catch (error) {
              console.log(error);
              reply("error");
            }
          }
          break;
        case "scdl":
          {
            if (!m.isGroup && !isCreator) return onlyPrem();
            await react("👌");
            soundcloud(q).then((r) => {
              satria.sendMessage(
                from,
                {
                  audio: { url: r.link },
                  mimetype: "audio/mpeg",
                  ptt: false,
                  // wavefrom: new Uint8Array(64),
                },
                { quoted: m }
              );
            });
          }
          break;
        case "sticker":
        case "stiker":
        case "s":
          {
            if (/image/.test(mime)) {
              let media = await satria.downloadMediaMessage(qmsg);
              const sticker = new Sticker(media, {
                pack: global.packname,
                author: global.author,
                type: StickerTypes.FULL,
                categories: ["🤩", "🎉"],
                id: "12345",
                quality: 50,
                background: "#000000",
              });
              const buffer = await sticker.toBuffer();
              let memek = await sticker.toFile("sticker.webp");
              satria.sendMessage(
                m.chat,
                { sticker: fs.readFileSync(memek) },
                { quoted: m }
              );
              await fs.unlinkSync(memek);
            } else if (/video/.test(mime)) {
              let media = await satria.downloadMediaMessage(qmsg);
              let encmedia = await satria.sendVideoAsSticker(m.chat, media, m, {
                pack: global.packname,
                author: global.author,
              });
              await fs.unlinkSync(encmedia);
            } else {
              reply(
                `Kirim/reply gambar/video/gif dengan caption ${
                  prefix + command
                }\nDurasi Video/Gif 1-9 Detik`
              );
            }
          }
          break;
        case "smeme":
          {
            if (!text)
              return reply(`Balas Image Dengan Caption ${prefix + command}`);
            if (!quoted)
              return reply(`Balas Image Dengan Caption ${prefix + command}`);
            if (/image/.test(mime)) {
              reply("*Sabar Cuy Loading*");
              mee = await satria.downloadAndSaveMediaMessage(quoted);
              mem = await uptotelegra(mee);
              kaytid = await getBuffer(
                `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
              );
              satria.sendImageAsSticker(m.chat, kaytid, m, {
                packname: global.packname,
                author: global.author,
              });
            } else return reply("hanya bisa membuat smeme dari foto");
          }
          break;
        case "setppbot":
          {
            if (!isCreator) return reply(mess.ownerOnly);
            let medis = await satria.downloadAndSaveMediaMessage(qmsg, "ppg");
            var { img } = await generateProfilePicture(medis);
            await satria.query({
              tag: "iq",
              attrs: {
                to: botNumber,
                type: "set",
                xmlns: "w:profile:picture",
              },
              content: [
                {
                  tag: "picture",
                  attrs: { type: "image" },
                  content: img,
                },
              ],
            });
            fs.unlinkSync(medis);
            reply("sucess change profile picture");
          }
          break;
        case "block":
          {
            if (!isCreator) return reply(mess.ownerOnly);
            let users = m.mentionedJid[0]
              ? m.mentionedJid[0]
              : m.quoted
              ? m.quoted.sender
              : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await satria
              .updateBlockStatus(users, "block")
              .then((res) => reply(jsonformat(res)))
              .catch((err) => reply(jsonformat(err)));
          }
          break;
        case "unblock":
          {
            if (!isCreator) return reply(mess.ownerOnly);
            let users = m.mentionedJid[0]
              ? m.mentionedJid[0]
              : m.quoted
              ? m.quoted.sender
              : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await satria
              .updateBlockStatus(users, "unblock")
              .then((res) => reply(jsonformat(res)))
              .catch((err) => reply(jsonformat(err)));
          }
          break;
        case "akira":
        case "akiyama":
        case "anna":
        case "asuna":
        case "ayuzawa":
        case "boruto":
        case "chitanda":
        case "chitoge":
        case "deidara":
        case "doraemon":
        case "elaina":
        case "emilia":
        case "asuna":
        case "erza":
        case "gremory":
        case "hestia":
        case "hinata":
        case "inori":
        case "isuzu":
        case "itachi":
        case "itori":
        case "kaga":
        case "kagura":
        case "kakasih":
        case "kaori":
        case "kosaki":
        case "kotori":
        case "kuriyama":
        case "kuroha":
        case "kurumi":
        case "loli":
        case "madara":
        case "mikasa":
        case "miku":
        case "minato":
        case "naruto":
        case "natsukawa":
        case "neko2":
        case "nekohime":
        case "nezuko":
        case "nishimiya":
        case "onepiece":
        case "pokemon":
        case "rem":
        case "rize":
        case "sagiri":
        case "sakura":
        case "sasuke":
        case "shina":
        case "shinka":
        case "shizuka":
        case "shota":
        case "tomori":
        case "toukachan":
        case "tsunade":
        case "yatogami":
        case "yuki":
          {
            await reply(`Please Wait`);
            let res = await fetchJson(
              `https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`
            );
            let cita = res[Math.floor(Math.random() * res.length)];
            await satria.sendMessage(
              from,
              { image: { url: cita }, caption: "nih" },
              { quoted: fkontak }
            );
          }
          break;
        case "lyrics":
        case "lirik":
          {
            if (!q) return reply("please input the query!");
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            let res = await fetchJson(
              `https://api.satganzdevs.cloud/api/lirik?query=${q}`
            );
            satria.sendMessage(
              from,
              { image: { url: res.result.thumb }, caption: res.result.lirik },
              { quoted: m }
            );
          }
          break;
        case "toqr":
          {
            const buffer = await QRCode.toBuffer(q, { scale: 8 });
            satria.sendMessage(
              from,
              {
                image: buffer,
                caption: "nih",
                mimetype: "image/png",
              },
              { quoted: m }
            );
          }
          break;
        case "darkjokes":
          {
            satria.sendMessage(
              from,
              {
                image: {
                  url: "https://api.satganzdevs.cloud/api/random/darkjokes",
                },
              },
              { quoted: m }
            );
          }
          break;
        case "waifu":
          {
            await reply(`Please Wait`);
            satria.sendMessage(
              from,
              {
                image: {
                  url: "https://api.satganzdevs.cloud/api/random/waifu",
                },
              },
              { quoted: m }
            );
          }
          break;
        case "doge":
        case "patrick":
        case "amongus":
        case "mukalu":
        case "paimon":
          {
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            satria.sendImageAsSticker(
              from,
              `https://api.satganzdevs.cloud/api/stiker/${command}`,
              m,
              { packname: global.packname, author: global.author }
            );
          }
          break;
        case "wallpaperanime":
          {
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            satria.sendImage(
              from,
              "https://api.satganzdevs.cloud/api/animewallpaper",
              "Powered By SatganzDevs",
              m
            );
          }
          break;
        case "taugasih":
          {
            await reply(`Please Wait`);
            let result = await fetchJson(
              "https://api.satganzdevs.cloud/api/taugasih"
            );
            satria.sendMessage(
              from,
              {
                image: {
                  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREz47eH1d0wwKCwp2YgD6qKUmaQpHMvNe7Rw&usqp=CAU",
                },
                caption: result.fakta,
              },
              { quoted: m }
            );
          }
          break;
        case "pinterest":
          {
            if (!q)
              return reply(
                "masukan query pencarian, contoh .pinterest freyajkt48"
              );
            if (db.data.users[m.sender].limit === 0)
              return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
            db.data.users[m.sender].limit -= 1; // kurangi 1 limit
            await reply(`Please Wait`);
            await pinterest(q).then((res) => {
              for (let i of res) {
                satria.sendMessage(m.chat, { image: { url: i } });
              }
            });
          }
          break;
        case "menfes":
        case "menfess":
          {
            if (m.isGroup)
              return reply("Fitur ini tidak dapat digunakan di grup.");
            if (!text) return reply(`Contoh: ${prefix + command} 6282xxxxx`);
            this.menfess = this.menfess ? this.menfess : {};
            let targetNumber = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            let targetTags = targetNumber
              .replace(/[@s.whatsapnet]/g, "")
              .replace(/[@S.WHATSAPNET]/g, "");
            var checkTarget = await satria.onWhatsApp(targetNumber);
            if (targetNumber == m.sender)
              return reply("Tidak bisa mengirim pesan ke nomor sendiri!");
            if (checkTarget.length == 0)
              return reply(
                `Nomor tersebut tidak terdaftar di WhatsApp.\n\nMasukkan nomor yang valid dan terdaftar di WhatsApp.`
              );
            let id = +new Date();
            db.data.menfess[id] = {
              id,
              a: m.sender,
              b: targetNumber,
              state: "WAITING",
              check: function (who = "") {
                return [this.a, this.b].includes(who);
              },
              other: function (who = "") {
                return who === this.a ? this.b : who === this.b ? this.a : "";
              },
            };
            let senderName = await satria.getName(m.sender);
            let targetName = await satria.getName(targetNumber);
            let pjText = `Halo ${targetName}\nSeseorang ingin mengirimkan pesan anonim denganmu. Balas *Y* untuk menerima dan *N* untuk menolak.`;
            let akhji = `Menunggu penerima untuk mengkonfirmasi...`;
            reply(akhji);
            satria.sendText(targetNumber, pjText, m);
          }
          break;

        case "delmenfess":
        case "dm":
        case "hapusmenfess":
          {
            if (m.isGroup)
              return reply("Fitur ini tidak dapat digunakan untuk grup!");
            this.menfess = this.menfess ? this.menfess : {};
            let room = Object.values(db.data.menfess).find((room) =>
              room.check(m.sender)
            );
            if (!room) {
              await reply(
                `\`\`\`Kamu Sedang Tidak Berada Di Sesi Menfess, Ketik .menfess untuk memulai\`\`\``
              );
            }
            if (room) {
              reply(`\`\`\`Kamu Telah Meninggalkan Sesi Menfess\`\`\``);
              let other = room.other(m.sender);
              if (other)
                await satria.sendText(
                  other,
                  `\`\`\`Partner Telah Meninggalkan Sesi Menfess\`\`\``,
                  m
                );
              delete db.data.menfess[room.id];
            }
          }
          break;

        /////////////////////////////////////////////////////////////////////////
        case "kick":
          {
            if (!m.isGroup) return reply(mess.groupOnly);
            if (!isBotAdmins) return reply(mess.botAdminRequired);
            if (!isAdmins) return reply(mess.adminOnly);
            let users = m.mentionedJid[0]
              ? m.mentionedJid
              : m.quoted
              ? [m.quoted.sender]
              : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
            await satria
              .groupParticipantsUpdate(m.chat, users, "remove")
              .then((res) => reply(jsonformat(res)))
              .catch((err) => reply(jsonformat(err)));
          }
          break;
        case "add":
          {
            if (!m.isGroup) return reply(mess.groupOnly);
            if (!isBotAdmins) return reply(mess.botAdminRequired);
            if (!isAdmins) return reply(mess.adminOnly);
            let users = m.mentionedJid[0]
              ? m.mentionedJid
              : m.quoted
              ? [m.quoted.sender]
              : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
            await satria
              .groupParticipantsUpdate(m.chat, users, "add")
              .then((res) => reply(jsonformat(res)))
              .catch((err) => reply(jsonformat(err)));
          }
          break;
        case "promote":
          {
            if (!m.isGroup) return reply(mess.groupOnly);
            if (!isBotAdmins) return reply(mess.botAdminRequired);
            if (!isAdmins) return reply(mess.adminOnly);
            let users = m.mentionedJid[0]
              ? m.mentionedJid
              : m.quoted
              ? [m.quoted.sender]
              : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
            await satria
              .groupParticipantsUpdate(m.chat, users, "promote")
              .then((res) => reply(jsonformat(res)))
              .catch((err) => reply(jsonformat(err)));
          }
          break;
        case "demote":
          {
            if (!m.isGroup) return reply(mess.groupOnly);
            if (!isBotAdmins) return reply(mess.botAdminRequired);
            if (!isAdmins) return reply(mess.adminOnly);
            let users = m.mentionedJid[0]
              ? m.mentionedJid
              : m.quoted
              ? [m.quoted.sender]
              : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
            await satria
              .groupParticipantsUpdate(m.chat, users, "demote")
              .then((res) => reply(jsonformat(res)))
              .catch((err) => reply(jsonformat(err)));
          }
          break;
        case "setname":
        case "setsubject":
          {
            if (!m.isGroup) return reply(mess.groupOnly);
            if (!isBotAdmins) return reply(mess.botAdminRequired);
            if (!isAdmins) return reply(mess.adminOnly);
            if (!text) return reply("Text ?");
            await satria
              .groupUpdateSubject(m.chat, text)
              .then((res) => reply(mess.success))
              .catch((err) => reply(jsonformat(err)));
          }
          break;
        case "setdesc":
        case "setdesk":
          {
            if (!m.isGroup) return reply(mess.groupOnly);
            if (!isBotAdmins) return reply(mess.botAdminRequired);
            if (!isAdmins) return reply(mess.adminOnly);
            if (!text) return reply("Text ?");
            await satria
              .groupUpdateDescription(m.chat, text)
              .then((res) => reply(mess.success))
              .catch((err) => reply(jsonformat(err)));
          }
          break;
        case "setppgroup":
        case "setppgrup":
        case "setppgc":
          {
            if (!m.isGroup) return reply(mess.groupOnly);
            if (!isAdmins) return reply(mess.adminOnly);
            if (!isBotAdmins) return reply(mess.botAdminRequired);
            if (!quoted)
              return reply(
                `Kirim/Reply Image Dengan Caption ${prefix + command}`
              );
            if (!/image/.test(mime))
              return reply(
                `Kirim/Reply Image Dengan Caption ${prefix + command}`
              );
            if (/webp/.test(mime))
              return reply(
                `Kirim/Reply Image Dengan Caption ${prefix + command}`
              );
            var mediz = await satria.downloadAndSaveMediaMessage(
              quoted,
              "ppgc.jpeg"
            );
            if (args[0] == `/panjang`) {
              var { img } = await generateProfilePicture(mediz);
              await satria.query({
                tag: "iq",
                attrs: {
                  to: m.chat,
                  type: "set",
                  xmlns: "w:profile:picture",
                },
                content: [
                  {
                    tag: "picture",
                    attrs: { type: "image" },
                    content: img,
                  },
                ],
              });
              fs.unlinkSync(mediz);
              reply(`Sukses`);
            } else {
              var memeg = await satria.updateProfilePicture(m.chat, {
                url: mediz,
              });
              fs.unlinkSync(mediz);
              reply(`Sukses`);
            }
          }
          break;
        case "tagall":
          {
            if (!m.isGroup) return reply(mess.groupOnly);
            if (!isBotAdmins) return reply(mess.botAdminRequired);
            if (!isAdmins) return reply(mess.adminOnly);
            let teks = `══✪〘 *👥 Tag All* 〙✪══

➲ *Pesan : ${q ? q : "kosong"}*\n\n`;
            for (let mem of participants) {
              teks += `⭔ @${mem.id.split("@")[0]}\n`;
            }
            satria.sendMessage(
              m.chat,
              { text: teks, mentions: participants.map((a) => a.id) },
              { quoted: m }
            );
          }
          break;
        case "hidetag":
          {
            if (!m.isGroup) return reply(mess.groupOnly);
            if (!isBotAdmins) return reply(mess.botAdminRequired);
            if (!isAdmins) return reply(mess.adminOnly);
            satria.sendMessage(
              m.chat,
              { text: q ? q : "", mentions: participants.map((a) => a.id) },
              { quoted: m }
            );
          }
          break;
        case "totag":
          {
            if (!m.isGroup) return reply(mess.groupOnly);
            if (!isBotAdmins) return reply(mess.botAdminRequired);
            if (!isAdmins) return reply(mess.adminOnly);
            if (!m.quoted)
              return reply(`Reply pesan dengan caption ${prefix + command}`);
            satria.sendMessage(m.chat, {
              forward: m.quoted.fakeObj,
              mentions: participants.map((a) => a.id),
            });
          }
          break;
        default:
      }
    }
    if (m.chat.endsWith("@s.whatsapp.net") && m.message) {
      this.menfess = this.menfess ? this.menfess : {};
      let room = Object.values(db.data.menfess).find(
        (room) => [room.a, room.b].includes(m.sender) && room.state === "ACTIVE"
      );
      if (room) {
        if (/^.*(dm|deletemenfess|hapusmenfess|batal)/.test(m.text))
          return reply("ketik deletemenfess untuk menghapus sesi.");
        let other = [room.a, room.b].find((user) => user !== m.sender);
        m.copyNForward(
          other,
          true,
          m.quoted && m.quoted.fromMe
            ? {
                contextInfo: {
                  ...m.msg.contextInfo,
                  forwardingScore: 0,
                  isForwarded: true,
                  participant: other,
                },
              }
            : {}
        );
      }
    }
    if (m.chat.endsWith("@s.whatsapp.net") && m.message) {
      this.menfess = this.menfess ? this.menfess : {};
      let room = Object.values(db.data.menfess).find(
        (room) =>
          [room.a, room.b].includes(m.sender) && room.state === "WAITING"
      );
      if (room) {
        if (m.sender == room.b) {
          if (m.text == "Y") {
            reply(
              "Anonymous Chat Telah Tersambung\nKetik .hapusmenfess untuk berhenti"
            );
            room.state = "ACTIVE";
            let other = [room.a, room.b].find((user) => user !== m.sender);
            satria.sendMessage(
              other,
              {
                text: "Penerima Telah Menkonfirmasi, sekarang Anonymous Chat Telah Tersambung",
              },
              { quoted: fkontak }
            );
          }
          if (m.text == "N") {
            reply("oke.");
            let other = [room.a, room.b].find((user) => user !== m.sender);
            satria.sendMessage(
              other,
              { text: "Penerima Menolak Anonymous, NiceTry Ya wkwk 😁👍" },
              { quoted: fkontak }
            );
            delete this.menfess[room.id];
          }
        }
      }
    }
    if (budy.startsWith(".")) {
      if (budy === ".") return;
      let loli = getAllCmd();
      let suggestion = didYouMean(command, loli);
      if (suggestion !== null) {
        reply(
          `Command *${m.text}* Tidak Ada Dalam List Menu\nMungkin Maksud Anda .*${suggestion.correctedWord}*?`
        );
      }
    }
    if (budy.startsWith(">")) {
      if (!isCreator) return reply(mess.ownerOnly);
      const evalAsync = () => {
        return new Promise(async (resolve, reject) => {
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            resolve(evaled);
          } catch (err) {
            reject(err);
          }
        });
      };
      evalAsync()
        .then((result) => reply(result))
        .catch((err) => reply(String(err)));
    }
    if (budy.startsWith("$")) {
      if (!isCreator) return reply(mess.ownerOnly);
      reply("Executing...");
      exec(budy.slice(2), async (err, stdout) => {
        if (err) return reply(`${err}`);
        if (stdout) return reply(stdout);
      });
    }
    if (budy.match("assalamualaikum")) return reply(`waalaikumsalam`);
    if (budy.includes("bot")) {
      satria.sendMessage(
        from,
        {
          audio: {
            url: pickRandom([
              "https://ami.animecharactersdatabase.com/audio/104732/1/104732-1-29.mp4",
              "https://ami.animecharactersdatabase.com/audio/107762/3/107762-3-20.mp4",
              "https://ami.animecharactersdatabase.com/audio/1556/1/1556-1-205.mp4",
              "https://ami.animecharactersdatabase.com/audio/105462/1/105462-1-24.mp4",
            ]),
          },
          mimetype: "audio/mpeg",
          ptt: true,
          waveform: new Uint8Array(64),
        },
        { quoted: m }
      );
    }
    // Auto Dl
    if (/^(https?|ftp):\/\/[^\s\/$.?#][^\s]*$/.test(budy)) {
      if (budy.includes("instagram.com")) {
        if (db.data.users[m.sender].limit === 0)
          return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
        db.data.users[m.sender].limit -= 1; // kurangi 1 limit
        await reply(`Please Wait`);
        const { igdl } = require("btch-downloader");
        const res = await igdl(budy);
        for (let i of res) {
          console.log(i);
          await satria.sendFileFromUrl(from, i.url, "", m);
        }
        await react(pickRandom(["👌", "✅", "✔️"]));
      }
      if (budy.includes("tiktok")) {
        if (db.data.users[m.sender].limit === 0)
          return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
        db.data.users[m.sender].limit -= 1; // kurangi 1 limit
        await reply(`Please Wait`);
        const { ttdl } = require("btch-downloader");
        try {
          await ttdl(budy).then(async (res) => {
            await satria.sendMessage(
              m.chat,
              {
                video: await getBuffer(res.video),
                caption: ``,
                streamingSidecar: new Uint8Array(300),
              },
              { quoted: m }
            );
          });
          await react(pickRandom(["👌", "✅", "✔️"]));
        } catch (error) {
          let url = `https://dlpanda.com/id?url=${budy}&token=G7eRpMaa`;
          let response = await axios.get(url);
          const html = response.data;
          const $ = cheerio.load(html);
          let media = [];
          // Mengekstrak video
          $("div.hero.col-md-12.col-lg-12.pl-0.pr-0 video source").each(
            (index, element) => {
              media.push($(element).attr("src"));
            }
          );
          // Jika tidak ada video, Anda bisa menambahkan penanganan lain sesuai kebutuhan
          if (media.length === 0) {
            let url = `https://dlpanda.com/id?url=${budy}&token=G7eRpMaa`;
            let response = await axios.get(url); // Menggunakan metode 'GET' alih-alih 'HEAD'
            const html = response.data;
            const $ = cheerio.load(html);
            let imgSrc = [];
            let creator = "Jikarinka";
            $("div.col-md-12 > img").each((index, element) => {
              imgSrc.push($(element).attr("src"));
            });
            let fix = imgSrc.map((e) => {
              return { img: e, creator: creator };
            });
            for (let i of fix) {
              satria.sendFileFromUrl(m.chat, i.img, "done", m);
            }
          } else {
            // Mengirim video ke obrolan
            for (let videoSrc of media) {
              satria.sendFileFromUrl(m.chat, videoSrc, "done", m, {
                streamingSidecar: new Uint8Array(300),
              });
            }
          }
          await react(pickRandom(["👌", "✅", "✔️"]));
        }
      }
      if (/https:\/\/on\.souncloud\.com/i.test(budy)) {
        if (db.data.users[m.sender].limit === 0)
          return reply(`limit harian kamu habis, coba lagi besok ya ^_^`);
        db.data.users[m.sender].limit -= 1; // kurangi 1 limit
        await reply(`Please Wait`);
      }
    }

    if (isCmd && budy.toLowerCase() != undefined) {
      if (m.chat.endsWith("broadcast")) return;
      if (m.isBaileys) return;
      if (!budy.toLowerCase()) return;
    }
  } catch (err) {
    const errorMessage = `「 *Server Notif* 」\n\nError : ${util.format(err)}`;
    console.error(errorMessage);
    satria.sendMessage("120363166125652167@g.us", { text: errorMessage });
    reply(`「 *ERROR* 」\n\n${util.format(err)}`);
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.blueBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
