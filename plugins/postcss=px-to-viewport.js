// 默认宽度
var Options = {
    viewportWidth: 375 //UI设计稿宽度
};
export var PostcssPxToViewport = function (options) {
    if (options === void 0) { options = Options; }
    var opt = Object.assign({}, Options, options); // 将Options,options复制到同一对象中
    return {
        postcssPlugin: "postcss-px-to-viewport",
        //钩子函数 取css结点
        Declaration: function (cssNode) {
            // 这里可以改名字‘smz’ 改成需要转换的，比如‘smz’ 就只针对 单位为'smz'的css结点进行转换
            if (cssNode.value.includes('smz')) { // cssNode.value.includes('px')对含有px单位的css结点，可更改
                var num = parseFloat(cssNode.value); // 转换成数字去掉px
                cssNode.value = "".concat(((num / opt.viewportWidth) * 100).toFixed(2), "vw"); // 计算公式
            }
        }
    };
};
