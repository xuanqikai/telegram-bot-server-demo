"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const token = ((_a = process.env) === null || _a === void 0 ? void 0 : _a.BOT_TOKEN) || "6573484100:AAHw9n7ESNGaY5gjqwNiMsXxqZk8tpI7Vcw";
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hello from TypeScript123-000!");
});
console.log('Bot is running...');
