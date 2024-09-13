import TelegramBot from "node-telegram-bot-api";

/** 机器人类 */
export class BotListennerBase {

    protected _myBot!: TelegramBot;

    init() { }

    /** 输入启动命令 */
    onStart(msg: TelegramBot.Message) {
    }
    /** 获取消息 */
    onMessage(msg: TelegramBot.Message) {
    }
    /** 回调 */
    onCallbackQuery(msg: TelegramBot.CallbackQuery) {
    }

}