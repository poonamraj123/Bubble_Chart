var height = 500,width = 200;

var arr = [
  {x:10,y:20},
  {x:20,y:12},
  {x:30,y:70},
  {x:40,y:30},
  {x:50,y:10},
];

var svg = d3.select('body').append('svg')
.attr('width',width)
.attr('height', height);

// scatterplot
var dots = svg.selectAll('circle')
.data(arr)
.enter().append('circle')
.attr('cx', function(d,i){
  return d.x*3;
 // return d.x;
})
.attr('cy', function(d,i){
  return d.y*2;
  //return d.y;
})
.attr('r',5)
.attr('fill','black')
.attr('fill', function(d){
  return styleScatterplot(d);
})

//write styleScatterplot(d); fucntion with if else to give colors based on range
function styleScatterplot(d){
  if(d.x>0 && d.x<=10){
    return 'red';
  }
   if(d.x>10 && d.x<=20){
    return 'green';
  }
  if(d.x>20 && d.x<=30){
    return 'yellow';
  }
  if(d.x>30 && d.x<=40){
    return 'blue';
  }
  if(d.x>40 && d.x<=50){
    return 'pink';
  }
}
