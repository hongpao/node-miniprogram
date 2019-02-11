/**
 * 小程序首页入口logo获取
 */
const fs = require('fs')
const path = require('path')
const setCrossDomain = require('../setCrossDomain')

const getMain = (app) => {
    app.get('/start_main', (req, res) => {

        //允许跨域设置
        setCrossDomain(res)

        let root = path.resolve(__dirname, '..')

        let imagesAry = []
        fs.readdir(`${root}/images/nba/`, (err, files) => {
            if (!err) {
                for (let v of files) {
                    imagesAry.push(v)
                }
                finish(res, {
                    imagesAry
                })
            } else {

            }
        })
    })
}

const finish = (res, options) => {
    //接口返回输出
    res.send({
        code: 1,
        data: options.imagesAry || []
    })
}


module.exports = getMain