/**
 * Created by hongpao on 2018/12/25.
 *
 * async: 异步方法
 * await: 等待执行,只能在异步函数内执行
 */

const express = require('express');
const bodyParser = require('body-parser');

/*
 * 接口集合
 * */
const getHomeInfo = require("./requester/getHomeInfo");

/*
 * 初始化
 * */
const app = express();

/*
 * 配置静态资源访问
 * */
app.use('/public', express.static('./public'));
app.use('/css', express.static('./css'));
app.use('/images', express.static('./images'));

/*
 * 异步请求获取数据，特殊处理
 * */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * 接口处理集合
 */
getHomeInfo(app)

//启动服务
app.listen(3001, () => {
    console.log('**************************************************************');
    console.log('**                                                          **');
    console.log('**                                                          **');
    console.log('** Ladies and Gentlemen Node服务已启动完毕，可以正常使用... **');
    console.log('**                                                          **');
    console.log('**                                                          **');
    console.log('**************************************************************');
});