const fs = require('fs');
const Discord = require("discord.js-v12-fix-ratelimit");
const config = require("../../config.json");

async function SecondsToString(TIME)
{
    let second = TIME % 60;
    let TIME2 = (TIME - second)/60;
    let minute = TIME2 % 60;
    let TIME3 = (TIME2 - minute)/60;
    let hour = TIME3 % 24;
    let day = (TIME3 - hour)/24;
    let mystr = ``;
    if(day > 0){mystr = `${mystr}${day} ngày `;}
    if(hour > 0){mystr = `${mystr}${hour} giờ `;}
    if(minute > 0){mystr = `${mystr}${minute} phút `;}
    if(second >= 0){mystr = `${mystr}${second} giây`;}
    return mystr;
}

module.exports = {
    config: {
        name: "help",
        description: "Bạn cần trợ giúp ? hãy dùng command này :v",
        aliases: [], // Để thêm bí danh tùy chỉnh, chỉ cần nhập ["alias1", "alias2"].
        require_roles: [], // role tên yêu cầu
        require_perms: [], // permission yêu cầu
        only_channels: ["all"], // id của channel, lệnh này chỉ có thể dùng ở channel đó
        exclude_guilds : []
    },
    async execute (msg) {
        let args = msg.content.slice(config.Bot_Info.prefix.length).trim().split(/ +/g).slice(1);
 
        let guildown = await msg.client.guilds.cache.find(u => u.id == config.Bot_Info.serverown);
        const helpembed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setAuthor(msg.client.user.tag, msg.client.user.displayAvatarURL({dynamic: true, format: 'png'}))
        .setThumbnail(msg.guild.iconURL({dynamic: true, format: 'png'}))
        .setTitle(`\`${msg.client.user.tag}\` được sở hữu bỏi server \`${guildown.name}\`\nPrefix của bot là \`${config.Bot_Info.prefix}\``)
        .setDescription(`**__TẤT CẢ CÁC LỆNH :__**`)
        .setTimestamp()
        .setFooter(`Được yêu cầu bởi ${msg.author.tag}`);
            
        var category = ["gambling", "info", "other"];
            
        category.forEach(async function (subdir){
            let str = [];
            let commandFiles = fs.readdirSync(`./commands/${subdir}`).filter(file => file.endsWith(".js"));
            for(const file of commandFiles)
            {
                let aliases = [];
                const command = require(`../${subdir}/${file}`);
                for(const alias of command.config.aliases)
                {
                    aliases.push(`\`${alias}\``);
                }
                let lol = ``;
                if(aliases.length > 0)
                {
                    lol = ` (${aliases.join(', ')})`;
                }
                str.push(`\`${command.config.name}\`${lol}`);
            }
            helpembed.addField(subdir.toUpperCase(), str.join(', '))
        })
        await msg.channel.send({embed: helpembed});
    }
}
