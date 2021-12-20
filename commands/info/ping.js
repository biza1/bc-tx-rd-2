const fs = require('fs');
const Discord = require("discord.js-v12-fix-ratelimit");
const config = require("../../config.json");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {
    config: {
        name: "ping",
        description: "pong :>",
        aliases: [], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // role tên yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        msg.channel.send("**Pinging...**").then(async (m) => {
            let ping = m.createdTimestamp - msg.createdTimestamp;
            const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`🏓Độ trễ là ${ping}ms\n\n💓Độ trễ API là ${Math.round(msg.client.ws.ping)}ms`)
            await m.edit({content: "", embed: embed});
        })
    }
}
