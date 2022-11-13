module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            BaseComponents: "./app/baseComponents",
            Components: "./app/components",
            Styles: "./app/assets/styles",
            Images: "./app/assets/images",
            Constants: "./app/constants",
            Utils: "./app/utils",
          },
        },
      ],
    ],
  };
};
