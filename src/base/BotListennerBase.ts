import TelegramBot from "node-telegram-bot-api";

/** 机器人类 */
export class BotListennerBase {

    protected myBot!: TelegramBot;


    init(bot: TelegramBot) {
        this.myBot = bot;
        this.onInit();
    }
    /** 初始化 */
    onInit() {

    }

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