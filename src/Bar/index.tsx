/*
 * @Describe: 柱状图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	BarChart
} from 'echarts/charts';

import {
	DataZoomComponent
} from 'echarts/components';

echarts.use(
	[
		BarChart,
		DataZoomComponent
	]
);

// 内置默认数据
const defaultOption = {
	title: {
		text: "贷款金额"
	},
	legend: {
		data: ["申请金额", "实际放款金额"]
	},
	xAxis: {
		data: ['12/11', '12/12', '12/13', '12/14', '12/15', '12/16', '12/17', '12/18', '12/19', '12/20']
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

const Page: React.FC = (props: any) => {
	const { option = {} } = props;

	const hasMock = !(option && option.series);
	let options = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "shadow"
			},
		},
		legend: {
			right: 0,
			icon: "rect",
			itemWidth: 10,
			itemHeight: 10,
			borderWidth: 0
		},
		yAxis: {
			type: 'value'
		}
	};

	let sourceOption = hasMock ? defaultOption : option;
	options = merge(sourceOption, options);

	return (
		<WrapCharts {...props} option={options} />
	);
};

export default Page;

