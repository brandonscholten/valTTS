const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log('I am ready!');
})

client.on('message', message => {
    if (message.author.id === 'redacted') {
        var content = message.content;
        message.channel.send(content,{
            tts: true
        })
    }
})

client.login('redacted');
