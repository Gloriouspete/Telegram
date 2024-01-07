const options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{
        text: '📈 Invest! 📊🚀',
        // Callback data when the button is clicked
        callback_data: 'invest_click'
      }]
    ]
  })
};

const severaloptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{
        text: ' 💼💹 Invest 10 USDT, get 100 USDT 💹💼',
        callback_data: 'ten_click'
      }],
      [{
        text: ' 💼💹 Invest 50 USDT, get 500 USDT 💹💼',
        callback_data: 'fifty_click'
      }],
      [{
        text: ' 💼💹 Invest 100 USDT, get 1000 USDT 💹💼',
        callback_data: 'hundred_click'
      }],
      [{
        text: ' 💼💹 Invest 200 USDT, get 2000 USDT 💹💼',
        callback_data: 'twohundred_click'
      }],
      [{
        text: ' 💼💹 Invest 500 USDT, get 5000 USDT 💹💼',
        callback_data: 'fivehundred_click'
      }],
      [{
        text: ' 💼💹 Invest 1000 USDT, get 10000 USDT 💹💼',
        callback_data: 'thousand_click'
      }],
      [{
        text: ' 💼💹 Invest 10000 USDT, get 100,000 USDT 💹💼',
        callback_data: 'tenthousand_click'
      }],
      [{
        text: ' 💼💹 Invest 100,000 USDT, get 1,000,000 USDT 💹💼',
        callback_data: 'hundredthousand_click'
      }]
    ]
  })
};


module.exports = {
  options,
  severaloptions
};