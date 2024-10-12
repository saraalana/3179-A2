var barChart = "js/barChart.json";
vegaEmbed("#barChart", barChart, { "actions": false }).then(function (result) { }).catch(console.error);

var map2017 = "js/map2017.json";
vegaEmbed("#map2017", map2017, { "actions": false }).then(function (result) { }).catch(console.error);

var map2021 = "js/map2021.json";
vegaEmbed("#map2021", map2021, { "actions": false }).then(function (result) { }).catch(console.error);

var histogram = "js/histogram.json";
vegaEmbed("#histogram", histogram, { "actions": false }).then(function (result) { }).catch(console.error);
