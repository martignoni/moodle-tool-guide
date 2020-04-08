module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [
        './**/*.html',
        './**/*.css'
      ],
    },
    autoprefixer: {},
    cssnano: {preset: 'default'}
  }
};
