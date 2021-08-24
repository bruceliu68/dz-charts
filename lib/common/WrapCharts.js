'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray'),
);

var _react = _interopRequireWildcard(require('react'));

var echarts = _interopRequireWildcard(require('echarts/core'));

var _components = require('echarts/components');

var _renderers = require('echarts/renderers');

require('../theme/default');

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/*
 * @Describe: 图表包裹组件
 */
// import components
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
// Register the required components
echarts.use([
  _components.TitleComponent,
  _components.TooltipComponent,
  _components.GridComponent,
  _components.LegendComponent,
  _components.LegendScrollComponent,
  _renderers.CanvasRenderer,
]); // 默认主题

var Page = function Page(props) {
  var _props$option = props.option,
    option = _props$option === void 0 ? {} : _props$option,
    _props$height = props.height,
    height = _props$height === void 0 ? 300 : _props$height,
    _props$theme = props.theme,
    theme = _props$theme === void 0 ? 'default' : _props$theme,
    _props$geo = props.geo,
    geo = _props$geo === void 0 ? {} : _props$geo,
    _props$geoName = props.geoName,
    geoName = _props$geoName === void 0 ? '' : _props$geoName,
    getChartInstance = props.getChartInstance;
  var ref = (0, _react.useRef)();

  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
    myChart = _useState2[0],
    setMyChart = _useState2[1];

  if (myChart) {
    myChart.setOption(option, true);
  }

  (0, _react.useEffect)(
    function () {
      if (myChart) {
        myChart.clear();
        myChart.dispose();
      }

      var current = ref.current;
      myChart = echarts.init(current, theme); // 注册地图数据

      if (Object.keys(geo).length > 0) {
        echarts.registerMap(geoName, geo);
      }

      myChart.setOption(option, true);
      setMyChart(myChart);
      getChartInstance && getChartInstance(myChart);

      function resize() {
        myChart.resize();
      }

      window.addEventListener('resize', resize);
      return function () {
        window.removeEventListener('resize', resize);

        if (myChart) {
          myChart.clear();
          myChart.dispose();
        }
      };
    },
    [theme],
  );
  return /*#__PURE__*/ _react['default'].createElement('div', {
    ref: ref,
    style: {
      height: height,
    },
  });
};

var _default = Page;
exports['default'] = _default;
