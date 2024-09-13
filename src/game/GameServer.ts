import TelegramBot from "node-telegram-bot-api";
import { BotListennerBase } from "../base/BotListennerBase";
import { GameConfig } from "../Config";

/** 游戏服务 */
export class GameServer extends BotListennerBase {
    init() {
        console.log("GameServer init");
    }
    /** 输入启动命令 */
    onStart(msg: TelegramBot.Message) {
        console.log("onStart", msg);
        const chatId = msg.chat.id;
        // this._myBot.sendMessage(msg.chat.id, "Hello from TypeScript123-abc!");
        // this._myBot.sendGame(msg.chat.id, gameShortName);
        // 定义一个带有游戏选项的回复键盘
        // const allGameName = GameConfig.
        const allGameName = GameConfig.gameInfo.map(v => { return { text: v.name } });
        const replyKeyboard = {
            reply_markup: {
                keyboard: [
                    allGameName, // 第一行按钮
                    // [{ text: '游戏 3' }] // 第二行按钮
                ],
                resize_keyboard: true, // 自动调整键盘大小
                one_time_keyboard: false // 使用一次后隐藏
            }
        };

        this.myBot.sendMessage(chatId, '请选择一个游戏:', replyKeyboard);
    }
    /** 获取消息 */
    onMessage(msg: TelegramBot.Message) {
        console.log("onMessage", msg);
        const chatId = msg.chat.id;

        const gameInfo = GameConfig.gameInfo.find(v => v.name === msg.text);
        if (gameInfo) {
            // 查找到游戏
            this.myBot.sendGame(msg.chat.id, gameInfo.shortName);
        }

        // if (msg.text === '游戏 1') {
        //     this._myBot.sendMessage(chatId, '你选择了游戏 1! 点击链接开始: https://your-game-url-1.com');
        // } else if (msg.text === '游戏 2') {
        //     this._myBot.sendMessage(chatId, '你选择了游戏 2! 点击链接开始: https://your-game-url-2.com');
        // } else if (msg.text === '游戏 3') {
        //     this._myBot.sendMessage(chatId, '你选择了游戏 3! 点击链接开始: https://your-game-url-3.com');
        // }
    }
    /** 回调 */
    onCallbackQuery(msg: TelegramBot.CallbackQuery) {
        console.log("onCallbackQuery", msg.game_short_name);
        const gameInfo = GameConfig.gameInfo.find(v => v.shortName === msg.game_short_name);
        if (gameInfo) {
            this.myBot.answerCallbackQuery(msg.id, { url: GameConfig.h5GameBaseUrl + gameInfo.h5Url })
        }

    }
}