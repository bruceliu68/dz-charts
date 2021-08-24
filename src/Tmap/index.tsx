/*
 * @Describe: 地图组件
 */

import React from "react";
import * as echarts from 'echarts/core';
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";
import chinaJson from "./china";

import {
	MapChart,
	ScatterChart,
	LinesChart,
	EffectScatterChart
} from 'echarts/charts';

import {
	GeoComponent,
	VisualMapComponent
} from 'echarts/components';

echarts.use(
	[
		MapChart,
		ScatterChart,
		LinesChart,
		EffectScatterChart,
		GeoComponent,
		VisualMapComponent
	]
);

// 内置默认数据
const features = chinaJson.features;
// 模拟接口返回数据
const data = [
	{
		name: "南海诸岛",
		value: 2,
		transRate: 2
	},
	{
		name: "北京",
		value: 54,
		transRate: 54.12
	},
	{
		name: "天津",
		value: 13,
		transRate: 14.12
	},
	{
		name: "上海",
		value: 40,
		transRate: 4.12
	},
	{
		name: "重庆",
		value: 75,
		transRate: 24.12
	},
	{
		name: "河北",
		value: 13,
		transRate: 12.12
	},
	{
		name: "河南",
		value: 83,
		transRate: 54.01
	},
	{
		name: "云南",
		value: 11,
		transRate: 14.12
	},
	{
		name: "辽宁",
		value: 19,
		transRate: 34.12
	},
	{
		name: "湖南",
		value: 69,
		transRate: 4.12
	},
	{
		name: "安徽",
		value: 60,
		transRate: 4.12
	},
	{
		name: "山东",
		value: 39,
		transRate: 4.12
	},
	{
		name: "江苏",
		value: 31,
		transRate: 4.12
	},
	{
		name: "浙江",
		value: 104,
		transRate: 54.12
	},
	{
		name: "江西",
		value: 36,
		transRate: 4.12
	},
	{
		name: "湖北",
		value: 105,
		transRate: 54.12
	},
	{
		name: "广西",
		value: 33,
		transRate: 4.12
	},
	{
		name: "甘肃",
		value: 7,
		transRate: 4.12
	},
	{
		name: "山西",
		value: 9,
		transRate: 4.12
	},
	{
		name: "内蒙古",
		value: 7,
		transRate: 4.12
	},
	{
		name: "陕西",
		value: 22,
		transRate: 4.12
	},
	{
		name: "吉林",
		value: 4,
		transRate: 4.12
	},
	{
		name: "福建",
		value: 18,
		transRate: 4.12
	},
	{
		name: "贵州",
		value: 5,
		transRate: 4.12
	}
];
// 设置4个分段
const maxNum = Math.max.apply(Math, data.map((o) => { return o.value; }));
const minNum = Math.min.apply(Math, data.map((o) => { return o.value; }));
const intervalNum = parseInt(`${(maxNum - minNum) / 4}`, 10);

let dataList: any[] = [];

// 配置分段颜色
data.forEach(item => {
	const obj = features.find((k: any) => item.name.includes(k.properties.name));
	let transAddr = item.name;
	if (obj) transAddr = obj.properties.name;
	let areaColor = "#87CEFA";
	if (item.value > 0 && item.value <= intervalNum) {
		areaColor = "#B0DFA5";
	} else if (item.value > intervalNum && item.value <= intervalNum * 2) {
		areaColor = "#E1F21A";
	} else if (item.value > intervalNum * 2 && item.value <= intervalNum * 3) {
		areaColor = "#FF7700";
	} else if (item.value > intervalNum * 3) {
		areaColor = "#FF3E00";
	}
	dataList.push({
		name: transAddr,
		value: item.value,
		transRate: item.transRate,
		itemStyle: {
			areaColor: areaColor
		},
		emphasis: {
			itemStyle: {
				areaColor: areaColor,
				shadowBlur: 10,
				borderWidth: 0
			}
		}
	});
});
const defaultOption = {
	tooltip: {
		formatter: (params: any) => {
			return `<div style="text-align: center">${params.name}</div><div style="text-align: center">${params.data ? params.data.transRate : 0}%</div>`;
		},
		backgroundColor: "#ffffff",
		borderColor: "#126BFB",
		borderWidth: 1,
		padding: [12, 14],
		textStyle: {
			color: "#17233D",
			fontSize: 14,
			lineHeight: 20
		}
	},
	series: [{
		name: "交易金额地域分布",
		type: "map",
		map: "china",
		roam: !1,
		scaleLimit: {
			min: 1,
			max: 1.1
		},
		zoom: 1.1,
		top: 20,
		label: {
			show: false
		},
		itemStyle: {
			areaColor: "#87CEFA",
			borderColor: "#009DFF",
			borderType: "dotted"
		},
		emphasis: {
			label: {
				show: false
			},
			itemStyle: {
				areaColor: "#87CEFA",
				shadowColor: "rgba(0, 0, 0, 0.5)",
				shadowBlur: 0
			}
		},
		data: dataList
	}]
};

const Page: React.FC = (props: any) => {
	const { option = {}, geo = chinaJson, geoName = "china" } = props;

	const hasMock = option && option.series ? false : true;
	let options = {
		tooltip: {
			trigger: 'item',
			showDelay: 0,
			transitionDuration: 0.2,
			formatter: function (params: any) {
				return params.seriesName + '<br/>' + params.name;
			}
		},
		grid: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			containLabel: true
		}
	};

	let sourceOption = hasMock ? defaultOption : option;
	options = merge(sourceOption, options);

	return (
		<WrapCharts {...props} option={options} geo={geo} geoName={geoName} />
	);
};

export default Page;

