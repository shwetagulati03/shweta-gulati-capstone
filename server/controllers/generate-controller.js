const axios = require('axios');

const generateFile = async (req, res) => {
    console.log("before try");
    const { text } = req.body;
    try{
        const formData = new URLSearchParams();
    formData.append('text', text);
    const resp = await axios.post('https://api.deepai.org/api/text2img',formData, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'api-key': "7f25a60b-28f6-412c-817f-26e2aa6fb805"    },
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

   


