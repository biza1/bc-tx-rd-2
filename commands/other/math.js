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
        name: "math",
        description: "tính toán",
        aliases: ["calc"], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // id role yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        let args = msg.content.slice(config.Bot_Info.prefix.length).trim().split(/ +/g).slice(1);
        args = args.join(' ');
        let x;
        try
        {
            await eval(`x = ${args}`);
            await msg.lineReply(`**__Kết quả__ : ${args} = ${x}**`);
        }
        catch
        {
            await msg.lineReply(`⚠️ **Phép tính không hợp lệ**`);
        }
    }
}
