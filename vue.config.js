const pxtovw = require('postcss-px-to-viewport')
const path = require('path')
module.exports = {
    css:{
        loaderOptions:{
            css:{
                //这里的选项会传递给css-loader
            },
            postcss:{
                //这里的选项会传递给postcss-loader
                plugins:[
                    new pxtovw({
                        unitToConvert: 'px',
                        viewportWidth: 375,
                        unitPrecision: 5,
                        propList: ['*'],
                        viewportUnit: 'vw',
                        fontViewportUnit: 'vw',
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: [/node_modules/],
                    })
                ]
            }
        }
    },
    chainWebpack:config=>{
        config.resolve.alias.set('assets',path.resolve(__dirname,'./src/assets/'))
        config.resolve.alias.set('views',path.resolve(__dirname,'./src/views/'))
    }
    
}