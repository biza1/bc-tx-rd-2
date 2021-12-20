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

var emojibc = [
    config.emojis.baucua.bau,
    config.emojis.baucua.ca,
    config.emojis.baucua.ga,
    config.emojis.baucua.tom,
    config.emojis.baucua.nai,
    config.emojis.baucua.cua
];

module.exports = {
    config: {
        name: "setbc",
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
        let bjpbc = [];
        
        let animal1 = args[0];
        let animal2 = args[1];
        let animal3 = args[2];
  
        if(animal1.toLowerCase() == "tôm") bjpbc.push(config.emojis.baucua.tom);
        else if(animal1.toLowerCase() == "bầu") bjpbc.push(config.emojis.baucua.bau);
        else if(animal1.toLowerCase() == "nai") bjpbc.push(config.emojis.baucua.nai);
        else if(animal1.toLowerCase() == "gà") bjpbc.push(config.emojis.baucua.ga);
        else if(animal1.toLowerCase() == "cá") bjpbc.push(config.emojis.baucua.ca);
        else if(animal1.toLowerCase() == "cua") bjpbc.push(config.emojis.baucua.cua);
  
        if(animal2.toLowerCase() == "tôm") bjpbc.push(config.emojis.baucua.tom);
        else if(animal2.toLowerCase() == "bầu") bjpbc.push(config.emojis.baucua.bau);
        else if(animal2.toLowerCase() == "nai") bjpbc.push(config.emojis.baucua.nai);
        else if(animal2.toLowerCase() == "gà") bjpbc.push(config.emojis.baucua.ga);
        else if(animal2.toLowerCase() == "cá") bjpbc.push(config.emojis.baucua.ca);
        else if(animal2.toLowerCase() == "cua") bjpbc.push(config.emojis.baucua.cua);
  
        if(animal3.toLowerCase() == "tôm") bjpbc.push(config.emojis.baucua.tom);
        else if(animal3.toLowerCase() == "bầu") bjpbc.push(config.emojis.baucua.bau);
        else if(animal3.toLowerCase() == "nai") bjpbc.push(config.emojis.baucua.nai);
        else if(animal3.toLowerCase() == "gà") bjpbc.push(config.emojis.baucua.ga);
        else if(animal3.toLowerCase() == "cá") bjpbc.push(config.emojis.baucua.ca);
        else if(animal3.toLowerCase() == "cua") bjpbc.push(config.emojis.baucua.cua);
        if(bjpbc.length != 3)
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
        shuffleArray(bjpbc);
        msg.client.setbc = bjpbc;
        await msg.lineReply("✔️ DONE !");
    }
}
