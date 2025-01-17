const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA71V2YrsyBH9FZOvVXdK+1LQMFprlUqqtUvGD1pSqiztUqqWvjRcBoz9Yu7APBlmHjzf0D8x/Rf9B/MJRlXddGPP3NuGwUKgTCkUeSLixImPIMtRDSfwDPofQVGhg4thu8TnAoI+kJswhBXogsDFLuiDRnXNgT8nrOWBCdiB4yMGQ5YRzFsq1kotMMZ6Z2KdVpW2ugH3XVA0XoL8Lzi0Q9FeRoMxv44Yc2ae1c4xEPnbUSivRFxG5B2vINlebmZKfgPuW48uqlAWacUOprBykwk8Wy6q3gffnk57FDyfp9k8T46iNI0MTKiGqsBqWwnB8i6webGzvSuG2vvgT4+RSmaJlc5GK6enc4txqUOUbpdk3TnF7p0sJ+cixgy0mSv8GkUZDEYBzDDC53fnfTNOBX6f9PjdXlrUG3vAyclCcQP/5C5n2DlyI940O5U9p4z3ARelct3T51Kh49LPswl9QI4ijpfKnFZW5Ky5Ha06Jxx6Y81+C9yqXrgS/y9512bLjepQHhXsgihYm9UApYNYWlXmdotOWjm1BuGdecpvN/H74GfVwZ76exvtuQE3LVfc0qIUj9nz1lYhkiCn4EYK8Gh5RMIrfBc31ZdQQv7OmonIKYWd40VWbJb7mew40VJsoBz32JzxaKORYiTHiVBRRXke7cvVutPrMKVsSWguhNiIcmPHTBjDTKOeL5lIurlEFMPzKAB98r4LKhihGlcuRnl2eSdQXeAGhwX0K4gv6QV1I8tmMSuoRtlkve2gaEqxc+hMBmN2uxsNlbt4sXfxVq7t+gZ0QVHlPqxrGAxRjfPqbMC6diNYg/6fL5Vqg65gmmM4RkFbfYZnGVrgRJH6tv7muHNx7RbFNxnEoAvCKk8NCPq4amAXXOxlmlVFVuQJmRZEluAoTlZoURIVWlFZTeTbCNPrmUuUwhq7aQH6JE/zJEWJBHPf/UNgqKxOERKlqLpCcLJCSCxJyZoqUDrDUJKo/p9gsLpK0jTLybTIsxqhswpDqzzL8brKqholfwUG9wfB0DSZ1xWJoyWGYxmVlElFUGWBZiVJ03hW/CqMv3RBBk/42tMtE2myC0JU1XiVNUWSu8FLw798dH0/bzK8OGe+0i5gBfpvXkOMURbVbWBN5lb+Dh2g0sYB+qGb1PC+CwJ4QD5s/QE9pzOB4vFislGtueYd2TlKji2bd3l2NeFDMfAI6H0gQlb4wBAs+0H0Pe8DR3OhT4ghJHkPtOm4ymn7z+92t15Kq9N6B6eaRiygh0L/5FHh7TKKrppzbUtYweAly57rx02xzGOYfcGv7ExC3TA8bVIb5l6MI8LxSnaZooP9xu+13UH/4+sIU/Kg9cepS0HfOBRoq9We859k6NPcf/Mhc1tj8OtP339+/PT08PmXn9vHp6eHf1zuvz1++tOvP33/3ePnx39ed6d2/8Pjj08Pn1rLH58e/vX0cDH6+9PDX1ugz1VsIQQQuyipQR8ohiIia6tpRjgqveNgIGmRpEQSeK36i7JelQvJjLUWpkjvuI5CNiqcmU7hlp09c1eOzgFXIq9jUecxklc3v+EE9MFgSjKTgzeEgyU92a+ZWW7d9qJK7jhbxYoWMppus4043Aac3MMcck5RJUJ4dKVYMcgVOx/Mss7qFPPF7pi6sR0O+Y2j2DftaVf2vT0stJqJHU/IhjlMb6f5jmfHZkQFKWFv5K2l245uD8vyILBQPA5PugXNZCaPmiSQd/JsWNCREbg9xMbp+DgqaLQ+E/l6b181/zJzkudZj57V+MrVEMHL6Hwu49eq/do1xH33jYvnWfx7zNxGUCVDhdmFaWpjL6L3+427KQ95x+CQkcEyT3t7sUbbaA3uWzkoEheHeZW2Eyj1XNAFiVtj6bXrf0tIyC5Iz1JRLLCLX8QCSO1lTm7B/b8BqXoKyGMKAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "No",
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

