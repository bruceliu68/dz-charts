---
title: null
toc: false
order: 3
---

## 折柱图

```tsx | preview
/**
 * background: '#fff'
 * compact: false
 * title: 折柱图
 * desc: 基础折柱图
 * inline: false
 */

import React from 'react';
import { LineBar } from 'dz-charts';

// 内置默认数据
const option = {
    color: ["#07C790", "#EF6555", "#F7B035", "#2196F3"],
    legend: {
        data: ["通过", "拒绝", "人工审核率", "核查率"]
    },
    xAxis: {
        data: ['12/11', '12/12', '12/13', '12/14', '12/15', '12/16', '12/17', '12/18', '12/19', '12/20']
    },
    yAxis: [
        {
            name: "单位：笔数"
        },
        {
            name: "单位：%"
        }
    ],
    series: [
        {
            name: "通过",
            data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40],
            type: 'bar',
            barMaxWidth: 20
        },
        {
            name: "拒绝",
            data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
            type: 'bar',
            barMaxWidth: 20
        },
        {
            name: "人工审核率",
            data: [12, 42, 28, 14, 40, 50, 45, 50, 50, 60],
            type: 'line',
            smooth: true,
            yAxisIndex: 1
        },
        {
            name: "核查率",
            data: [5, 32, 20, 8, 32, 41, 34, 40, 35, 50],
            type: 'line',
            smooth: true,
            yAxisIndex: 1
        }
    ]
};

export default () => <LineBar />;
```

