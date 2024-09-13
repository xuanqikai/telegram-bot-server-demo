"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const token = ((_a = process.env) === null || _a === void 0 ? void 0 : _a.BOT_TOKEN) || "6573484100:AAHw9n7ESNGaY5gjqwNiMsXxqZk8tpI7Vcw";
const gameShortName = "testgame";
const weburl = "https://d2h6lhn2iwtzyf.cloudfront.net/fruit/index.html";
// const weburl = "https://telegram-test-livid.vercel.app/";
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
// bot.onText(/\/start/, (msg: any) => {
//   bot.sendMessage(msg.chat.id, "Welcome to the game!");
//   bot.sendGame(msg.chat.id, gameShortName);
// });
// bot.on('callback_query', async (msg) => {
//   console.log("收到消息callback_query", msg);
//   bot.answerCallbackQuery(msg.id, { url: weburl })
// })
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    // 定义一个带有游戏选项的回复键盘
    const replyKeyboard = {
        reply_markup: {
            keyboard: [
                [{ text: '游戏 1' }, { text: '游戏 2' }],
                [{ text: '游戏 3' }] // 第二行按钮
            ],
            resize_keyboard: true,
            one_time_keyboard: true // 使用一次后隐藏
        }
    };
    bot.sendMessage(chatId, '请选择一个游戏:', replyKeyboard);
});
// 处理用户选择的游戏
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text === '游戏 1') {
        bot.sendMessage(chatId, '你选择了游戏 1! 点击链接开始: https://your-game-url-1.com');
    }
    else if (msg.text === '游戏 2') {
        bot.sendMessage(chatId, '你选择了游戏 2! 点击链接开始: https://your-game-url-2.com');
    }
    else if (msg.text === '游戏 3') {
        bot.sendMessage(chatId, '你选择了游戏 3! 点击链接开始: https://your-game-url-3.com');
    }
});
console.log('Bot is running...');
