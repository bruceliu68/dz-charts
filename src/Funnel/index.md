---
title: null
toc: false
order: 6
---

## 漏斗图

```tsx | preview
/**
 * background: '#fff'
 * compact: false
 * title: 漏斗图
 * desc: 基础漏斗图
 * inline: false
 */

import React from 'react';
import { Funnel } from 'dz-charts';

// 内置默认数据
const defaultOption = {
	legend: {
		data: ['展现', '点击', '访问', '咨询', '订单']
	},
	series: [
		{
			name: '网站情况',
			type: 'funnel',
			label: {
				show: true,
				position: 'inside'
			},
			data: [
				{ value: 100, name: '展现' },
				{ value: 80, name: '点击' },
				{ value: 60, name: '访问' },
				{ value: 40, name: '咨询' },
				{ value: 20, name: '订单' },
			]
		}
	]
};


export default () => <Funnel height={500} />;
```
