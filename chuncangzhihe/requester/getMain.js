/**
 * 小程序首页入口logo获取
 */
const fs = require('fs')
const path = require('path')
const setCrossDomain = require('../setCrossDomain')

const getMain = (app) => {

    //主页接口处理
    app.get('/start_main', (req, res) => {
        /**
         * 异步处理完成与否的标志位
         * [nba图片文件名]
         */
        let isFinish = [0]

        //所有图片名称
        let imagesAry = []

        //允许跨域设置
        setCrossDomain(res)

        //获取图片路径
        let root = path.resolve(__dirname, '..')

        //异步获取所有图片名称
        fs.readdir(`${root}/images/nba/`, (err, files) => {
            if (!err) {
                for (let v of files) {
                    imagesAry.push(v)
                }

                isFinish[0] = 1

                if (!isFinish.includes(0))
                    finish(res)
            } else {

            }
        })

        const finish = (res) => {
            //接口返回输出
            res.send({
                code: 1,
                data: {
                    imagesAry
                }
            })
        }
    })
}


module.exports = getMain