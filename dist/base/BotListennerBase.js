"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotListennerBase = void 0;
/** 机器人类 */
class BotListennerBase {
    init(bot) {
        this.myBot = bot;
        this.onInit();
    }
    /** 初始化 */
    onInit() {
    }
    /** 输入启动命令 */
    onStart(msg) {
    }
    /** 获取消息 */
    onMessage(msg) {
    }
    /** 回调 */
    onCallbackQuery(msg) {
    }
}
exports.BotListennerBase = BotListennerBase;
