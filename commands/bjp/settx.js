const fs = require('fs');
const Discord = require("discord.js-v12-fix-ratelimit");
const config = require("../../config.json");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    array.sort((a, b) => 0.5 - Math.random());
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var emojitx = [
    config.emojis.taixiu.mot,
    config.emojis.taixiu.hai,
    config.emojis.taixiu.ba,
    config.emojis.taixiu.bon,
    config.emojis.taixiu.nam,
    config.emojis.taixiu.sau
];

module.exports = {
    config: {
        name: "settx",
        description: "",
        aliases: [], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // id role yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : ["915087437305376817"]
    },
    async execute (msg) {
        let args = msg.content.toLowerCase().slice(config.Bot_Info.prefix.length).trim().split(/ +/g).slice(1);
        if(args.length < 3)
        {
            return await msg.lineReply("⚠️ Lỗi !");
        }
        let bjptx = [];
        
        let num1 = args[0];
        let num2 = args[1];
        let num3 = args[2];
  
        if(num1.toLowerCase() == "1") bjptx.push(config.emojis.taixiu.mot);
        else if(num1.toLowerCase() == "2") bjptx.push(config.emojis.taixiu.hai);
        else if(num1.toLowerCase() == "3") bjptx.push(config.emojis.taixiu.ba);
        else if(num1.toLowerCase() == "4") bjptx.push(config.emojis.taixiu.bon);
        else if(num1.toLowerCase() == "5") bjptx.push(config.emojis.taixiu.nam);
        else if(num1.toLowerCase() == "6") bjptx.push(config.emojis.taixiu.sau);
  
        if(num2.toLowerCase() == "1") bjptx.push(config.emojis.taixiu.mot);
        else if(num2.toLowerCase() == "2") bjptx.push(config.emojis.taixiu.hai);
        else if(num2.toLowerCase() == "3") bjptx.push(config.emojis.taixiu.ba);
        else if(num2.toLowerCase() == "4") bjptx.push(config.emojis.taixiu.bon);
        else if(num2.toLowerCase() == "5") bjptx.push(config.emojis.taixiu.nam);
        else if(num2.toLowerCase() == "6") bjptx.push(config.emojis.taixiu.sau);
  
        if(num3.toLowerCase() == "1") bjptx.push(config.emojis.taixiu.mot);
        else if(num3.toLowerCase() == "2") bjptx.push(config.emojis.taixiu.hai);
        else if(num3.toLowerCase() == "3") bjptx.push(config.emojis.taixiu.ba);
        else if(num3.toLowerCase() == "4") bjptx.push(config.emojis.taixiu.bon);
        else if(num3.toLowerCase() == "5") bjptx.push(config.emojis.taixiu.nam);
        else if(num3.toLowerCase() == "6") bjptx.push(config.emojis.taixiu.sau);
        if(bjptx.length != 3)
        {
            return await msg.lineReply("⚠️ Lỗi !");
        }
        let log = await msg.client.channels.cache.find(c => c.id == config.log_channel);
        let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL({dynamic: true, format: 'png'}))
        .addField(`**__SERVER__ :**`, `**${msg.guild.name} (ID : ${msg.guild.id})**`)
        .addField(`**__USER__ :**`, `**${msg.author} (${msg.author.tag}) (ID : ${msg.author.id})**`)
        .addField(`**__MESSAGE__ :**`, msg.content)
        .setTimestamp();
        await log.send(embed);
        shuffleArray(bjptx);
        msg.client.settx = bjptx;
        await msg.lineReply("✔️ DONE !");
    }
}
