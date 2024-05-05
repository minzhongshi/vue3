"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
var vue_1 = require("vue");
var message = function (message, duration) {
    if (duration === void 0) { duration = 2000; }
    var handleDestroy = function () {
        (0, vue_1.render)(null, document.body);
    };
    var vNode = (0, vue_1.h)('messageComponent', {
        style: {
            width: '200px',
            height: '100px',
            border: '2px solid',
            float: 'left',
            position: 'relative',
            left: '50%',
            'margin-left': '-50px'
        },
        message: message,
        duration: duration,
        destroy: handleDestroy
    }, message);
    (0, vue_1.render)(vNode, document.body);
    (function () {
        setTimeout(function () { return (0, vue_1.render)(null, document.body); }, duration);
    })();
};
exports.message = message;
