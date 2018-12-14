const dateFormat = d3.timeFormat("%Y-%m-%d")


d3.select("#date-filter").on("click", () => {

    let tableData = [];
    const value = d3.select("#datetime").property("value");

    if (value == '') {
        tableData = data;
    } else {
        tableData = data.filter(element => element.datetime == value);
    }

    d3.select("tbody").selectAll("tr").remove();
    drawTable(tableData);

});

d3.select("#city-filter").on("click", () => {

    let tableData = [];
    const value = d3.select("#city").property("value");

    if (value == '') {
        tableData = data;
    } else {
        tableData = data.filter(element => element.city == value);
    }

    d3.select("tbody").selectAll("tr").remove();
    drawTable(tableData);

});

d3.select("#state-filter").on("click", () => {

    let tableData = [];
    const value = d3.select("#state").property("value");

    if (value == '') {
        tableData = data;
    } else {
        tableData = data.filter(element => element.state == value);
    }

    d3.select("tbody").selectAll("tr").remove();
    drawTable(tableData);

});

d3.select("#country-filter").on("click", () => {

    let tableData = [];
    const value = d3.select("#country").property("value");

    if (value == '') {
        tableData = data;
    } else {
        tableData = data.filter(element => element.country == value);
    }

    d3.select("tbody").selectAll("tr").remove();
    drawTable(tableData);

});

d3.select("#shape-filter").on("click", () => {

    let tableData = [];
    const value = d3.select("#shape").property("value");

    if (value == '') {
        tableData = data;
    } else {
        tableData = data.filter(element => element.shape == value);
    }

    d3.select("tbody").selectAll("tr").remove();
    drawTable(tableData);

});

d3.select("#register-btn").on("click", () => {
    const inputDate = d3.select("#inputDate").property("value");
    const inputDuration = d3.select("#inputDuration").property("value");
    const inputShape = d3.select("#inputShape").property("value");
    const inputCity = d3.select("#inputCity").property("value");
    const inputState = d3.select("#inputState").property("value");
    const inputCountry = d3.select("#inputCountry").property("value");
    const inputComments = d3.select("#inputComments").property("value");

    d3.select("#inputDate").property("value", "");
    d3.select("#inputDuration").property("value", "");
    d3.select("#inputShape").property("value", "");
    d3.select("#inputCity").property("value", "");
    d3.select("#inputState").property("value", "");
    d3.select("#inputCountry").property("value", "");
    d3.select("#inputComments").property("value", "");

    data.push({
        datetime: inputDate,
        city: inputCity,
        state: inputState,
        country: inputCountry,
        shape: inputShape,
        durationMinutes: inputDuration,
        comments: inputComments
    });
});


function drawTable(jsonData) {

    d3.select("tbody")
        .selectAll("tr").data(jsonData).enter().append("tr")
        .selectAll('td').data(row => Object.keys(row).map(column => getCell(row, column))).enter().append('td')
	    .text(d => d.value);

}

function getCell(row, column) {
    return { column: column, value: row[column] }
}


data.forEach(element => {
    element.datetime = dateFormat(new Date(element.datetime));
});

// Init the table.
drawTable(data);
