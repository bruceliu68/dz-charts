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
 * @Describe: 饼图
 */
echarts.use([_charts.PieChart]); // 内置默认数据

var defaultOption = {
  legend: {
    data: [
      '需求阶段',
      '开发阶段',
      '验证阶段',
      '审批阶段',
      '投产阶段',
      '下线归档',
      '未知',
    ],
  },
  series: {
    name: '各阶段模型统计',
    data: [
      {
        value: 100,
        name: '需求阶段',
      },
      {
        value: 50,
        name: '开发阶段',
      },
      {
        value: 40,
        name: '验证阶段',
      },
      {
        value: 30,
        name: '审批阶段',
      },
      {
        value: 100,
        name: '投产阶段',
      },
      {
        value: 20,
        name: '下线归档',
      },
      {
        value: 10,
        name: '未知',
      },
    ],
  },
};

var Page = function Page(props) {
  var _props$option = props.option,
    option = _props$option === void 0 ? {} : _props$option;
  var hasMock = true;
  var seriesObj = true;

  if (option && option.series) {
    hasMock = false;

    if (option.series.data) {
      seriesObj = true;
    } else if (option.series instanceof Array) {
      seriesObj = false;
    }
  }

  var options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      type: 'scroll',
      orient: 'horizontal',
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      borderWidth: 0,
      bottom: 0,
      left: 'center',
      right: 0,
      width: '86%',
    },
    series: seriesObj
      ? {
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            color: '#5D7092',
          },
        }
      : [],
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
