var parameters = {
  target: '#myFunction',
  data: [{
    color: 'black',
    fn: 'sin(x)'
 }],
  grid: true,
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [0, 2*Math.PI]}
};


function plot() {
    var color = document.querySelector("#color").value;
    var f = document.querySelector("#function").value;
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;
    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;
    parameters.data[0].color = color;
    parameters.data[0].fn = f;
    parameters.xAxis.domain = [xMin, xMax];
    parameters.yAxis.domain = [yMin, yMax];
    
    functionPlot(parameters);
  }
  
  
  