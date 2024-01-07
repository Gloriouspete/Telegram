const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const fs = require('fs')
const pdf = require('pdf-parse');
require('dotenv').config()
const {getAudio} = require('./say.js')
const {gpt } = require('./api.js')
const token = process.env.BOT_TOKEN;
const TelegramBot = require('node-telegram-bot-api')
app.get('/',(req,res) => {
  res.send('stop playing')
})
const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello! Welcome to your Telegram Bot.');
});

const audio = async(chatId,stream) => {
 console.log(stream, 'stop playing abeg')
const audioBuffer = await Buffer.from(stream, 'base64');

const fileName = 'receivedaudio.ogg'; // File name for the saved audio
await fs.writeFileSync(fileName, audioBuffer);
    // Send the saved audio file as an audio message
    bot.sendAudio(chatId, fileName)
      .then(() => {
        console.log('Audio sent');
        // Remove the temporary file after sending
        fs.unlinkSync(fileName);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

const convert = async(chatId ,text) => {
  try{
    const result = await getAudio(text)
          if(result){
           console.log(result, 'isnit here')
          const audior = result
           audio(chatId,audior)
          }
}
catch (error){
  console.log(error)
}

}


// Respond to incoming messages
bot.on('message', async(msg) => {
  console.log(msg.text)
  const chatId = msg.chat.id;
  const text = msg.text 
  
  if (msg.document && msg.document.mime_type === 'text/plain') {
    console.log(msg.document);
    const fileId = msg.document.file_id;
    try{
      bot.sendMessage(chatId,'Loading......')
      const filetxt = await bot.downloadFile(msg.document.file_id,'./audios')
      const txtdata = fs.readFileSync(filetxt, 'utf-8');
      
      convert(chatId,txtdata)
    }
     catch(error){
       console.log(error)
     }
  
  }
  
  else if (msg.document && msg.document.mime_type === 'application/pdf') {
    console.log(msg.document)
      const pdfBuffer = bot.downloadFile(msg.document.file_id,'./audios')
            .then(filePath => {
              const pdfBuffer = require('fs').readFileSync(filePath);
           pdf(pdfBuffer).then(data => {
          const extractedText = data.text;
          convert(chatId,extractedText)
                }).catch(err => {
                    console.error('Error extracting text:', err);
                });
            }).catch(err => {
                console.error('Error downloading PDF file:', err);
            });
    }
    else {
   const gpttext = await gpt(text)
    await convert(chatId,gpttext)
  bot.sendMessage(chatId,'Received your message.');
  }
}); 

// Handle errors
bot.on('polling_error', (error) => {
  console.error(error);
});




server.listen(3000,() => {
  console.log('server is running')
})