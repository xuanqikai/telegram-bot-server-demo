"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hello from TypeScript123-222!");
    bot.sendGame(msg.chat.id, gameShortName);
});
bot.on('callback_query', (msg) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("收到消息callback_query", msg);
    bot.answerCallbackQuery(msg.id, { url: weburl });
}));
console.log('Bot is running...');
