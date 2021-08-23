/*
 * @Describe: 词云
 */

import React from "react";
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";
import 'echarts-wordcloud';

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

const Page: React.FC = (props: any) => {
	const { option = {} } = props;

	const hasMock = option && option.series ? false : true;
	let options = {
		tooltip: {},
		series: {
			type: "wordCloud",
			// Shape can be 'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
			shape: 'circle',
			gridSize: 15, // 网格尺寸
			sizeRange: [12, 40], // 尺寸范围
			textStyle: {
				fontFamily: 'sans-serif',
				fontWeight: 'bold',
				// Color can be a callback function or a color string
				color: function () {
					// Random color
					return 'rgb(' + [
						Math.round(Math.random() * 160),
						Math.round(Math.random() * 160),
						Math.round(Math.random() * 160)
					].join(',') + ')';
				}
			},
			emphasis: {
				focus: 'self',

				textStyle: {
					shadowBlur: 10,
					shadowColor: '#333'
				}
			},
		},
		grid: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
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

