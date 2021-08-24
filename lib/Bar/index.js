'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends'),
);

var _react = _interopRequireDefault(require('react'));

var echarts = _interopRequireWildcard(require('echarts/core'));

var _util = require('../common/util');

var _WrapCharts = _interopRequireDefault(require('../common/WrapCharts'));

var _charts = require('echarts/charts');

var _components = require('echarts/components');

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
 * @Describe: 柱状图
 */
echarts.use([_charts.BarChart, _components.DataZoomComponent]); // 内置默认数据

var defaultOption = {
  title: {
    text: '贷款金额',
  },
  legend: {
    data: ['申请金额', '实际放款金额'],
  },
  xAxis: {
    data: [
      '12/11',
      '12/12',
      '12/13',
      '12/14',
      '12/15',
      '12/16',
      '12/17',
      '12/18',
      '12/19',
      '12/20',
    ],
  },
  yAxis: {
    name: '单位：万',
  },
  series: [
    {
      name: '申请金额',
      data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40],
      type: 'bar',
      barMaxWidth: 20,
    },
    {
      name: '实际放款金额',
      data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
      type: 'bar',
      barMaxWidth: 20,
    },
  ],
};

var Page = function Page(props) {
  var _props$option = props.option,
    option = _props$option === void 0 ? {} : _props$option;
  var hasMock = !(option && option.series);
  var options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      right: 0,
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      borderWidth: 0,
    },
    yAxis: {
      type: 'value',
    },
  };
  var sourceOption = hasMock ? defaultOption : option;
  options = (0, _util.merge)(sourceOption, options);
  return /*#__PURE__*/ _react['default'].createElement(
    _WrapCharts['default'],
    (0, _extends2['default'])({}, props, {
      option: options,
    }),
  );
};

var _default = Page;
exports['default'] = _default;
