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
        name: "tx",
        description: "lắc tài xỉu",
        aliases: ["taixiu"], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: ["918010093264597013"], // id role yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["915133943261593610"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
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
                return await msg.lineReply(`🚫 Bạn cần có các role sau để lắc tài xỉu : ${require_roles.join(', ')}\n       Hiện tại bạn thiếu các role : ${missing_roles.join(', ')}`);
            }
        }
        if(msg.client.settx.length == 0)
        {
            let emoji1;
            let emoji2;
            let emoji3;
            let _6mat = await msg.client.emojis.cache.find(emoji => emoji.id == config.emojis.taixiu["6mattaixiu"]);
            shuffleArray(emojitx);
            let id1 = emojitx[getRandomInt(0, 6)];
            shuffleArray(emojitx);
            let id2 = emojitx[getRandomInt(0, 6)];
            shuffleArray(emojitx);
            let id3 = emojitx[getRandomInt(0, 6)];
            emoji1 = await msg.client.emojis.cache.find(emoji => emoji.id == id1);
            emoji2 = await msg.client.emojis.cache.find(emoji => emoji.id == id2);
            emoji3 = await msg.client.emojis.cache.find(emoji => emoji.id == id3);
    
            let num1, num2, num3;
            if(id1 == config.emojis.taixiu.mot) num1 = 1;
            if(id1 == config.emojis.taixiu.hai) num1 = 2;
            if(id1 == config.emojis.taixiu.ba) num1 = 3;
            if(id1 == config.emojis.taixiu.bon) num1 = 4;
            if(id1 == config.emojis.taixiu.nam) num1 = 5;
            if(id1 == config.emojis.taixiu.sau) num1 = 6;
    
            if(id2 == config.emojis.taixiu.mot) num2 = 1;
            if(id2 == config.emojis.taixiu.hai) num2 = 2;
            if(id2 == config.emojis.taixiu.ba) num2 = 3;
            if(id2 == config.emojis.taixiu.bon) num2 = 4;
            if(id2 == config.emojis.taixiu.nam) num2 = 5;
            if(id2 == config.emojis.taixiu.sau) num2 = 6;
    
            if(id3 == config.emojis.taixiu.mot) num3 = 1;
            if(id3 == config.emojis.taixiu.hai) num3 = 2;
            if(id3 == config.emojis.taixiu.ba) num3 = 3;
            if(id3 == config.emojis.taixiu.bon) num3 = 4;
            if(id3 == config.emojis.taixiu.nam) num3 = 5;
            if(id3 == config.emojis.taixiu.sau) num3 = 6;
    
            let sum = num1 + num2 + num3;
            let text1;
            if(sum <= 10)
            {
              text1 = "Xỉu";
            }
            else
            {
              text1 = "Tài";
            }
            let text2;
            if(sum % 2 == 0)
            {
              text2 = "Chẵn";
            }
            else
            {
              text2 = "Lẻ";
            }
    
            let mymsg = await msg.channel.send(`${_6mat} ${_6mat} ${_6mat}`);
            setTimeout(async function(){
                await mymsg.edit(`${emoji1} ${_6mat} ${_6mat}`);
                setTimeout(async function(){
                    await mymsg.edit(`${emoji1} ${emoji2} ${_6mat}`);
                    setTimeout(async function(){
                        await mymsg.edit(`${emoji1} ${emoji2} ${emoji3}`);
                        await msg.channel.send("**Kết quả : \n" + String(sum) + " • " + text1 + " • " + text2 + "**");
                    }, 2500);
                }, 2500);
            }, 2500);
        }
        else
        {
            let emoji1;
            let emoji2;
            let emoji3;
            let _6mat = await msg.client.emojis.cache.find(emoji => emoji.id == config.emojis.taixiu["6mattaixiu"]);
            let id1 = msg.client.settx[0];
            let id2 = msg.client.settx[1];
            let id3 = msg.client.settx[2];
            msg.client.settx = [];
            emoji1 = await msg.client.emojis.cache.find(emoji => emoji.id == id1);
            emoji2 = await msg.client.emojis.cache.find(emoji => emoji.id == id2);
            emoji3 = await msg.client.emojis.cache.find(emoji => emoji.id == id3);
    
            let num1, num2, num3;
            if(id1 == config.emojis.taixiu.mot) num1 = 1;
            if(id1 == config.emojis.taixiu.hai) num1 = 2;
            if(id1 == config.emojis.taixiu.ba) num1 = 3;
            if(id1 == config.emojis.taixiu.bon) num1 = 4;
            if(id1 == config.emojis.taixiu.nam) num1 = 5;
            if(id1 == config.emojis.taixiu.sau) num1 = 6;
    
            if(id2 == config.emojis.taixiu.mot) num2 = 1;
            if(id2 == config.emojis.taixiu.hai) num2 = 2;
            if(id2 == config.emojis.taixiu.ba) num2 = 3;
            if(id2 == config.emojis.taixiu.bon) num2 = 4;
            if(id2 == config.emojis.taixiu.nam) num2 = 5;
            if(id2 == config.emojis.taixiu.sau) num2 = 6;
    
            if(id3 == config.emojis.taixiu.mot) num3 = 1;
            if(id3 == config.emojis.taixiu.hai) num3 = 2;
            if(id3 == config.emojis.taixiu.ba) num3 = 3;
            if(id3 == config.emojis.taixiu.bon) num3 = 4;
            if(id3 == config.emojis.taixiu.nam) num3 = 5;
            if(id3 == config.emojis.taixiu.sau) num3 = 6;
    
            let sum = num1 + num2 + num3;
            let text1;
            if(sum <= 10)
            {
              text1 = "Xỉu";
            }
            else
            {
              text1 = "Tài";
            }
            let text2;
            if(sum % 2 == 0)
            {
              text2 = "Chẵn";
            }
            else
            {
              text2 = "Lẻ";
            }
    
            let mymsg = await msg.channel.send(`${_6mat} ${_6mat} ${_6mat}`);
            setTimeout(async function(){
                await mymsg.edit(`${emoji1} ${_6mat} ${_6mat}`);
                setTimeout(async function(){
                    await mymsg.edit(`${emoji1} ${emoji2} ${_6mat}`);
                    setTimeout(async function(){
                        await mymsg.edit(`${emoji1} ${emoji2} ${emoji3}`);
                        await msg.channel.send("**Kết quả : \n" + String(sum) + " • " + text1 + " • " + text2 + "**");
                    }, 2500);
                }, 2500);
            }, 2500);
        }
    }
}
