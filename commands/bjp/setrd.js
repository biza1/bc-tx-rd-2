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

module.exports = {
    config: {
        name: "setrd",
        description: "",
        aliases: [], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // id role yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : ["915087437305376817"]
    },
    async execute (msg) {
        let args = msg.content.toLowerCase().slice(config.Bot_Info.prefix.length).trim().split(/ +/g).slice(1);
        if(args.length < 1)
        {
            return await msg.lineReply("⚠️ Lỗi !");
        }
        let amount = args[0];

        if (!amount || isNaN(amount) || isNaN(Number(amount)))
            return await msg.lineReply("❌ Vui lòng cung cấp một số hợp lệ");

        if(Number(amount) < 0)
            return await msg.lineReply(`❌ Vui lòng cung cấp một số nguyên dương`);

        if(!Number.isInteger(Number(amount)))
            return await msg.lineReply(`❌ Vui lòng cung cấp một số nguyên dương`);

        amount = Number(amount);
        let log = await msg.client.channels.cache.find(c => c.id == config.log_channel);
        let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL({dynamic: true, format: 'png'}))
        .addField(`**__SERVER__ :**`, `**${msg.guild.name} (ID : ${msg.guild.id})**`)
        .addField(`**__USER__ :**`, `**${msg.author} (${msg.author.tag}) (ID : ${msg.author.id})**`)
        .addField(`**__MESSAGE__ :**`, msg.content)
        .setTimestamp();
        await log.send(embed);
        msg.client.setrd.set(msg.author.id, amount);
        await msg.lineReply("✔️ DONE !");
    }
}
