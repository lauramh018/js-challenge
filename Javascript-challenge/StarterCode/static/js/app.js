// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log('Loading...');
var tbody = d3.select("#ufo-table > tbody");

render(tableData);

d3.select("#filter-btn").on("click",FilterTable);
cities();
states();
countries();
shapes();
duration();


function render(data){
   
    var body_past = tbody.html("");
    
    data.forEach(function(ufo){
        // New row
        var row = tbody.append("tr")
        Object.entries(ufo).forEach(([key,value]) => {
            row.append("td").text(value);
        });
    });
}

// Filter
function FilterTable(){
    // Get date 
    var date = d3.select("#date").property("value");

    if(date.length == 0){
        console.log('Empty filter');
        render(tableData);
    }
    else
    {
        console.log("Filter: " + date);
        var filterData = tableData.filter((ufo) => {
            return ufo.date == date;
        });
        render(filterData)
    }
    
}


function cities(){
    console.log(tableData.length)
    var uniqueCities = []
    var cities = tableData.map(ufo => ufo.city)
    uniqueCities = cities.filter((value, index) => cities.indexOf(value)=== index);
    console.log(uniqueCities);
}

function states(){
    console.log(tableData.length)
    var uniqueStates = []
    var states = tableData.map(ufo => ufo.state)
    uniqueStates = states.filter((value, index) => states.indexOf(value)=== index);
    console.log(uniqueStates);
}

function countries(){
    console.log(tableData.length)
    var uniqueCountries = []
    var countries = tableData.map(ufo => ufo.country)
    uniqueCountries = countries.filter((value, index) => countries.indexOf(value)=== index);
    console.log(uniqueCountries);
}

function shapes(){
    console.log(tableData.length)
    var uniqueShapes = []
    var shapes = tableData.map(ufo => ufo.shape)
    uniqueShapes = shapes.filter((value, index) => shapes.indexOf(value)=== index);
    console.log(uniqueShapes);
}

function duration(){
    console.log(tableData.length)
    var uniqueDuration = []
    var durations = tableData.map(ufo => ufo.durationMinutes)
    uniqueDuration = durations.filter((value, index) => durations.indexOf(value)=== index);
    console.log(uniqueDuration);
}