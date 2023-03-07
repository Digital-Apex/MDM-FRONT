Highcharts.chart('categorie-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['2021/22', '2020/21', '2019/20', '2018/19', '2017/18']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Assists'
        }
    },
    navigation: {
        buttonOptions: {
            enabled: true
        }
    },
    accessibility: {
        enabled: false
    },

    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Kevin De Bruyne',
        data: [4, 4, 2, 4, 4]
    }, {
        name: 'Sadio Mané',
        data: [1, 2, 2, 1, 2]
    }]
});
           