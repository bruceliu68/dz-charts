'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends'),
);

var _react = _interopRequireDefault(require('react'));

var _util = require('../common/util');

var _WrapCharts = _interopRequireDefault(require('../common/WrapCharts'));

require('echarts-wordcloud');

/*
 * @Describe: 词云
 */
// 内置默认数据
var defaultOption = {
  series: {
    data: [
      {
        name: ' 张三',
        value: 30,
      },
      {
        name: ' 李四',
        value: 24,
      },
      {
        name: ' 王五',
        value: 21,
      },
      {
        name: ' 娜拉',
        value: 10,
      },
      {
        name: ' 李白',
        value: 14,
      },
      {
        name: ' 成吉思汗',
        value: 11,
      },
      {
        name: ' 李世民',
        value: 21,
      },
      {
        name: ' 陈宫',
        value: 33,
      },
      {
        name: ' 成龙',
        value: 8,
      },
      {
        name: ' 李小龙',
        value: 9,
      },
      {
        name: ' 乌兰巴托',
        value: 12,
      },
      {
        name: ' 小燕子',
        value: 34,
      },
      {
        name: ' 古天乐',
        value: 12,
      },
      {
        name: ' 罗志祥',
        value: 16,
      },
      {
        name: ' 周扬青',
        value: 19,
      },
      {
        name: ' 杨蛋蛋',
        value: 28,
      },
      {
        name: ' 王宝强',
        value: 24,
      },
      {
        name: ' 马蓉',
        value: 11,
      },
    ],
  },
};

var Page = function Page(props) {
  var _props$option = props.option,
    option = _props$option === void 0 ? {} : _props$option;
  var hasMock = option && option.series ? false : true;
  var options = {
    tooltip: {},
    series: {
      type: 'wordCloud',
      // Shape can be 'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
      shape: 'circle',
      gridSize: 15,
      // 网格尺寸
      sizeRange: [12, 40],
      // 尺寸范围
      textStyle: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        // Color can be a callback function or a color string
        color: function color() {
          // Random color
          return (
            'rgb(' +
            [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
            ].join(',') +
            ')'
          );
        },
      },
      emphasis: {
        focus: 'self',
        textStyle: {
          shadowBlur: 10,
          shadowColor: '#333',
        },
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
    }),
  );
};

var _default = Page;
exports['default'] = _default;
