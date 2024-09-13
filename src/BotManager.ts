import TelegramBot from "node-telegram-bot-api";
import { BotListennerBase } from "./base/BotListennerBase";
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
    static _allBotListeners: BotListennerBase[] = [];
    /** 添加机器人监听者 */
    static addBot(bot: BotListennerBase) {
        this._allBotListeners.push(bot);
    }

    init() {
        this._myBot = new TelegramBot(BotConfig.botToken, { polling: BotConfig.isPolling });
        // 处理启动命令
        this._myBot.onText(/\/start/, this.onStart.bind(this));
        // 处理用户消息
        this._myBot.on('message', this.onMessage.bind(this));
        // 处理回调
        this._myBot.on('callback_query', this.onCallbackQuery.bind(this));

        BotManager._allBotListeners.forEach(bot => {
            bot.init();
        });
        console.log('Bot is running...');
    }

    /** 输入启动命令 */
    onStart(msg: TelegramBot.Message) {
        BotManager._allBotListeners.forEach(bot => {
            bot.onStart(msg);
        });
        // this._myBot.sendMessage(msg.chat.id, "Hello from TypeScript123-abc!");
        // this._myBot.sendGame(msg.chat.id, gameShortName);
    }
    /** 获取消息 */
    onMessage(msg: TelegramBot.Message) {
        BotManager._allBotListeners.forEach(bot => {
            bot.onMessage(msg);
        });
    }
    /** 回调 */
    onCallbackQuery(msg: TelegramBot.CallbackQuery) {
        BotManager._allBotListeners.forEach(bot => {
            bot.onCallbackQuery(msg);
        });
    }

}