# Nodejs 用户管理系统

## nodemon 进行自动重启 app 应用

```shell
$ npm install nodemon -g
#使用：
    nodemo app.js
```

第一步：引入 art-template 的包

```shell
npm install art-template --save
npm install express-art-template --save
```

第二步：设置 express 的应用 art-template

在 app.js 中 app.engine 引用 art，这样就可以使用.art 的文件作为 html 文件的模板

第三步：在 service 中创建 userService.js，编写相应的方法，完成获取数据等操作

第四步：引入 mock.js，模拟数据

```shell
    npm install mockjs -D
```

第五步：全局安装 mocha，进行单元测试，创建 test 文件夹,创建\*.test.js 文件

```shell
mocha // 自动查找test下的文件，进行测试
npm install should -D
```

最好安装 shouldjs，比 assert 更强大的断言库

```shell
npm install istanbul -g //覆盖率测试
$ istanbul cover _mocha
```

mocha 在 Istanbul 创建的进程中，进行测试，Istanbul 捕捉覆盖率(必须在同一个进程中进行测试)
