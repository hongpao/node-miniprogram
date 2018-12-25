/**
 * 小程序首页数据获取
 */
const setCrossDomain = require('../setCrossDomain')
const data_home = require('../data/home.json')

const getHomeInfo = (app) => {
    app.get('/get_home_info', (req, res) => {

        //允许跨域设置
        setCrossDomain(res)

        //接口返回输出
        res.send({
            code: 1,
            data: data_home
        })
    })
}

module.exports = getHomeInfo