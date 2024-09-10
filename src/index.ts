import TelegramBot from 'node-telegram-bot-api';

const token = process.env?.BOT_TOKEN || "6573484100:AAHw9n7ESNGaY5gjqwNiMsXxqZk8tpI7Vcw";
const gameShortName = "testgame";
const weburl = "https://d2h6lhn2iwtzyf.cloudfront.net/fruit/index.html";
// const weburl = "https://telegram-test-livid.vercel.app/";

const bot = new TelegramBot(token!, { polling: true });

bot.onText(/\/start/, (msg: any) => {
  bot.sendMessage(msg.chat.id, "Welcome to the game!");
  bot.sendGame(msg.chat.id, gameShortName);
});
bot.on('callback_query', async (msg) => {
  console.log("收到消息callback_query", msg);
  bot.answerCallbackQuery(msg.id, { url: weburl })
})

console.log('Bot is running...');


