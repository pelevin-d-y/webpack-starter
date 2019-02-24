# Webpack Frontend Starterkit

A lightweight foundation for your next webpack based frontend project.


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.

Чтобы добавить еще оду страницу в webpack.common.js нужно добавить:

 new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/page.pug'), // исходник страницы
      inject: true, 
      chunks: ['index'], // какой js файл подключить берется из entry
      filename: 'page.html' // в какой файл будет скомпилировано
    }),
