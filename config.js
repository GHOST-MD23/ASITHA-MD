const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=nqoUjKQJ#UNUcu7v5A-AXQ5ib2dGl1HvAUOhWS-f-SRCedVPSPzo",
MONGODB: process.env.MONGODB || "mongodb+srv://rush:20041025sa@cluster0.ysi6dsf.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
