const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function () {
    bot.user.setGame("Embeter le patron");
    console.log("Connected");
});

bot.login("process.env.TOKEN")



bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: /n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
		console.log("Commande Salut éffectué");
    }

    if (message.content === "ping"){
        message.reply("pong")
        console.log("ping pong!")
    }
});
