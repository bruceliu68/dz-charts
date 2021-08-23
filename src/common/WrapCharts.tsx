/*
 * @Describe: 图表包裹组件
 */

import React, { useEffect, useRef, useState } from "react";
import * as echarts from 'echarts/core';

// import components
import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	LegendComponent,
	LegendScrollComponent
} from 'echarts/components';

// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
	CanvasRenderer,
	// SVGRenderer,
} from 'echarts/renderers';

// Register the required components
echarts.use(
	[
		TitleComponent,
		TooltipComponent,
		GridComponent,
		LegendComponent,
		LegendScrollComponent,
		CanvasRenderer
	]
);

// 默认主题
import "../theme/default";

const Page: React.FC = (props: any) => {
	const { option = {}, height = 300, theme = "default", geo = {}, geoName = "", getChartInstance } = props;
	const ref = useRef<any>();

	let [myChart, setMyChart] = useState<any>();
	if (myChart) {
		myChart.setOption(option, true);
	}

	useEffect(() => {
		if (myChart) {
			myChart.clear();
			myChart.dispose();
		}
		const { current } = ref;
		myChart = echarts.init(current, theme);

		// 注册地图数据
		if (Object.keys(geo).length > 0) {
			echarts.registerMap(geoName, geo);
		}

		myChart.setOption(option, true);
		setMyChart(myChart);
		getChartInstance && getChartInstance(myChart);

		function resize() {
			myChart.resize();
		}

		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
			if (myChart) {
				myChart.clear();
				myChart.dispose();
			}
		};
	}, [theme]);

	return (
		<div ref={ref} style={{ height }}></div>
	);
};

export default Page;

