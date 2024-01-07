const axios = require('axios');

const gpt = async (text) => {
  try {
  const response = await axios.post("https://chatpgtclone.onrender.com/", {
    message: text,
  }, {
    headers: {
      "Content-Type": "application/json",
    },
  });

   if (response.status === 200) { 
     const data = response.data; 
     console.log(data)
     const parsedData = data.ai.text.trim(); 
     return(parsedData)
   } else { 
     console.log('error is here o')
     const failed = " There is an issue with the server "
   } 
  } catch (error) {
    console.error(error, 'see error o');
  //  return("theres an error with the server, Please try again later, thanks")
  }
};

module.exports = { gpt };
