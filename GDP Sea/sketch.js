let allData;
let usGDP;
let fontRegular;

function preload() {
  allData = loadJSON("http://api.worldbank.org/v2/countries/us/indicators/NY.GDP.MKTP.CD?format=json");
  fontRegular = loadFont('assets/Inconsolata-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  usGDP = allData[1];
  colorMode(HSL, 100, 100, 100, 1);
  textFont(fontRegular);
  // console.log(usGDP[1]);
  // console.log(loadJSON("http://api.worldbank.org/v2/countries/ca/indicators/NY.GDP.MKTP.CD?format=json"));
}

function draw() {

  for(let i = 0; i < 50; i++){
  	let m = map(usGDP[i].value, 1019900000000, 19390604000000, 0, windowHeight);
  	let l = map(usGDP[i].value, 1019900000000, 19390604000000, 85, 5);
  	fill(53, 100, l, 1);
  	noStroke();
  	rect(0, 0, windowWidth, m + sin(millis()* 0.01 + i));
    fill('#f4be41');
    textAlign(RIGHT);
    text(str(usGDP[i].date), windowWidth-160, m + sin(millis()* 0.01 + i) - 2);
    textAlign(RIGHT);
    text(str(usGDP[i].value), windowWidth-60, m + sin(millis()* 0.01 + i) - 2);
  }

}