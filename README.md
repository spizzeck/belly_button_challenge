# belly_button_challenge
In this project, the build was an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

The D3 library was used to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

A horizontal bar chart was created with a dropdown menu to display the top 10 OTUs found in that individual.

  - sample_values as the values for the bar chart.

  - otu_ids as the labels for the bar chart.

  - otu_labels as the hovertext for the chart.

Created a bubble chart that displays each sample.

  - otu_ids for the x values.

  - sample_values for the y values.

  - sample_values for the marker size.

  - otu_ids for the marker colors.

  - otu_labels for the text values.

The sample metadata was displayed in the demographic box. 

The key-value pair from the metadata JSON object was also displayed in the dempgraphic box.

A condition was created that updated all the plots when a new sample is selected.

***Final Addition:***
A Gauge Chart from https://plot.ly/javascript/gauge-charts/Links was used to plot the weekly washing frequency of the individual.

A condtion was applied to update the chart whenever a new sample is selected from the drop down menu. 
