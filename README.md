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



### 引入`normalize`、原子类

```shell
import 'style-base'

// or

import 'style-base/main.scss'
```



### 引入sass变量、混合等

```
import 'style-base/ver/index.scss';
```



### 引入其他功能

```
// 网格
//@import "style-base/base/grid.scss";

// 移动端配置
//@import "style-base/base/mobile.scss";

// 对基本样式启用暗色主题
//@import "style-base/base/dark.scss";

// 小程序等环境的normalize
//@import "style-base/base/normalize-for-mini-program.scss";
```



### 生成自己的主题色

```
# 执行createCustomVar.js
node node_modules/style-base/script/createCustomVar.js

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

