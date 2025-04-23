module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "i18next-extract",
      {
        locales: ["en", "am"],
        keyAsDefaultValue: true,
        outputPath: "src/locales/{{locale}}/translation.json",
      },
    ],
  ],
};
