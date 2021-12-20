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
        name: "rd",
        description: "random số",
        aliases: ["random"], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // id role yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["915134032633790484", "921143802239025252"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        let args = msg.content.slice(config.Bot_Info.prefix.length).trim().split(/ +/g).slice(1);
        if(args.length == 0)
            return await msg.lineReply(`❌ Vui lòng cung cấp một số hợp lệ`);
        let amount = args[0];

        if (!amount || isNaN(amount) || isNaN(Number(amount)))
            return await msg.lineReply("❌ Vui lòng cung cấp một số hợp lệ");

        if(Number(amount) < 0)
            return await msg.lineReply(`❌ Vui lòng cung cấp một số nguyên dương`);

        if(!Number.isInteger(Number(amount)))
            return await msg.lineReply(`❌ Vui lòng cung cấp một số nguyên dương`);

        amount = Number(amount);
        let value = getRandomInt(0, amount + 1);
        if(msg.client.setrd.has(msg.author.id))
        {
            value = msg.client.setrd.get(msg.author.id);
            msg.client.setrd.delete(msg.author.id);
        }
        await msg.lineReply(`${msg.author}, số của bạn là **__${value}__**`);
    }
}
