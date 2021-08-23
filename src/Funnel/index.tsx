/*
 * @Describe: 漏斗图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	FunnelChart
} from 'echarts/charts';

echarts.use(
	[
		FunnelChart
	]
);

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

const Page: React.FC = (props: any) => {
	const { option = {} } = props;

	const hasMock = option && option.series ? false : true;
	let options = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			type: "scroll",
			orient: "horizontal",
			icon: "rect",
			itemWidth: 10,
			itemHeight: 10,
			borderWidth: 0,
			bottom: 0,
			left: "center",
			width: "86%",
		}
	};

	let sourceOption = hasMock ? defaultOption : option;
	options = merge(sourceOption, options);

	return (
		<WrapCharts {...props} option={options} />
	);
};

export default Page;

