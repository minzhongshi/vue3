"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFormItem = void 0;
var vue_1 = require("vue");
/**
 * 创建表单项
 */
function createFormItem(formItemType, payload, next, parent) {
    if (!next) {
        next = function () { return null; };
    }
    if (!parent) {
        parent = null;
    }
    var nextFunc = function (current, acients) {
        var nextItem = next(current, acients); // 获取下一个表单项
        if (!nextItem) {
            return null;
        }
        nextItem.parent = current; // 设置父级表单
        if (!(0, vue_1.isReactive)(nextItem)) { // 如果不是响应式对象，转换成响应式对象
            nextItem = (0, vue_1.reactive)(nextItem);
        }
        return nextItem;
    };
    return (0, vue_1.reactive)({
        type: formItemType,
        payload: payload,
        next: nextFunc,
        parent: parent
    });
}
exports.createFormItem = createFormItem;
