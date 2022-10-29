/* eslint-disable global-require, @typescript-eslint/no-var-requires */

module.exports = (options) => ({
  plugins: [
    require('postcss-omit-import-tilde'),
    require('postcss-import'),
    require('postcss-partial-import'),
    // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
    // https://github.com/postcss/postcss-custom-media
    require('postcss-custom-media')({
      importFrom: [
        'src/components/ui/styles/vars.css', // Default breakpoints
      ],
    }),
    require('precss'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-nesting'),
    options.mode === 'production'
      ? require('cssnano')({
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
              svgo: false,
            },
          ],
        })
      : false,
  ],
})
