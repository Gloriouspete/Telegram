const axios = require('axios')
const { createAudioFile } = require('simple-tts-mp3');
 
const getAudio = async(text) => {
  
  try{
    
const filepath = await createAudioFile(text, './audios/output', 'en');
  // Read the file and convert it to base64
  const fs = require('fs');
  const audioBuffer = fs.readFileSync(filepath);
  const base64Audio = audioBuffer.toString('base64');
  
console.log('Base64 encoded audio:', base64Audio);
return base64Audio
}
catch (error){
  console.log(error,'stop playing')
}
 
    
}
module.exports = {getAudio}