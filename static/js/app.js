const url="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//Fetch json data using D3
d3.json(url).then(function(data) {
    console.log(data);
});

function init() {
    let dropDownMenu = d3.select("#selDataset");

    d3.json(url).then(function(data) {
        let sampleId= data.names;

        console.log(data);

        for (let i = 0; i < sampleId.length; i++) {
            dropDownMenu
              .append("option")
              .text(sampleId[i])
              .property("value", sampleId[i]);
          };
                
        buildmetaData(sampleId[0])
        
        barChartBuild(sampleId[0])

        bubbleChartBuild(sampleId[0])

        buildGauge(sampleId[0])
    });
};
init()

function buildmetaData(id) {
    d3.json(url).then(function(data) {
        let metaData= data.metadata;

        let resultArray = metaData.filter(sampleObj => sampleObj.id == id);
        console.log(resultArray)
        
        let result = resultArray[0];

        let demoBox = d3.select("#sample-metadata");

        demoBox.html("")

        Object.entries(result).forEach(([key, value]) => {
            demoBox.append("h6").text(`${key.toUpperCase()}: ${value}`);
          });
    });         
};

function optionChanged(id) {
    buildmetaData(id)

    barChartBuild(id)

    bubbleChartBuild(id)

    buildGauge(id)
};

function barChartBuild(id) {
    d3.json(url).then(function(data) {

        let culturesamples= data.samples;

        let resultArray= culturesamples.filter(sampleObj => sampleObj.id == id);
    
        let samplesData= resultArray[0];

        let otuIds= samplesData.otu_ids;
        let otuLabels= samplesData.otu_labels;
        let sampleValues= samplesData.sample_values;
    
        let trace1 = {
            x: sampleValues.slice(0,10).reverse(),
            y: otuIds.slice(0,10).map(id => `Otu: ${id}`).reverse(),
            text: otuLabels.slice(0,10).reverse(),
            type:"bar",
            orientation: "h"
            }

        let traceData=[trace1];

        let layout= {
            title: "Top 10 Samples"
            }

        Plotly.newPlot("bar", traceData, layout);    
        })   
};

function bubbleChartBuild(id) {
    d3.json(url).then(function(data) {
        let eachSample= data.samples;

        let resultArray= eachSample.filter(sampleObj => sampleObj.id == id);
    
        let eachSampleData= resultArray[0];

        let otuIds= eachSampleData.otu_ids;
        let otuLabels= eachSampleData.otu_labels;
        let sampleValues= eachSampleData.sample_values;
    
        let trace2 = {
            x: otuIds,
            y: sampleValues,
            text: otuLabels,
            mode:"markers",
            marker: {
                color: otuIds,
                size: sampleValues
            }
        };

        let traceData2 = [trace2];
        
        let layout={
            title: "Belly Button Data",
            }
        
        Plotly.newPlot("bubble", traceData2, layout)
    });
};

function buildGauge(id) {
    d3.json(url).then(function(data) {

        let eachPerson=data.metadata;

        let resultArray2 = eachPerson.filter(sampleObj => sampleObj.id == id);

        let eachWashData= resultArray2[0];

        let washFrequency= eachWashData.wfreq;

        let trace3={
            type: "indicator",
            mode: "gauge+number",
            value: washFrequency,
            title: { text: "Wash Frequency (Scrubs per Week)", font: { size: 18 } },
            gauge: {
                axis: { range: [null, 9]},
                bar: { color: "black" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
            steps: [
                { range: [0, 1], color: "cyan" },
                { range: [1, 2], color: "royalblue" },
                {range: [2,3], color: "skyblue"},
                {range: [3,4], color: "lightgreen"},
                {range: [4,5], color: "limegreen"},
                {range: [5,6], color: "green"},
                {range: [6,7], color: "yellow"},
                {range: [7,8], color: "orange"},
                {range: [8,9], color: "red"}
                ]
            }
        
        };

        let traceData3=[trace3];

        let layout={
            paper_bgcolor: "lavender"
        };

        Plotly.newPlot("gauge", traceData3, layout);

        });
};
 