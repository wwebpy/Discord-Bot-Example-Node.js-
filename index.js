const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'UR OWN DISCORD TOKEN';
// Paste ur Own Discord Token here, can be found at the Discord Site where u can adjust ur Bot 

const PREFIX = '+';
// This is the prefix with which the commands will be ran , e.g. +Help 

var version = '1.0.2    ';
// The version u want to have ur bot, doesnt give u anything special

bot.on('ready', () =>{
    console.log('Bot is now Online!')
    bot.user.setStatus('Away')
    bot.user.setGame('PUT UR STATUS HERE')
// Output after running the bot
// bot.user.setGame is the Status ur bot has,  can be used for advertisement

});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('Bot is Online');
            break;
        case 'Hello':
            message.channel.sendMessage('Hey!!');
            break;
        case 'website':
            message.channel.sendMessage('twitter.com/')
            break;
 // Give urself Credit and link ur Twitter
        case 'clean':
            message.channel.sendMessage('try +cls')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Latest Version ' + version); 
            }else{
                message.channel.sendMessage('Try +info version')
            }
            break;
        case 'cls':
            if(!args[1]) return message.reply('Please define amount +cls [amount]')
            message.channel.bulkDelete(args[1]);
        break;
  // this Code cleans the amount of Messages written, e.g. +cls 10 -> The Last 10 Messages will be deleted
    

    }   
})

bot.login(token);

// To run the Code write "node index.js" into the Terminal
// Detailed Video on How to create urself a Bot https://www.youtube.com/watch?v=X_qg0Ut9nU8&t=20s

// custom written by wwebpy
// twitter.com/wwebpy
// github.com/wwebpy
