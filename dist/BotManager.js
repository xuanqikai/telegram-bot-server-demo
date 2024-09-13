"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotManager = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const BotListeners_1 = require("./BotListeners");
const Config_1 = require("./Config");
/** 机器人类 */
class BotManager {
    static get instance() {
        if (!this._instance) {
            this._instance = new BotManager();
        }
        return this._instance;
    }
    init() {
        console.log('BotManager init');
        this._myBot = new node_telegram_bot_api_1.default(Config_1.BotConfig.botToken, { polling: Config_1.BotConfig.isPolling });
        // 处理启动命令
        this._myBot.onText(/\/start/, this.onStart.bind(this));
        // 处理用户消息
        this._myBot.on('message', this.onMessage.bind(this));
        // 处理回调
        this._myBot.on('callback_query', this.onCallbackQuery.bind(this));
        BotListeners_1.allBotListeners.forEach(bot => {
            bot.init(this._myBot);
        });
        console.log('Bot is running...');
    }
    /** 输入启动命令 */
    onStart(msg) {
        BotListeners_1.allBotListeners.forEach(bot => {
            bot.onStart(msg);
        });
        // this._myBot.sendMessage(msg.chat.id, "Hello from TypeScript123-abc!");
        // this._myBot.sendGame(msg.chat.id, gameShortName);
    }
    /** 获取消息 */
    onMessage(msg) {
        BotListeners_1.allBotListeners.forEach(bot => {
            bot.onMessage(msg);
        });
    }
    /** 回调 */
    onCallbackQuery(msg) {
        BotListeners_1.allBotListeners.forEach(bot => {
            bot.onCallbackQuery(msg);
        });
    }
}
exports.BotManager = BotManager;
