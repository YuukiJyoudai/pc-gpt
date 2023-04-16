module.exports = {
    presets: [
        ["@babel/preset-env", {
            "targets": {
                "browsers": ["last 2 versions", "ie >= 7"]
            }
        }],
        [
            "@babel/preset-typescript",
            {
                allExtensions: true, //支持所有文件扩展名
            },
        ],
    ],
};