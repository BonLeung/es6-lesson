## 使用手册

### 第一步，克隆项目并安装所需要的包

```sh
git clone http://github.com/BonLeung/es6-lesson.git
cd es6-lesson
npm install
```

### 第二步，生成webpack.dll.js的vendors中配置业务需要静态化的包

```sh
npm run dll
```

### 第三步，运行项目

```sh
hb dev
```

####  如无意外，此时报错，需要全局安装 html-bundler

```sh
npm install -g html-bundler
```

####  此时，继续运行项目

```sh
hb dev
```
