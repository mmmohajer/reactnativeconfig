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
            Screens: "./app/screens",
            Styles: "./app/assets/styles",
            Images: "./app/assets/images",
            Constants: "./app/constants",
            Utils: "./app/utils",
            Reducers: "./app/reducers",
            Services: "./app/services",
            Store: "./app/store",
            Root: "./app",
            Hooks: "./app/hooks",
            Env: "./.env.js",
            Routes: "./app/routes",
          },
        },
      ],
    ],
  };
};
