/*
 * @Describe: 仪表盘图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	GaugeChart
} from 'echarts/charts';

echarts.use(
	[
		GaugeChart
	]
);

// 内置默认数据
const defaultOption = {
	series: [{
		type: 'gauge',
		anchor: {
			show: true,
			showAbove: true,
			size: 18,
			itemStyle: {
				color: '#FAC858'
			}
		},
		pointer: {
			icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
			width: 8,
			length: '80%',
			offsetCenter: [0, '8%']
		},

		progress: {
			show: true,
			overlap: true,
			roundCap: true
		},
		axisLine: {
			roundCap: true
		},
		data: [{
			value: 20,
			name: '完成率',
			title: {
				offsetCenter: ['-40%', '80%']
			},
			detail: {
				offsetCenter: ['-40%', '95%']
			}
		},
		{
			value: 40,
			name: '达标率',
			title: {
				offsetCenter: ['0%', '80%']
			},
			detail: {
				offsetCenter: ['0%', '95%']
			}
		},
		{
			value: 60,
			name: '优秀率',
			title: {
				offsetCenter: ['40%', '80%']
			},
			detail: {
				offsetCenter: ['40%', '95%']
			}
		}
		],
		title: {
			fontSize: 14
		},
		detail: {
			width: 40,
			height: 14,
			fontSize: 14,
			color: '#fff',
			backgroundColor: 'auto',
			borderRadius: 3,
			formatter: '{value}%'
		}
	}]
};

const Page: React.FC = (props: any) => {
	const { option = {} } = props;

	const hasMock = option && option.series ? false : true;
	let options = {
		grid: {
			top: 10,
			left: 10,
			right: 10,
			bottom: 10,
			containLabel: true
		},
	};

	let sourceOption = hasMock ? defaultOption : option;
	options = merge(sourceOption, options);

	return (
		<WrapCharts {...props} option={options} />
	);
};

export default Page;

