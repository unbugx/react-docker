module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript', '@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/**'],
        extensions: ['.tsx', '.ts'],
      },
    ],
  ],
}
