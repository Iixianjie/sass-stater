"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("./theme");
exports.base = {
    realityWidth: 750,
    realityHeight: 1080,
    adaptiveWidth: 375,
    colNum: 24,
    containerWidth: 1024,
    colOneWidth: 100 / 24 + "%"
};
exports.space = {
    space4: '4px',
    space8: '8px',
    space12: '12px',
    space16: '16px',
    space24: '24px',
    space32: '32px',
    space40: '40px',
    space48: '48px',
    space56: '56px',
    space64: '64px'
};
exports.fontSize = {
    fsSm: '12px',
    fsS: '14px',
    fsM: '16px',
    fs18: '18px',
    fs20: '20px',
    fs24: '24px',
    fs30: '30px',
    fs38: '38px',
    fs46: '46px',
    fs56: '56px',
    fs68: '68px',
    default: '16px',
};
exports.family = {
    font: 'PingFang SC,Helvetica Neue,Microsoft YaHe',
    code: 'Consolas, Menlo, Courier, monospace',
    number: 'tabular-nums',
};
exports.zIndex = {
    z: 1000,
    zDrawer: 1200,
    zModal: 1400,
    zTooltip: 1600,
};
exports.animation = {
    transtion: '0.3s',
};
exports.decorate = {
    borderRadius: '2px',
};
exports.black = {
    title: 'rgba(0, 0, 0, 0.9)',
    primary: ' rgba(0, 0, 0, 0.75)',
    second: 'rgba(0, 0, 0, 0.45)',
    disable: 'rgba(0, 0, 0, 0.25)',
    border: 'rgba(0, 0, 0, 0.15)',
    bg: 'rgba(0, 0, 0, 0.04)',
};
exports.white = {
    title: 'rgba(255, 255, 255, 1)',
    primary: 'rgba(255, 255, 255, 0.85)',
    second: 'rgba(255, 255, 255, 0.65)',
    disable: 'rgba(255, 255, 255, 0.45)',
    border: 'rgba(255, 255, 255, 0.25)',
    bg: 'rgba(255, 255, 255, 0.09)',
};
exports.color = {
    tips: exports.black.disable,
    mask: exports.black.disable,
    info: '#2e88fa',
    success: '#13ce66',
    error: '#F83D48',
    warn: '#FFC838',
    a: theme_1.geekblue.c6,
    aHover: theme_1.geekblue.c4,
    theme: theme_1.cyan.c6,
    themeLight: theme_1.cyan.c4,
    themeDark: theme_1.cyan.c8,
    bgColor: '#f6f6f6',
    placeHolder: exports.black.second,
    border: exports.black.border,
};
exports.shadow = {
    s1: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
    half: '0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),0 3px 1px -1px rgba(0, 0, 0, 0.2)',
    s2: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    s3: '0 8px 17px 2px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
    s4: '0 16px 24px 2px rgba(0, 0, 0, 0.14),0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2)',
    s5: '0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2)',
    hover: '0 8px 17px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)',
};
exports.breakpoint = {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
};
