import TelegramBot from "node-telegram-bot-api";
import { allBotListeners } from "./BotListeners";
import { BotConfig } from "./Config";

/** 机器人类 */
export class BotManager {

    protected _myBot!: TelegramBot
    private static _instance: BotManager;
    static get instance() {
        if (!this._instance) {
            this._instance = new BotManager();
        }
        return this._instance;
    }

    init() {
        console.log('BotManager init');
        this._myBot = new TelegramBot(BotConfig.botToken, { polling: BotConfig.isPolling });
        // 处理启动命令
        this._myBot.onText(/\/start/, this.onStart.bind(this));
        // 处理用户消息
        this._myBot.on('message', this.onMessage.bind(this));
        // 处理回调
        this._myBot.on('callback_query', this.onCallbackQuery.bind(this));
        allBotListeners.forEach(bot => {
            bot.init(this._myBot);
        });
        console.log('Bot is running...');
    }

    /** 输入启动命令 */
    onStart(msg: TelegramBot.Message) {
        allBotListeners.forEach(bot => {
            bot.onStart(msg);
        });
        // this._myBot.sendMessage(msg.chat.id, "Hello from TypeScript123-abc!");
        // this._myBot.sendGame(msg.chat.id, gameShortName);
    }
    /** 获取消息 */
    onMessage(msg: TelegramBot.Message) {
        allBotListeners.forEach(bot => {
            bot.onMessage(msg);
        });
    }
    /** 回调 */
    onCallbackQuery(msg: TelegramBot.CallbackQuery) {
        allBotListeners.forEach(bot => {
            bot.onCallbackQuery(msg);
        });
    }

}