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
        name: "bc",
        description: "lắc bầu cua",
        aliases: ["baucua"], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: ["918010093264597013"], // id role yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["915107284395376670"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        if(msg.author.id != config.Bot_Info.authorid || msg.guild.id == "915087437305376817")
        {
            let require_roles = [];
            let missing_roles = [];
            let author_roles = msg.member.roles.cache.array();
            for(let i = 0; i < this.config.require_roles.length; i++)
            {
                let role = await msg.guild.roles.cache.find(r => r.id == this.config.require_roles[i]);
                require_roles.push(`**${role.name}**`);
                let lmao = author_roles.find(r => r.id == this.config.require_roles[i]);
                if(!lmao)
                {
                    missing_roles.push(`**${role.name}**`)
                }
            }
            if(missing_roles.length > 0)
            {
                return await msg.lineReply(`🚫 Bạn cần có các role sau để lắc bầu cua : ${require_roles.join(', ')}\n       Hiện tại bạn thiếu các role : ${missing_roles.join(', ')}`);
            }
        }
        if(msg.client.setbc.length == 0)
        {
            let emoji1;
            let emoji2;
            let emoji3;
            let textanimal1;
            let textanimal2;
            let textanimal3;
            let _6animal = await msg.client.emojis.cache.find(emoji => emoji.id == config.emojis.baucua["6matbaucua"]);
            shuffleArray(emojibc);
            let id1 = emojibc[getRandomInt(0, 6)];
            shuffleArray(emojibc);
            let id2 = emojibc[getRandomInt(0, 6)];
            shuffleArray(emojibc);
            let id3 = emojibc[getRandomInt(0, 6)];
            emoji1 = await msg.client.emojis.cache.find(emoji => emoji.id == id1);
            emoji2 = await msg.client.emojis.cache.find(emoji => emoji.id == id2);
            emoji3 = await msg.client.emojis.cache.find(emoji => emoji.id == id3);

            if(id1 == config.emojis.baucua.tom) textanimal1 = "Tôm";
            if(id1 == config.emojis.baucua.bau) textanimal1 = "Bầu";
            if(id1 == config.emojis.baucua.nai) textanimal1 = "Nai";
            if(id1 == config.emojis.baucua.ga) textanimal1 = "Gà";
            if(id1 == config.emojis.baucua.ca) textanimal1 = "Cá";
            if(id1 == config.emojis.baucua.cua) textanimal1 = "Cua";

            if(id2 == config.emojis.baucua.tom) textanimal2 = "Tôm";
            if(id2 == config.emojis.baucua.bau) textanimal2 = "Bầu";
            if(id2 == config.emojis.baucua.nai) textanimal2 = "Nai";
            if(id2 == config.emojis.baucua.ga) textanimal2 = "Gà";
            if(id2 == config.emojis.baucua.ca) textanimal2 = "Cá";
            if(id2 == config.emojis.baucua.cua) textanimal2 = "Cua";

            if(id3 == config.emojis.baucua.tom) textanimal3 = "Tôm";
            if(id3 == config.emojis.baucua.bau) textanimal3 = "Bầu";
            if(id3 == config.emojis.baucua.nai) textanimal3 = "Nai";
            if(id3 == config.emojis.baucua.ga) textanimal3 = "Gà";
            if(id3 == config.emojis.baucua.ca) textanimal3 = "Cá";
            if(id3 == config.emojis.baucua.cua) textanimal3 = "Cua";

            let mymsg = await msg.channel.send(`${_6animal} ${_6animal} ${_6animal}`);
            setTimeout(async function(){
                await mymsg.edit(`${emoji1} ${_6animal} ${_6animal}`);
                setTimeout(async function(){
                    await mymsg.edit(`${emoji1} ${emoji2} ${_6animal}`);
                    setTimeout(async function(){
                        await mymsg.edit(`${emoji1} ${emoji2} ${emoji3}`);
                        await msg.channel.send("**Kết quả : \n" + textanimal1 + " • " + textanimal2 + " • " + textanimal3 + "**");
                    }, 2500);
                }, 2500);
            }, 2500);
        }
        else
        {
            let emoji1;
            let emoji2;
            let emoji3;
            let textanimal1;
            let textanimal2;
            let textanimal3;
            let _6animal = await msg.client.emojis.cache.find(emoji => emoji.id == config.emojis.baucua["6matbaucua"]);
            let id1 = msg.client.setbc[0];
            let id2 = msg.client.setbc[1];
            let id3 = msg.client.setbc[2];
            msg.client.setbc = [];
            emoji1 = await msg.client.emojis.cache.find(emoji => emoji.id == id1);
            emoji2 = await msg.client.emojis.cache.find(emoji => emoji.id == id2);
            emoji3 = await msg.client.emojis.cache.find(emoji => emoji.id == id3);

            if(id1 == config.emojis.baucua.tom) textanimal1 = "Tôm";
            if(id1 == config.emojis.baucua.bau) textanimal1 = "Bầu";
            if(id1 == config.emojis.baucua.nai) textanimal1 = "Nai";
            if(id1 == config.emojis.baucua.ga) textanimal1 = "Gà";
            if(id1 == config.emojis.baucua.ca) textanimal1 = "Cá";
            if(id1 == config.emojis.baucua.cua) textanimal1 = "Cua";

            if(id2 == config.emojis.baucua.tom) textanimal2 = "Tôm";
            if(id2 == config.emojis.baucua.bau) textanimal2 = "Bầu";
            if(id2 == config.emojis.baucua.nai) textanimal2 = "Nai";
            if(id2 == config.emojis.baucua.ga) textanimal2 = "Gà";
            if(id2 == config.emojis.baucua.ca) textanimal2 = "Cá";
            if(id2 == config.emojis.baucua.cua) textanimal2 = "Cua";

            if(id3 == config.emojis.baucua.tom) textanimal3 = "Tôm";
            if(id3 == config.emojis.baucua.bau) textanimal3 = "Bầu";
            if(id3 == config.emojis.baucua.nai) textanimal3 = "Nai";
            if(id3 == config.emojis.baucua.ga) textanimal3 = "Gà";
            if(id3 == config.emojis.baucua.ca) textanimal3 = "Cá";
            if(id3 == config.emojis.baucua.cua) textanimal3 = "Cua";

            let mymsg = await msg.channel.send(`${_6animal} ${_6animal} ${_6animal}`);
            setTimeout(async function(){
                await mymsg.edit(`${emoji1} ${_6animal} ${_6animal}`);
                setTimeout(async function(){
                    await mymsg.edit(`${emoji1} ${emoji2} ${_6animal}`);
                    setTimeout(async function(){
                        await mymsg.edit(`${emoji1} ${emoji2} ${emoji3}`);
                        await msg.channel.send("**Kết quả : \n" + textanimal1 + " • " + textanimal2 + " • " + textanimal3 + "**");
                    }, 2500);
                }, 2500);
            }, 2500);
        }
    }
}
