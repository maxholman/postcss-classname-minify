# PostCSS Plugin Classname Minify

[PostCSS] plugin to shorten class names.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    /* Input example */
}
.bar {
    /* Input example */
}
```

```css
._ {
  /* Output example */
}
.z {
  /* Output example */
}
```

## Usage

Check your project for existing PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-classname-minify'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
