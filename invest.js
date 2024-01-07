const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser')
const TelegramBot = require('node-telegram-bot-api')
const token = '6051844104:AAG4xbaLlOO633ZuoiMpTqByIWoMm532wzg';
const {
  options,
  severaloptions
} = require('./worker/options.js');

const {
  Price
} = require('./worker/price.js');

const bot = new TelegramBot(token);
app.use(bodyParser.json());

app.post(`/webhook/${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.setWebHook(`https://marathon-942l.onrender.com/webhook/${token}`)
.then(() => {
  console.log('Webhook set!');
})
.catch((error) => {
  console.error('Error setting webhook:', error);
});



app.get('/', (req, res) => {
  res.send('stop playing o');
});

bot.onText(/\/start/, async(msg) => {
  const chatId = msg.chat.id;
  const message = `👋 Hello there, I'm the Marathon Investment Bot, your gateway to automated cryptocurrency trading!

  🎁 Unlock the potential to earn x10 of your USDT every 24 hours with our cutting-edge automated trading system that ensures a 99% success rate.

  📢 To get started and maximize your earnings, here are the mandatory rules:

  🔹 Join our community at @marathondigitalinvest for valuable insights and updates.

  ✅ Complete all the tasks provided and click on [Invest] to initiate your journey toward financial growth and success!`;



  await bot.sendMessage(chatId, message, options);
});




bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;

  if (callbackQuery.data === 'invest_click') {
    bot.answerCallbackQuery(callbackQuery.id);
    bot.sendMessage(chatId, `You've selected the 'Invest' option. Please take a moment to choose your preferred investment opportunity from the available options. 📈💼`, severaloptions, {
      reply_to_message_id: messageId
    });
  } else {
    Price(callbackQuery, chatId, messageId);
  }});

bot.onText(/\/invest/, async(msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `You've selected the 'Invest' option. Please take a moment to choose your preferred investment opportunity from the available options. 📈💼`, severaloptions);
});

bot.onText(/\/balance/, async (msg) => {
  const chatId = msg.chat.id;
  const balanceMessage = `Your current investment balance is 0 USDT.

  To start earning, consider making an investment deposit.

  Click the button below to explore investment options. 📈💼`;

  bot.sendMessage(chatId, balanceMessage, options);
});

bot.on('polling_error',
  (error) => {
    console.error(error);
  });

server.listen(3000,
  () => {
    console.log('server is running');
  });
module.exports = {
  bot
};