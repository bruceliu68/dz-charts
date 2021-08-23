/*
 * @Describe: 折柱图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	LineChart,
	BarChart
} from 'echarts/charts';

import {
	DataZoomComponent
} from 'echarts/components';

echarts.use(
	[
		LineChart,
		BarChart,
		DataZoomComponent
	]
);

// 内置默认数据
const defaultOption = {
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

const Page: React.FC = (props: any) => {
	const { option = {} } = props;

	const hasMock = !(option && option.series);

	let options = {
		grid: {
			top: 60
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		legend: {
			right: 0,
			itemWidth: 10,
			itemHeight: 10,
		},
		yAxis: [
			{
				type: 'value'
			},
			{
				type: 'value'
			}
		]
	};

	let sourceOption = hasMock ? defaultOption : option;

	if (sourceOption.series && sourceOption.legend && sourceOption.legend.data && sourceOption.legend.data.length > 0) {
		let legData: any[] = [];
		sourceOption.legend.data.forEach((item: any) => {
			let itemName = item;
			if (item instanceof Object) {
				itemName = item.name;
			}
			const obj = sourceOption.series.find((k: any) => k.name === itemName);
			let newItem;
			if (obj && obj.name === itemName) {
				if (obj.type === "line") {
					newItem = {
						name: item,
						icon: "circle",
						borderWidth: 0
					};
				} else if (obj.type === "bar") {
					newItem = {
						name: item,
						icon: "rect",
						borderWidth: 0
					};
				}
			}
			if (item instanceof Object) {
				newItem = {
					...newItem,
					...item
				};
			}
			legData.push(newItem);
		});

		sourceOption.legend.data = legData;
	}

	options = merge(sourceOption, options);

	return (
		<WrapCharts {...props} option={options} />
	);
};

export default Page;

