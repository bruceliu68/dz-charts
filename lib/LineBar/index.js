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

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty'),
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2['default'])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

echarts.use([
  _charts.LineChart,
  _charts.BarChart,
  _components.DataZoomComponent,
]); // 内置默认数据

var defaultOption = {
  color: ['#07C790', '#EF6555', '#F7B035', '#2196F3'],
  legend: {
    data: ['通过', '拒绝', '人工审核率', '核查率'],
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
  yAxis: [
    {
      name: '单位：笔数',
    },
    {
      name: '单位：%',
    },
  ],
  series: [
    {
      name: '通过',
      data: [20, 32, 18, 34, 50, 60, 55, 40, 30, 40],
      type: 'bar',
      barMaxWidth: 20,
    },
    {
      name: '拒绝',
      data: [10, 12, 9, 17, 30, 40, 35, 10, 20, 18],
      type: 'bar',
      barMaxWidth: 20,
    },
    {
      name: '人工审核率',
      data: [12, 42, 28, 14, 40, 50, 45, 50, 50, 60],
      type: 'line',
      smooth: true,
      yAxisIndex: 1,
    },
    {
      name: '核查率',
      data: [5, 32, 20, 8, 32, 41, 34, 40, 35, 50],
      type: 'line',
      smooth: true,
      yAxisIndex: 1,
    },
  ],
};

var Page = function Page(props) {
  var _props$option = props.option,
    option = _props$option === void 0 ? {} : _props$option;
  var hasMock = !(option && option.series);
  var options = {
    grid: {
      top: 60,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    legend: {
      right: 0,
      itemWidth: 10,
      itemHeight: 10,
    },
    yAxis: [
      {
        type: 'value',
      },
      {
        type: 'value',
      },
    ],
  };
  var sourceOption = hasMock ? defaultOption : option;

  if (
    sourceOption.series &&
    sourceOption.legend &&
    sourceOption.legend.data &&
    sourceOption.legend.data.length > 0
  ) {
    var legData = [];
    sourceOption.legend.data.forEach(function (item) {
      var itemName = item;

      if (item instanceof Object) {
        itemName = item.name;
      }

      var obj = sourceOption.series.find(function (k) {
        return k.name === itemName;
      });
      var newItem;

      if (obj && obj.name === itemName) {
        if (obj.type === 'line') {
          newItem = {
            name: item,
            icon: 'circle',
            borderWidth: 0,
          };
        } else if (obj.type === 'bar') {
          newItem = {
            name: item,
            icon: 'rect',
            borderWidth: 0,
          };
        }
      }

      if (item instanceof Object) {
        newItem = _objectSpread(_objectSpread({}, newItem), item);
      }

      legData.push(newItem);
    });
    sourceOption.legend.data = legData;
  }

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
