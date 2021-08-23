---
title: null
toc: false
order: 0
---
## Home

Demo:
```
/**
 * transform: true // 设置 transform 为 true，可使得内部 position: fixed; 元素相对于 Demo 包裹器定位
 * background: '#fff' // 修改背景色
 * compact: true // 配置 compact 为 true，则会移除所有内边距
 * title: 我是标题 // 通过 title 和 desc 配置 demo 的标题和简介
 * desc: 我是简介，我可以用 `Markdown` 来编写
 * inline: false // 配置 inline 为 true 则不会展示包裹器、直接在文档里嵌入 demo
 * debug: true // 设置 debug 为 true，则该 demo 仅在开发环境下展示、且会有一个特殊标记
 * iframe: true // 设置为数值可控制 iframe 高度
 */
```

```
    ```tsx | preview
    /**
    * transform: true
    * background: '#fff'
    * compact: false
    * title: 我是标题
    * desc: 我是简介，我可以用 `Markdown` 来编写
    * inline: false 
    * debug: true
    * iframe: true
    */

    import React from 'react';

    export default () => <div>我不会飞出去</div>;
    ```
```

## 使用内置组件

<Alert type="info">
  注意，内部暂时只能编写 HTML
</Alert>
 
#### 标签测试 
<Badge>Hello</Badge>
 

<!-- <embed src="../../docs/index.md"></embed> -->

<!-- <code src="../.demos/modal/modal.jsx"></code> -->
