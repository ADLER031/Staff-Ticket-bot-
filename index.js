const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});

const enmap = require('enmap');

const {token, prefix} = require('./config.json');

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const hook = new Discord.WebhookClient('825481147340423199', '9VRipWSf2TG7DuwJ2B3FfBylB63cOnEk3bL-pOygc8aMlIukJMr4GMYZBuvwBgDRj-zG');

const memberUpdater = require('./commands/memberupdate')

const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(` Bot ${client.user.username} Is Now OnLine !!! `);
    console.log(client.commands);
    client.user.setPresence({
        status: 'online',
        activity: {
            name:"GroveStreet",
            type: "LISTENING"
        }
    })
    hook.send('Mam Hanooz Zendam Koskesha :joy: :middle_finger:')
    memberUpdater(client);
});


client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '𝐆𝐒 𝐌𝐞𝐦𝐛𝐞𝐫𝐒𝐡𝐢𝐩');
 
    guildMember.roles.add(welcomeRole);

	const embed = new Discord.MessageEmbed()

		.setColor('#00ff00')
		.setTitle('GroveStreet')
		.setURL('https://discord.gg/fbJdYv8RZ3')
		.addField('Welcome to Our Channel \n ', `\n Salam <@${guildMember.user.id}> Khosh oomadi be in Channel Omidvaram Lahazat Khoobi ro dashte bashi . :red_circle: **Yadet nare ke Hatam Ghavanin ro az Channel <#806465998995324958> Bekhooni .** :red_circle:` , true)
		.setThumbnail('https://cdn.discordapp.com/attachments/806465998995324967/823140887055695892/512.png')
		.setTimestamp()
		.setFooter('Created By ADLER', 'https://cdn.discordapp.com/avatars/809903662947893319/2a6608841f6b1dedd8e6f8638872b923.png?size=1024');

    guildMember.guild.channels.cache.get('806465998571307036').send(embed);
});


client.on('guildMemberRemove', guildMember =>{

	const embed = new Discord.MessageEmbed()

	.setColor('#00ff00')
	.setTitle('GroveStreet Clan LeaveLog')
	.setURL('https://discord.gg/fbJdYv8RZ3')
	.addField(' Leaved ', `\n **In  <@${guildMember.user.id}> Chaghal az Channel Leave Dad . :| \n Khob Siktireshe**` , true)
	.setThumbnail(guildMember.user.displayAvatarURL)
	.setTimestamp()
	.setFooter('Created By ADLER', 'https://cdn.discordapp.com/avatars/809903662947893319/2a6608841f6b1dedd8e6f8638872b923.png?size=1024');

    guildMember.guild.channels.cache.get('806465998571307037').send(embed);
});


