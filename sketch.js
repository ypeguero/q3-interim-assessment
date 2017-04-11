var numbers = [15, 22, 37, 48];
var habits = ["Ymmanie", "Faith", "Peguero", "IA"];
var j = 0;
function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
}

function draw(){
    background(194, 84, 179);
   
   for(var i = 0; i < 4; i++){
       ellipse((i+1)*100,200,numbers[i], numbers[i]);
   }
   
   fill(255);
   textSize(50);
   text(habits[j], 230, 150);
}


function mousePressed(){
    j++;
    if(j==habits.length){
        j=0;
    }
}
