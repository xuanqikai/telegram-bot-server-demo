
/** 网络类型 */
enum NetType {
    MainNet = "MainNet",//主网
    TestNet = "TestNet",//测试网
}
/** 游戏配置 */
export const BotConfig = {
    /** 机器人token */
    botToken: "6573484100:AAHw9n7ESNGaY5gjqwNiMsXxqZk8tpI7Vcw",
    isPolling: true,
    /** 游戏名 */
    gameShortName: "testgame",

}

// const h5GameBaseUrl = "https://d2h6lhn2iwtzyf.cloudfront.net/";
/** 游戏配置 */
export const GameConfig = {
    h5GameBaseUrl: "https://d2h6lhn2iwtzyf.cloudfront.net/",
    gameInfo: [
        { name: "合成水果", shortName: "fruit_game", h5Url: "fruit/index.html", },
        { name: "测试demo", shortName: "testgame", h5Url: "test/index.html", },
    ]

};

/** ton配置 */
export const TonConfig = {
    /** 网络类型 */
    netType: NetType.TestNet,

    /** 网络url */
    netUrl: {
        MainNet: "https://toncenter.com/api/v2/jsonRPC",
        TestNet: "https://testnet.toncenter.com/api/v2/jsonRPC",
    },
    /** 目标账号 */
    targetAccout: 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',

}