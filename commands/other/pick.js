const fs = require('fs');
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
        name: "pick",
        description: "lựa chọn",
        aliases: [], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // id role yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        let args = msg.content.slice(config.Bot_Info.prefix.length).trim().split(/ +/g).slice(1);
        if(args.length < 1)
        {
            return await msg.lineReply(`⚠️ Bạn cần nhập các lựa chọn, chia cách nhau bởi dấu ", " ví dụ \`${config.Bot_Info.prefix} pick 1, 2, 3\``);
        }
        args = args.join(' ');
        args = args.split(', ');
        await msg.lineReply(`Tôi chọn **${args[getRandomInt(0, args.length)]}**`);
    }
}
