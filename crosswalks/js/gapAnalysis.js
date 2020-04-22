$.getJSON("https://rd-alliance.github.io/Research-Metadata-Schemas-WG/crosswalks/json/gapAnalysis.json", gapAnalysis);
function gapAnalysis(data){
var chart = am4core.create("gapAnalysis", am4charts.TreeMap);
chart.data = data;
chart.layoutAlgorithm = chart.binaryTree;
/* Set color step */
chart.colors.step = 2;

/* Define data fields */
chart.dataFields.value = "value";
chart.dataFields.name = "name";

/* Configure top-level series */
var level1 = chart.seriesTemplates.create("0");
var level1_column = level1.columns.template;
level1_column.column.cornerRadius(10, 10, 10, 10);
level1_column.fillOpacity = 0.8;
level1_column.stroke = am4core.color("#fff");
level1_column.strokeWidth = 5;
level1_column.strokeOpacity = 1;

/* Add bullet labels */
var level1_bullet = level1.bullets.push(new am4charts.LabelBullet());
level1_bullet.locationY = 0.5;
level1_bullet.locationX = 0.5;
level1_bullet.label.text = "{name}";
level1_bullet.label.fill = am4core.color("#fff");


}