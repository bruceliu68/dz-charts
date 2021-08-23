/*
 * @Describe: 饼图
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";

import {
	PieChart
} from 'echarts/charts';

echarts.use(
	[
		PieChart
	]
);

// 内置默认数据
const defaultOption = {
	legend: {
		data: ['需求阶段', '开发阶段', '验证阶段', '审批阶段', '投产阶段', "下线归档", '未知']
	},
	series: {
		name: "各阶段模型统计",
		data: [
			{ value: 100, name: '需求阶段' },
			{ value: 50, name: '开发阶段' },
			{ value: 40, name: '验证阶段' },
			{ value: 30, name: '审批阶段' },
			{ value: 100, name: '投产阶段' },
			{ value: 20, name: '下线归档' },
			{ value: 10, name: '未知' }
		]
	}
};

const Page: React.FC = (props: any) => {
	const { option = {} } = props;

	let hasMock = true;
	let seriesObj = true;
	if (option && option.series) {
		hasMock = false;
		if (option.series.data) {
			seriesObj = true;
		} else if (option.series instanceof Array) {
			seriesObj = false;
		}
	}
	let options = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
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
			right: 0,
			width: "86%",
		},
		series: seriesObj ? {
			type: 'pie',
			radius: '55%',
			center: ['50%', '50%'],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			label: {
				color: "#5D7092"
			}
		} : []
	};

	let sourceOption = hasMock ? defaultOption : option;
	options = merge(sourceOption, options);

	return (
		<WrapCharts {...props} option={options} />
	);
};

export default Page;

