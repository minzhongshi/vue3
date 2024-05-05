"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 选择式API仓库
 * defineStore方法定义小仓库，带两个参数
 *   1、仓库名称
 *   2、仓库配置对象
 * defineStore返回一个函数，让组件可以获取到仓库数据
 * 存储数据：state
 * 需对外暴露方法
 */
var pinia_1 = require("pinia");
var userInfoStore = (0, pinia_1.defineStore)("info", {
    state: function () {
        return {
            count: 99,
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        };
    },
    actions: {
        //内部没有context上下文对象
        //没有commit、没有mutations去修改数据
        updateNum: function (a, b) {
            this.count += (a + b);
        }
    },
    getters: {
        total: function () {
            var result = this.arr.reduce(function (prev, next) {
                return prev + next;
            }, 0);
            return result;
        }
    }
});
exports.default = userInfoStore;
