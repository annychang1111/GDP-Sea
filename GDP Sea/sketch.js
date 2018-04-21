var allData;
var usGDP;

function preload() {
  allData = loadJSON("http://api.worldbank.org/v2/countries/us/indicators/NY.GDP.MKTP.CD?format=json");
}

function setup() {
  createCanvas(1350, 700);
  frameRate(10);
  usGDP = allData[1];
  // console.log(usGDP[1].value);
  // console.log(loadJSON("http://api.worldbank.org/v2/countries/ca/indicators/NY.GDP.MKTP.CD?format=json"));
}

function draw() {

  for(var i = 0; i < 50; i++){
  	var m = map(usGDP[i].value, 942500000000, 18624475000000, 0, 700);
  	var l = map(usGDP[i].value, 942500000000, 18624475000000, 85, 5);
  	colorMode(HSL, 100, 100, 100, 1);
  	fill(53, 100, l, 1);
  	noStroke();
  	rect(0, 0, 1350, m + sin(millis()* 0.01 + i));
  }

}