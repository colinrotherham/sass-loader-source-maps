# Sass loader source maps issue

Sass loader [v16.0.0](https://github.com/webpack-contrib/sass-loader/releases/tag/v16.0.0) source maps omit `sourcesContent` for [asset modules](https://github.com/webpack-contrib/sass-loader?tab=readme-ov-file#2-asset-modules) and include invalid `sources` content.

```patch
- {"version":3,"sourceRoot":"","sources":["webpack:///../node_modules/govuk-frontend/dist/govuk/core/_govuk-frontend-properties.scss",
+ {"version":3,"sourceRoot":"","sources":["webpack:///data:;charset=utf-8,:root%20%7B%0A%20%20//
```

Affects previous releases using `modern` or `modern-compiler` API option when used with [webpack@5.93.0](https://github.com/webpack/webpack/releases/tag/v5.93.0) asset module `binary` generator option. See [issue #962](https://github.com/webpack-contrib/sass-loader/issues/962) for more info.

## Project setup

Install Node.js dependencies

```shell
npm ci
```

## Build invalid source maps

1. Build webpack output

```shell
npm run build
```

2. See invalid `sources` content in:

```console
./dist/application.css.map
```
