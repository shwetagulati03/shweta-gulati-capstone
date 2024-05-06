const axios = require('axios');
require("dotenv").config();

const generateFile = async (req, res) => {
    console.log("before try");
    const { text } = req.body;
    try{
        const formData = {text};
    const resp = await axios.post('https://api.deepai.org/api/text2img',formData, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.DA_APIKEY    },
    });
    const data = resp.data;
    res.json(data);
   }
   catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
	generateFile
}

   


