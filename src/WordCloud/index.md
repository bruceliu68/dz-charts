---
title: null
toc: false
order: 8
---

## 词云
<Alert type="info">
  option配置参考：https://github.com/ecomfe/echarts-wordcloud
</Alert>

```tsx | preview
/**
 * background: '#fff'
 * compact: false
 * title: 词云
 * desc: 词云demo
 * inline: false
 */

import React from 'react';
import { WordCloud } from 'dz-charts';

// 内置默认数据
const defaultOption = {
	series: {
		data: [
			{ name: " 张三", value: 30 },
			{ name: " 李四", value: 24 },
			{ name: " 王五", value: 21 },
			{ name: " 娜拉", value: 10 },
			{ name: " 李白", value: 14 },
			{ name: " 成吉思汗", value: 11 },
			{ name: " 李世民", value: 21 },
			{ name: " 陈宫", value: 33 },
			{ name: " 成龙", value: 8 },
			{ name: " 李小龙", value: 9 },
			{ name: " 乌兰巴托", value: 12 },
			{ name: " 小燕子", value: 34 },
			{ name: " 古天乐", value: 12 },
			{ name: " 罗志祥", value: 16 },
			{ name: " 周扬青", value: 19 },
			{ name: " 杨蛋蛋", value: 28 },
			{ name: " 王宝强", value: 24 },
			{ name: " 马蓉", value: 11 },
		],
	}
};

export default () => <WordCloud height={400} />;
```

## 词云demo2

```tsx | preview
/**
 * background: '#fff'
 * compact: false
 * title: 词云
 * desc: 词云demo2
 * inline: false
 */

import React from 'react';
import { WordCloud } from 'dz-charts';

const option = {
	series: {
		gridSize: 15, // 网格尺寸
		// 布局形状：'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
		shape: "diamond", 
		sizeRange: [12, 40], // 尺寸范围
		data: [
			{ name: " 张三", value: 30 },
			{ name: " 李四", value: 24 },
			{ name: " 王五", value: 21 },
			{ name: " 娜拉", value: 10 },
			{ name: " 李白", value: 14 },
			{ name: " 成吉思汗", value: 11 },
			{ name: " 李世民", value: 21 },
			{ name: " 陈宫", value: 33 },
			{ name: " 成龙", value: 8 },
			{ name: " 李小龙", value: 9 },
			{ name: " 乌兰巴托", value: 12 },
			{ name: " 小燕子", value: 34 },
			{ name: " 古天乐", value: 12 },
			{ name: " 罗志祥", value: 16 },
			{ name: " 周扬青", value: 19 },
			{ name: " 杨蛋蛋", value: 28 },
			{ name: " 王宝强", value: 24 },
			{ name: " 马蓉", value: 11 }
		]
	}
};

export default () => <WordCloud height={400} option={option} />;
```
