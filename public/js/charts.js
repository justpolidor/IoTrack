/**
 * Created by justin on 06/07/16.
 */
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Speed', 80],
        ['Breaks', 55],
        ['Fuel', 68]
    ]);

    var options = {
        width: 400, height: 120,
        redFrom: 90, redTo: 100,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('gauge1'));

    chart.draw(data, options);

    setInterval(function() {
        data.setValue(0, 1, 40 + Math.round(20 * Math.random()));
        chart.draw(data, options);
    }, 300);
    setInterval(function() {
        data.setValue(1, 1, 40 + Math.round(20 * Math.random()));
        chart.draw(data, options);
    }, 500);
    setInterval(function() {
        data.setValue(2, 1, 60 + Math.round(10 * Math.random()));
        chart.draw(data, options);
    }, 3000);
}
function drawChart2() {

    var data2 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Speed', 80],
        ['Breaks', 55],
        ['Fuel', 68]
    ]);

    var options2 = {
        width: 400, height: 120,
        redFrom: 90, redTo: 100,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
    };

    var chart2 = new google.visualization.Gauge(document.getElementById('gauge2'));

    chart2.draw(data2, options2);

    setInterval(function() {
        data2.setValue(0, 1, 40 + Math.round(20 * Math.random()));
        chart2.draw(data2, options2);
    }, 300);
    setInterval(function() {
        data2.setValue(1, 1, 40 + Math.round(20 * Math.random()));
        chart2.draw(data2, options2);
    }, 500);
    setInterval(function() {
        data2.setValue(2, 1, 60 + Math.round(10 * Math.random()));
        chart2.draw(data2, options2);
    }, 3000);
}

function drawChart3() {

    var data3 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Speed', 80],
        ['Breaks', 55],
        ['Fuel', 68]
    ]);

    var options3 = {
        width: 400, height: 120,
        redFrom: 90, redTo: 100,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
    };

    var chart3 = new google.visualization.Gauge(document.getElementById('gauge3'));

    chart3.draw(data3, options3);

    setInterval(function() {
        data3.setValue(0, 1, 40 + Math.round(20 * Math.random()));
        chart3.draw(data3, options3);
    }, 300);
    setInterval(function() {
        data3.setValue(1, 1, 40 + Math.round(20 * Math.random()));
        chart3.draw(data3, options3);
    }, 500);
    setInterval(function() {
        data3.setValue(2, 1, 60 + Math.round(10 * Math.random()));
        chart3.draw(data3, options3);
    }, 3000);
}

function drawChart4() {

    var data4 = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Speed', 80],
        ['Breaks', 55],
        ['Fuel', 68]
    ]);

    var options4 = {
        width: 400, height: 120,
        redFrom: 90, redTo: 100,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
    };

    var chart4 = new google.visualization.Gauge(document.getElementById('gauge4'));

    chart4.draw(data4, options4);

    setInterval(function() {
        data4.setValue(0, 1, 40 + Math.round(20 * Math.random()));
        chart4.draw(data4, options4);
    }, 300);
    setInterval(function() {
        data4.setValue(1, 1, 40 + Math.round(20 * Math.random()));
        chart4.draw(data4, options4);
    }, 500);
    setInterval(function() {
        data4.setValue(2, 1, 60 + Math.round(10 * Math.random()));
        chart4.draw(data4, options4);
    }, 3000);
}

function drawChartBar() {
    var databar = google.visualization.arrayToDataTable([
        ['Time', 'Min', 'Max'],
        ['Last',  1000,      400],
        ['Last 10 min',  1170,      460],
        ['Last hour',  660,       1120],
        ['Last day',  1030,      540]
    ]);

    var optionsbar = {
        title: 'Tire pressure',
        width: 390,
        height: 200,
        bar: {groupWidth: "95%"},
        legend: { position: "" },
        curveType: 'function',
        chartArea: {right:"30%"}
    };

    var chartbar = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chartbar.draw(databar, optionsbar);
}

function drawColumnChart() {
    var databar = google.visualization.arrayToDataTable([
        ["Temperature", "Value", { role: "style" } ],
        ["Zone 1", 8.94, "red"],
        ["Zone 2", 10.49, "black"],
        ["Zone 3", 19.30, "green"],
        ["Zone 4", 21.45, "blue"]
    ]);

    var view = new google.visualization.DataView(databar);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var optionsbar = {
        title: "Average Temperature",
        width: 400,
        height: 200,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        chartArea: {left:"10%"}
    };
    var chartbar = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chartbar.draw(view, optionsbar);
}

