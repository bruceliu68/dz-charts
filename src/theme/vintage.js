(function (root, factory) {
    factory(exports, require('echarts/lib/echarts'));
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    var colorPalette = ['#d87c7c', '#919e8b', '#d7ab82', '#6e7074', '#61a0a8', '#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b'];
    echarts.registerTheme('vintage', {
        title: {
            top: 5,
            left: "center"
        },
        legend: {
            top: 10,
            right: 10
        },
        color: colorPalette,
        backgroundColor: '#fef8ef',
        graph: {
            color: colorPalette
        },
        grid: {
            top: 45,
            left: 30,
            right: 30,
            bottom: 10,
            containLabel: true
        },
    });
}));