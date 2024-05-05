"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 定义组合式API仓库
 * 务必返回一个对象：属性与方法可以提供给组件使用
 */
var pinia_1 = require("pinia");
var vue_1 = require("vue");
var userTodoStore = (0, pinia_1.defineStore)("todo", function () {
    var todos = (0, vue_1.reactive)([{ id: 1, title: '吃饭' }, { id: 2, title: '睡觉' }]);
    var arr = (0, vue_1.reactive)([1, 2, 3, 4, 5, 6]);
    var total = (0, vue_1.computed)(function () {
        return arr.reduce(function (prev, next) {
            return prev + next;
        }, 0);
    });
    return {
        todos: todos,
        total: total,
        updateTodo: function () {
            todos.push({ id: 3, title: '组合式API' });
        }
    };
});
exports.default = userTodoStore;