function drawChartBar2() {
    var databar = google.visualization.arrayToDataTable([
        ['Time', 'Min', 'Max'],
        ['Last',  1000,      400],
        ['Last 10 min',  1170,      460],
        ['Last hour',  660,       1120],
        ['Last day',  1030,      540]
    ]);

    var optionsbar = {
        title: 'Tire pressure',
        width: 390,
        height: 200,
        bar: {groupWidth: "95%"},
        legend: { position: "" },
        curveType: 'function',
        chartArea: {right:"30%"}
    };

    var chartbar = new google.visualization.LineChart(document.getElementById('curve_chart2'));

    chartbar.draw(databar, optionsbar);
}

function drawColumnChart2() {
    var databar = google.visualization.arrayToDataTable([
        ["Temperature", "Value", { role: "style" } ],
        ["Zone 1", 8.94, "red"],
        ["Zone 2", 10.49, "black"],
        ["Zone 3", 19.30, "green"],
        ["Zone 4", 21.45, "blue"]
    ]);

    var view = new google.visualization.DataView(databar);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var optionsbar = {
        title: "Average Temperature",
        width: 400,
        height: 200,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        chartArea: {left:"10%"}
    };
    var chartbar = new google.visualization.ColumnChart(document.getElementById("columnchart_values2"));
    chartbar.draw(view, optionsbar);
}

function drawChartBar3() {
    var databar = google.visualization.arrayToDataTable([
        ['Time', 'Min', 'Max'],
        ['Last',  1000,      400],
        ['Last 10 min',  1170,      460],
        ['Last hour',  660,       1120],
        ['Last day',  1030,      540]
    ]);

    var optionsbar = {
        title: 'Tire Pressure',
        width: 390,
        height: 200,
        bar: {groupWidth: "95%"},
        legend: { position: "" },
        curveType: 'function',
        chartArea: {right:"30%"}
    };

    var chartbar = new google.visualization.LineChart(document.getElementById('curve_chart3'));

    chartbar.draw(databar, optionsbar);
}

function drawColumnChart3() {
    var databar = google.visualization.arrayToDataTable([
        ["Temperature", "Value", { role: "style" } ],
        ["Zone 1", 8.94, "red"],
        ["Zone 2", 10.49, "black"],
        ["Zone 3", 19.30, "green"],
        ["Zone 4", 21.45, "blue"]
    ]);
    var view = new google.visualization.DataView(databar);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var optionsbar = {
        title: "Average temperature",
        width: 400,
        height: 200,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        chartArea: {left:"10%"}
    };
    var chartbar = new google.visualization.ColumnChart(document.getElementById("columnchart_values3"));
    chartbar.draw(view, optionsbar);
}

function drawChartBar4() {
    var databar = google.visualization.arrayToDataTable([
        ['Time', 'Min', 'Max'],
        ['Last',  1000,      400],
        ['Last 10 min',  1170,      460],
        ['Last hour',  660,       1120],
        ['Last day',  1030,      540]
    ]);

    var optionsbar = {
        title: 'Tire Pressure',
        width: 390,
        height: 200,
        bar: {groupWidth: "95%"},
        legend: { position: "" },
        curveType: 'function',
        chartArea: {right:"30%"}
    };

    var chartbar = new google.visualization.LineChart(document.getElementById('curve_chart4'));

    chartbar.draw(databar, optionsbar);
}

function drawColumnChart4() {
    var databar = google.visualization.arrayToDataTable([
        ["Temperature", "Value", { role: "style" } ],
        ["Zone 1", 8.94, "red"],
        ["Zone 2", 10.49, "black"],
        ["Zone 3", 19.30, "green"],
        ["Zone 4", 21.45, "blue"]
    ]);

    var view = new google.visualization.DataView(databar);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var optionsbar = {
        title: "Average temperature",
        width: 400,
        height: 200,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        chartArea: {left:"10%"}
    };
    var chartbar = new google.visualization.ColumnChart(document.getElementById("columnchart_values4"));
    chartbar.draw(view, optionsbar);
}