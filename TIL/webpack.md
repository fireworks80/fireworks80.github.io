# webpack

## install
````
npm init -y
npm i webpack webpack-cli --save-dev
````

## project
/
|- package.json
|- index.html
|- /src
    |- index.js

lodash를 index.html에서 호출해서 사용 하던것을
index.js에서 import를 이용해서 사용

````
npm i lodash --save
````

## bundle
index.html을 /dist로 옮긴 후 

````
index.html
    
- <script src="lodash.js"></script>
- <script src="src/index.js"></script>
+ <script src="main.js"></script>
````

/
|- package.json
|- /dist
    |- index.html
|- /src
    |- index.js

````
npx
webpack
````
webpack명령어 실행 하면 /dist에 main.js파일이 생김

## using a configuration

- project
|-package.json
+|-webpack.config.js
|- /dist
    |- index.html
|- /src
    |- index.js

- webpack.config.js
````
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};

npx
webpack --config webpack.config.js
````

## loader
비 자바스크립트 파일을 웹팩이 이해하게끔 변경하는 역할

## loading css
- style-loader: 자바스크립트로 변경된 스타일 시트를 동적으로 돔에 추가
- css-loader: css파일을 자바스크립트로 변환해서 로딩 

- webpack.config.js
````

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
+  module: {
+    rules: [
+      {
+        test: /\.css$/,
+        use: [
+          'style-loader',
+          'css-loader'
+        ]
+      }
+    ]// rules
+  } // module
};
````

- project
|-package.json
|-webpack.config.js
|- /dist
    |- bundle.js
    |- index.html
|- /src
    |- style.css
    |- index.js
|- / node_modules

## loading image | loading font
icon이나 background image같은 이미지 불러오기

````
npm i --save-dev file-loader
````

- webpack.config.js
````
const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
+       {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader'
+         ]
+       }
      ]
    }
  };
````

- project
|-package.json
|-webpack.config.js
|- /dist
    |- bundle.js
    |- index.html
|- /src
+    |- naver.png
    |- style.css
    |- index.js
|- / node_modules