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

var _china = _interopRequireDefault(require('./china'));

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
 * @Describe: 地图组件
 */
echarts.use([
  _charts.MapChart,
  _charts.ScatterChart,
  _charts.LinesChart,
  _charts.EffectScatterChart,
  _components.GeoComponent,
  _components.VisualMapComponent,
]); // 内置默认数据

var features = _china['default'].features; // 模拟接口返回数据

var data = [
  {
    name: '南海诸岛',
    value: 2,
    transRate: 2,
  },
  {
    name: '北京',
    value: 54,
    transRate: 54.12,
  },
  {
    name: '天津',
    value: 13,
    transRate: 14.12,
  },
  {
    name: '上海',
    value: 40,
    transRate: 4.12,
  },
  {
    name: '重庆',
    value: 75,
    transRate: 24.12,
  },
  {
    name: '河北',
    value: 13,
    transRate: 12.12,
  },
  {
    name: '河南',
    value: 83,
    transRate: 54.01,
  },
  {
    name: '云南',
    value: 11,
    transRate: 14.12,
  },
  {
    name: '辽宁',
    value: 19,
    transRate: 34.12,
  },
  {
    name: '湖南',
    value: 69,
    transRate: 4.12,
  },
  {
    name: '安徽',
    value: 60,
    transRate: 4.12,
  },
  {
    name: '山东',
    value: 39,
    transRate: 4.12,
  },
  {
    name: '江苏',
    value: 31,
    transRate: 4.12,
  },
  {
    name: '浙江',
    value: 104,
    transRate: 54.12,
  },
  {
    name: '江西',
    value: 36,
    transRate: 4.12,
  },
  {
    name: '湖北',
    value: 105,
    transRate: 54.12,
  },
  {
    name: '广西',
    value: 33,
    transRate: 4.12,
  },
  {
    name: '甘肃',
    value: 7,
    transRate: 4.12,
  },
  {
    name: '山西',
    value: 9,
    transRate: 4.12,
  },
  {
    name: '内蒙古',
    value: 7,
    transRate: 4.12,
  },
  {
    name: '陕西',
    value: 22,
    transRate: 4.12,
  },
  {
    name: '吉林',
    value: 4,
    transRate: 4.12,
  },
  {
    name: '福建',
    value: 18,
    transRate: 4.12,
  },
  {
    name: '贵州',
    value: 5,
    transRate: 4.12,
  },
]; // 设置4个分段

var maxNum = Math.max.apply(
  Math,
  data.map(function (o) {
    return o.value;
  }),
);
var minNum = Math.min.apply(
  Math,
  data.map(function (o) {
    return o.value;
  }),
);
var intervalNum = parseInt(''.concat((maxNum - minNum) / 4), 10);
var dataList = []; // 配置分段颜色

data.forEach(function (item) {
  var obj = features.find(function (k) {
    return item.name.includes(k.properties.name);
  });
  var transAddr = item.name;
  if (obj) transAddr = obj.properties.name;
  var areaColor = '#87CEFA';

  if (item.value > 0 && item.value <= intervalNum) {
    areaColor = '#B0DFA5';
  } else if (item.value > intervalNum && item.value <= intervalNum * 2) {
    areaColor = '#E1F21A';
  } else if (item.value > intervalNum * 2 && item.value <= intervalNum * 3) {
    areaColor = '#FF7700';
  } else if (item.value > intervalNum * 3) {
    areaColor = '#FF3E00';
  }

  dataList.push({
    name: transAddr,
    value: item.value,
    transRate: item.transRate,
    itemStyle: {
      areaColor: areaColor,
    },
    emphasis: {
      itemStyle: {
        areaColor: areaColor,
        shadowBlur: 10,
        borderWidth: 0,
      },
    },
  });
});
var defaultOption = {
  tooltip: {
    formatter: function formatter(params) {
      return '<div style="text-align: center">'
        .concat(params.name, '</div><div style="text-align: center">')
        .concat(params.data ? params.data.transRate : 0, '%</div>');
    },
    backgroundColor: '#ffffff',
    borderColor: '#126BFB',
    borderWidth: 1,
    padding: [12, 14],
    textStyle: {
      color: '#17233D',
      fontSize: 14,
      lineHeight: 20,
    },
  },
  series: [
    {
      name: '交易金额地域分布',
      type: 'map',
      map: 'china',
      roam: !1,
      scaleLimit: {
        min: 1,
        max: 1.1,
      },
      zoom: 1.1,
      top: 20,
      label: {
        show: false,
      },
      itemStyle: {
        areaColor: '#87CEFA',
        borderColor: '#009DFF',
        borderType: 'dotted',
      },
      emphasis: {
        label: {
          show: false,
        },
        itemStyle: {
          areaColor: '#87CEFA',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 0,
        },
      },
      data: dataList,
    },
  ],
};

var Page = function Page(props) {
  var _props$option = props.option,
    option = _props$option === void 0 ? {} : _props$option,
    _props$geo = props.geo,
    geo = _props$geo === void 0 ? _china['default'] : _props$geo,
    _props$geoName = props.geoName,
    geoName = _props$geoName === void 0 ? 'china' : _props$geoName;
  var hasMock = option && option.series ? false : true;
  var options = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function formatter(params) {
        return params.seriesName + '<br/>' + params.name;
      },
    },
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      containLabel: true,
    },
  };
  var sourceOption = hasMock ? defaultOption : option;
  options = (0, _util.merge)(sourceOption, options);
  return /*#__PURE__*/ _react['default'].createElement(
    _WrapCharts['default'],
    (0, _extends2['default'])({}, props, {
      option: options,
      geo: geo,
      geoName: geoName,
    }),
  );
};

var _default = Page;
exports['default'] = _default;
