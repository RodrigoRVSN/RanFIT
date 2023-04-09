module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env"
        }
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx'],
          alias: {
            '~/components': './src/components',
            '~/contexts': './src/contexts',
            '~/core': './src/core',
            '~/hooks': './src/hooks',
            '~/views': './src/views',
          }
        }
      ]
    ]
  };
};
