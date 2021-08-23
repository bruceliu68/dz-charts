
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
    echarts.registerTheme('default', {
        "color": [
            "#5B8FF9",
            "#5AD8A6",
            "#5D7092",
            "#F6BD16",
            "#E86452",
            "#6DC8EC",
            "#945FB9",
            "#FF9845",
            "#1E9493",
            "#FF99C3"
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "title": {
            left: "center",
            "textStyle": {
                "color": "#8b919e"
            },
            "subtextStyle": {
                "color": "#8b919e"
            }
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 1
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 2
                }
            },
            "symbolSize": 3,
            "symbol": "emptyCircle"
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 1
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 2
                }
            },
            "symbolSize": 3,
            "symbol": "emptyCircle"
        },
        "bar": {
            "itemStyle": {
                "normal": {
                    "barBorderWidth": 0,
                    "barBorderColor": "#cccccc"
                },
                "emphasis": {
                    "barBorderWidth": 0,
                    "barBorderColor": "#cccccc"
                }
            }
        },
        "pie": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#d87a80",
                    "color0": "#2ec7c9",
                    "borderColor": "#d87a80",
                    "borderColor0": "#2ec7c9",
                    "borderWidth": 1
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#cccccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "color": "#aaaaaa"
                }
            },
            "symbolSize": 3,
            "symbol": "emptyCircle",
            "color": [
                "#007aff",
                "#727df5",
                "#4fd6a7",
                "#00c5dc",
                "#58c7ff",
                "#ffb721",
                "#ff7878",
                "#fbdb59"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#dddddd",
                    "borderColor": "#eeeeee",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(254,153,78,1)",
                    "borderColor": "#444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#d87a80"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#dddddd",
                    "borderColor": "#eeeeee",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(254,153,78,1)",
                    "borderColor": "#444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#d87a80"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#8b919e"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#8b919e"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#8b919e"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#8b919e"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    type: "dashed",
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,1)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#008acd"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#8b919e"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#ffffff"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#008acd"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#8b919e"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#8b919e"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#2ec7c9"
                },
                "emphasis": {
                    "borderColor": "#18a4a6"
                }
            }
        },
        "legend": {
            "top": 0,
            "right": 0,
            "textStyle": {
                "color": "#909399"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#8b919e",
                    "width": "1"
                },
                "crossStyle": {
                    "color": "#8b919e",
                    "width": "1"
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#008acd",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#008acd",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#a9334c"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#008acd",
                    "borderColor": "#008acd",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#008acd",
                    "borderColor": "#008acd",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#2ec7c9",
                "borderColor": "rgba(46,199,201,0.4)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#8b919e"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#8b919e"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#5ab1ef",
                "#e0ffff"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(239,239,255,1)",
            "fillerColor": "rgba(182,162,222,0.2)",
            "handleColor": "#008acd",
            "handleSize": "100%",
            "textStyle": {
                "color": "#8b919e"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
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
