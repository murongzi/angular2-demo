# angular2-demo
learn angular2 step by step

步骤：
```
1：npm i
2：npm run start
```

运行成功后会自启动浏览器，端口号默认配置在bs-config.json中为8000

#####页面引用脚本说明
[shim.min.js](https://github.com/zloirock/core-js)提供接近标准API的使用的兼容脚本

[zone.js](https://github.com/angular/zone.js#readme)用来对异步任务提供Hooks支持，使得在异步任务运行之前/之后做额外操作成为可能

[reflect-metadata](http://rbuckton.github.io/ReflectDecorators)装饰器

[systemjs](https://github.com/systemjs/systemjs#readme)通用模块加载脚本，ES6模块、AMD、CommonJs、浏览器端的全局脚本、nodejs等

#####主要依赖
TypeScript:微软开发, javascript超集,提供最新标准或者提案的代码API,可转换成ES5,ES3,是一个转换器(编译器的一种).开源

Rxjs:微软开发,响应式变成[名字为英文缩写], promise++的概念. 功能包括不限于,事件绑定,ajax,数据操作,promise等,angular2中取用了该功能库中的部分脚本的使用