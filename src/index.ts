import TelegramBot from 'node-telegram-bot-api';

const token = process.env?.BOT_TOKEN || "6573484100:AAHw9n7ESNGaY5gjqwNiMsXxqZk8tpI7Vcw";
const gameShortName = "testgame";
const weburl = "https://d2h6lhn2iwtzyf.cloudfront.net/fruit/index.html";
// const weburl = "https://telegram-test-livid.vercel.app/";

const bot = new TelegramBot(token!, { polling: true });

// bot.onText(/\/start/, (msg: any) => {
//   bot.sendMessage(msg.chat.id, "Welcome to the game!");
//   bot.sendGame(msg.chat.id, gameShortName);
// });
// bot.on('callback_query', async (msg) => {
//   console.log("收到消息callback_query", msg);
//   bot.answerCallbackQuery(msg.id, { url: weburl })
// })


// 监听 /start 命令
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // 定义一个带有游戏选项的内联键盘
  const gameOptions = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: '内联-游戏 1', callback_data: 'game1' },
          { text: '内联-游戏 2', callback_data: 'game2' }
        ],
        [
          { text: '内联-游戏 3', callback_data: 'game3' }
        ]
      ]
    }
  };

  // 发送带有内联按钮的消息
  bot.sendMessage(chatId, '请选择一个游戏:', gameOptions);
});

// 处理按钮点击事件
bot.on('callback_query', (callbackQuery) => {
  const msg = callbackQuery.message;
  const data = callbackQuery.data;

  if (data === 'game1') {
    bot.sendMessage(callbackQuery.id, '内联-你选择了游戏 1! 点击链接开始: https://your-game-url-1.com');
  } else if (data === 'game2') {
    bot.sendMessage(callbackQuery.id, '内联-你选择了游戏 2! 点击链接开始: https://your-game-url-2.com');
  } else if (data === 'game3') {
    bot.sendMessage(callbackQuery.id, '内联-你选择了游戏 3! 点击链接开始: https://your-game-url-3.com');
  }

  // 通知 Telegram 操作已成功处理
  bot.answerCallbackQuery(callbackQuery.id);
});

console.log('Bot is running...');


