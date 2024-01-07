const TelegramBot = require('node-telegram-bot-api')
const token ='6051844104:AAG4xbaLlOO633ZuoiMpTqByIWoMm532wzg'
const bot = new TelegramBot(token, {
  polling: true
});

module.exports = {
  bot
}