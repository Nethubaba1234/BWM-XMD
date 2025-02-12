const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61VW27jRhbdSqN+pY5F8S3AwPApihIlUY/WIwiCIqv4ECmSZhVJyQ0DjQBB5m8CzFeA5CN78Cq8C+8gSwho2WhjptPxAMOvQlXx3nPPPffUR5DlMcFjfAaDj6Ao4xpS3C7pucBgANQqCHAJugBBCsEANM5UL67Kg1pE41qScG3Uw1zRMXJs7FB7KuuHYSOuTCkzrsFdFxSVl8b+VwJy9tUsNSaEt/oFEzhif7wP3HWQeQzaTXeLRbw/pOS2Q+WMXIO7NiKMyzgLjSLCR1zCdIzPcxiXb4OfaBy8SvST0ui9mTpZTTR+6enRIUC1RbydpKSc1hnHiDDu2+Az7gFXHV2dyEwaOIbXIDf1jyieiScES2fWnOT6dJgIN2Z4gU/iMMNohHBGY3p+M++hI90qxd4vxPK8DSsp6DvkvFKKaWNM1wo5LpbH8+Yk33Q2b+Rd2pFViYtZHo/sJbMd+RmLZHsxYvaSPbWTkyal0yvcEeyseQ18Xr5oJflfeNe0yFiShS4aU5flKzRaz/jIn0/9arHfWL7nFPRmHIwMiQ3fBp8ut/QDukmIj1ZNYm3rEkJmJecjSXbXVPwwrzp51V/cJhv/M3xIq/Kr4qYTZRcysVl3ZiFkzuyOE11V6phsoDbTiNkt9+tIWDg+fw5Uk4khrLwzUnVOUqe6nbKu3nhVZ+LU2SQMTs1EWFIYK9dPFSX4PEJgwNx1QYnDmNAS0jjP2j2B6wKI6iX2S0yf2AUczw/3vNJErmTLrNSbh/warRlrobIsc+od8swJtjAqUe1egy4oytzHhGBkxYTm5dnBhMAQEzD49qlRbc0lPuYU2zECAyBzIs+xkiDL/X+Qb5oIUgKL4psMU9AFQZkfHQwGtKxwFzzdl0S5z/YZUTAMUTUV2ZRUVurxhsxoisYYZlvg8ZJzFR8xofBYgAEjsjIrsD2evev+X2DImswoKs8IuqAZnKn3OJbtaQavmqwiC5LwtzC+64IMn+hFxC31LNMFQVwSus6qIs0helH4yyH0/bzK6PKc+Vq7wCUYvNrGlMZZSNrCqgyWfhTXWGvrAIMApgTfdQHCdezjNh7Qqu89NLMXLh1uy3zFOvwYJkrbvyjPLleQHPAsL/TeC1Bi33N9r/delrD0nuX6gceIsgxZDrR0XPyj/ecv5awG3FbW6m2W18hx66GqRf3ReHiUKXmS5EWHuMTohWUP+klVrPIEZ18bk5K4+6CSpBmfJ96kkuL5ZDm8lY790au4F32DwcfPnq3lqI031Vf8xtX6oO1Wm+c/xTCQhf/WQwbby+CP337+4eFfD7883v/08Ond6d0fv/3874dfH+8/PXx6vP/18f73x/tP7eY/H+9/bME8d6pNgzCFcUraRkxuFHHou31hc67d3U5ZKspYUdpReunsi11c5nGr7+qlSpCVbzbNZnozWXBopalBj1iSsic8S1Aey4lTJL0vBQEDYKNl7oWbExo13u2HIqlcTBnbFOdFYHG1qkYIx5tZlJ/LWXEyMeXGgjkVN0cn3di9K6ZZG2s0PuSCy6V2dVViYi52enjdZrso7HUycltHTGGX3A0bFEY9pJ3D1nIjE3uTxVi0TJyxcyu5dW9GQVQaB2tYBEdJ6Wi3o3VqOepx7nbSkJvJLIyS1DEOvX2/jJ6N7MlI0+cHLH72mIsegxg/vQfPrfq7jn6ejN5d91WI5wfmr1T9oelPeqFnLQQzJeYBxj1srZtwK0/UK2XozZBowVG918f7KbhrR75IIQ3y8tgSc/Qg6IIUEqp8nuwvmAUndcHxrBTFkkL6YghAaT/rag7u/gShDoHfOAkAAA==',
    PREFIXE: process.env.PREFIX || "@",
    OWNER_NAME: process.env.OWNER_NAME || "𝐂ʏʙᴇʀ x 𝐓ʜᴀʀᴜᴡᴀ 𝐈ᴅ",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "𝐂ʏʙᴇʀ x 𝐓ʜᴀʀᴜᴡᴀ 𝐈ᴅ",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || '𝐂ʏʙᴇʀ x 𝐓ʜᴀʀᴜᴡᴀ 𝐈ᴅ',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

