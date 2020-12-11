# style-base
> 一套sass启动工具，包含normalize、grid、以及常用的sass混合、原子类

<!-- TOC -->

- [style-base](#style-base)
    - [引入`normalize`、原子类](#引入normalize原子类)
    - [引入sass变量、混合等](#引入sass变量混合等)
    - [引入其他功能](#引入其他功能)
    - [生成自己的主题色](#生成自己的主题色)

<!-- /TOC -->


❗❗ 需要使用支持sass/scss的打包器加载此项目

## 全量引入

最简单的方式，包含`normalize`、布局模块、原子类、sass变量、混合等

黑暗模式、移动端样式、小程序样式等需要根据实际场景自行引入

```js
import 'style-base'
```

## 按需引入

```sass
// 引入sass变量、混合等
@import "~@lxjx/sass-base/var/index.scss";

// 重置模块
@import "~@lxjx/sass-base/base/normalize.scss";

// 布局模块
@import "~@lxjx/sass-base/base/layout.scss";

// 原子类
@import "~@lxjx/sass-base/base/util-class.scss";

// 网格
@import "~@lxjx/sass-base/base/grid.scss";

// 移动端配置
@import "~@lxjx/sass-base/base/mobile.scss";

// 黑色主题
@import "~@lxjx/sass-base/base/dark.scss";

// 小程序环境的normalize
@import "~@lxjx/sass-base/base/normalize-for-mini-program.scss";
```



### 生成自己的主题色

```
# 执行createCustomVar.js
node node_modules/@lxjx/sass-base/script/createCustomVar.js

# 输入主题色，复制打印到自定义的scss文件中并引入`var/index.scss`
? 请输入主题色: red
$color-1: #ffeae6;
$color-2: #ffafa3;
$color-3: #ff887a;
$color-4: #ff5d52;
$color-5: #ff3029;
$color-6: #ff0000;
$color-7: #d90007;
$color-8: #b3000c;
$color-9: #8c000e;
$color-10: #66000e;
$color: #ff0000;
```

