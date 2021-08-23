---
title: null
toc: false
order: 2
---

## 柱状图

```tsx | preview
/**
 * background: '#fff'
 * compact: false
 * title: 柱状图
 * desc: 基础柱状图
 * inline: false
 */

import React from 'react';
import { Bar } from 'dz-charts';

// 内置默认数据
const defaultOption = {
	title: {
		text: "贷款金额"
	},
	legend: {
		type: "scroll",
		data: ["申请金额", "实际放款金额"]
	},
	xAxis: {
		data: ["12/11", "12/12", "12/13", "12/14", "12/15", "12/16", "12/17", "12/18", "12/19", "12/20"]
	},
	yAxis: {
		name: "单位：万"
	},
	series: [
		{
			name: "申请金额",
			data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40],
			type: "bar",
			barMaxWidth: 20
		},
		{
			name: "实际放款金额",
			data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
			type: "bar",
			barMaxWidth: 20
		}
	]
};

export default () => <Bar />;
```

## 堆叠图

```tsx | preview
/**
 * background: '#fff'
 * compact: false
 * title: 堆叠图
 * desc: 基础堆叠图
 * inline: false
 */

import React from 'react';
import { Bar } from 'dz-charts';

const option = {
	title: {
		text: "贷款金额"
	},
	legend: {
		type: "scroll",
		data: ["申请金额", "实际放款金额"]
	},
	xAxis: {
		data: ["12/11", "12/12", "12/13", "12/14", "12/15", "12/16", "12/17", "12/18", "12/19", "12/20"]
	},
	yAxis: {
		name: "单位：万"
	},
	series: [
		{
			name: "申请金额",
			data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40],
			type: "bar",
			barMaxWidth: 20,
            stack: "总量"
		},
		{
			name: "实际放款金额",
			data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
			type: "bar",
			barMaxWidth: 20,
            stack: "总量"
		}
	]
};

export default () => <Bar option={option} />;
```
