/*
 * @Describe: 词云
 */

import React from "react";
import { merge } from "../common/util";
import WrapCharts from "../common/WrapCharts";
import 'echarts-liquidfill';

// 内置默认数据
const defaultOption = {
	series: {
		data: [0.5, 0.4, 0.3]
	}
};

const Page: React.FC = (props: any) => {
	const { option = {} } = props;

	const hasMock = option && option.series ? false : true;
	let options = {
		tooltip: {
			show: false
		},
		series: {
			type: 'liquidFill',
			radius: '90%'
		}
	};

	let sourceOption = hasMock ? defaultOption : option;
	options = merge(sourceOption, options);

	return (
		<WrapCharts {...props} option={options} />
	);
};

export default Page;

