const fs = require('fs');
const config = require("../../config.json");
const { MessageEmbed } = require('discord.js-v12-fix-ratelimit');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {
    config: {
        name: "eval",
        description: "",
        aliases: [], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // id role yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        if(msg.author.id == config.Bot_Info.authorid)
        {
            let args = msg.content.slice(config.Bot_Info.prefix.length).trim();
            let code = args.substring(4);
            try
            {
                eval(`(async () => {try{${code}}catch(err){console.log(err)}})()`);
            }
            catch(err) {console.log(err)}
        }
    }
}
