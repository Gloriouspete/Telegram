const {
  bot
} = require("../txt.js")
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
const Price = async (callbackQuery, chatId, messageId) => {
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
    await bot.sendMessage(chatId, '0x8D5583F20f0e066E8993e9ea2f1FE3ad6eCEb94C', options); // Replace 'ADDRESS_FOR_200_USDT' with the actual address
  } else if (callbackQuery.data === 'fivehundred_click') {
    bot.answerCallbackQuery(callbackQuery.id);
    await bot.sendMessage(chatId, `*Invest 500 USDT, get 5000 USDT*

      Send the exact 500 USDT to this address choosing *BEP20* as the preferred network:`, {
        reply_to_message_id: messageId,
        parse_mode: 'MarkdownV2'
      });
    await bot.sendMessage(chatId, '0x8D5583F20f0e066E8993e9ea2f1FE3ad6eCEb94C', options); // Replace 'ADDRESS_FOR_500_USDT' with the actual address
  } else if (callbackQuery.data === 'thousand_click') {
    bot.answerCallbackQuery(callbackQuery.id);
    await bot.sendMessage(chatId, `*Invest 1000 USDT, get 10000 USDT*

      Send the exact 1000 USDT to this address choosing *BEP20* as the preferred network:`, {
        reply_to_message_id: messageId,
        parse_mode: 'MarkdownV2'
      });
    await bot.sendMessage(chatId, '0x8D5583F20f0e066E8993e9ea2f1FE3ad6eCEb94C', options); // Replace 'ADDRESS_FOR_1000_USDT' with the actual address
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
};


module.exports = {
  Price
}