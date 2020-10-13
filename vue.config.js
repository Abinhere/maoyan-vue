const pxtovw = require('postcss-px-to-viewport')
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
    }
}