//-------------------------------  SIMPLE COMMAND
client.on('message', message => {
	
	
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
    
    
	if(command == 'memberupdate'){
		
        client.commands.get('memberupdate').execute(message, args, Discord);
    }else if(command == 'mutegm'){
		
        client.commands.get('mutegm').execute(message, args, Discord);
    }else if(command == 'unmutegm'){
		
        client.commands.get('unmutegm').execute(message, args, Discord);
    }else if(command == 'embed'){
		
        client.commands.get('embed').execute(message, args, Discord);
    }else if(command == 'tickets'){
		
        client.commands.get('tickets').execute(message, args, Discord);
    }else if(command == 'unmute'){
		
        client.commands.get('unmute').execute(message, args, Discord);
    }else if(command == 'mute'){
		
        client.commands.get('mute').execute(message, args, Discord);
    }else if(command == 'play'){
		
        client.commands.get('play').execute(message, args, Discord);
    }else if (command === 'yusef'){
        message.channel.send('basaniii!!!!');
    } else if (command == 'dick'){
        message.channel.send('Too koon yusef!!!!');
    } else if (command == 'hajmehdi'){
        message.channel.send('Stotoon GANG!!!!!');
    } else if (command == 'invite'){
        message.channel.send('https://discord.gg/9w23Gnp');
    } else if (command == 'amirmafa'){
        message.channel.send('emmmmmmmmmmmm areeeeeeeeeeeeeeeeeeeeeeeee');
    } else if (command == 'misagh'){
        message.channel.send('https://cdn.discordapp.com/attachments/706986527304974427/745244018316935208/Untitled.png')
    } else if(command == 'randy'){
        message.channel.send('https://cdn.discordapp.com/attachments/725081980634660975/744928433167007824/download.jpg');
    } else if(command == 'parsa'){
        message.channel.send('Vase Bi janbe ha cmd nadarim :)');
    } else if(command == 'aa'){
        message.channel.send('@everyone');
    } else if(command == 'profile'){
        message.channel.send('https://cdn.discordapp.com/attachments/716310030907080764/742269226160750622/Untitled-2.png')
    } else if(command == 'badge'){
        message.channel.send('GS | your name');
    } else if(command == 'irpixel'){
        message.channel.send('https://discord.gg/d3APJER');
    } else if(command == 'ping'){
        message.channel.send('pinget ride omid nadashte bash.jahromi pedar sag!');
    } else if(command == 'matintnt'){
        message.channel.send('ooofffff che dafiiii');
    } else if(command == 'mj'){
        message.channel.send(':man_running_tone1: RUSH BUSHEHRI OYYYYYYYYYYY!');
    } else if(command == 'bababozorg'){
        message.channel.send('Bokon mr.nakh hahaha');
    } else if(command == 'adler'){
        message.channel.send('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5oI8IHmK1EzK5HnY3Xn4eh10BfP19R3E7gQ&usqp=CAU');
    } else if(command == 'redline'){
        message.channel.send('https://discord.gg/dMJDg6z');
    } else if(command == 'irrp'){
        message.channel.send('https://discord.gg/irrp');
    }

});


client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command == "ticket-setup") {
        // ticket-setup #channel

        let channel = message.mentions.channels.first();
        if(!channel) return message.reply("Usage: `//ticket-setup #channel`");

        let sent = await channel.send(new Discord.MessageEmbed()
            .setTitle("GS Ticket System")
            .setDescription("Baraye Sakht Ticket Rooye Reaction Click konid")
            .setFooter('Created By ADLER#2361' ,'https://cdn.discordapp.com/avatars/809903662947893319/2a6608841f6b1dedd8e6f8638872b923.webp')
            .setColor("00ff00")
        );

        sent.react('🎫');
        settings.set(`${message.guild.id}-ticket`, sent.id);

        message.channel.send("Ticket System Setup Done!")
    }

    if(command == "close") {
        if(!message.channel.name.includes("ticket-")) return message.channel.send("You cannot use that here!")
        message.channel.delete();
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();

    if(user.bot) return;

    let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);

    if(!ticketid) return;

    if(reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Welcome to your ticket!").setDescription("We will be with you shortly").setColor("00ff00"))
        })
    }
});


client.on('message', async message => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	try {
		if(commandName == "ban" || commandName == "userinfo" || commandName == "kick") {
			command.execute(message, client);
		}
	} catch (error) {
		console.error(error);
		message.reply('Ridi Dadach Ab ham Ghate :| , Boro Bebin Kojaro Ridi Toosh . \n **Bia Inam Aftabe :potable_water: **');
	}
});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    
 
    switch (args[0]) { 
        case 'help':
            const Embed = new Discord.MessageEmbed()
            .setTitle("GroveStreet Helper ")
            .setColor('#00ff00')
            .addField('Salam', `Vaght Bekheyr  <@${message.author.id}> \n **Command Haye Man :** \n **//userinfo** : Baraye Gereftan Moshakhasat profile . \n *Doost Aziz Bot Aknoon Darhal Test va Barresi Hast .*` , true)
 
            message.author.send(Embed);
        break;
    }
 
 
});

client.login(token);