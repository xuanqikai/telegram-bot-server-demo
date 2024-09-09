import TelegramBot from 'node-telegram-bot-api';

const token = process.env?.BOT_TOKEN || "6573484100:AAHw9n7ESNGaY5gjqwNiMsXxqZk8tpI7Vcw";

const bot = new TelegramBot(token!, { polling: true });

bot.onText(/\/start/, (msg: any) => {
  bot.sendMessage(msg.chat.id, "Hello from TypeScript123-222!");
});

console.log('Bot is running...');


