var hr,mn,sc; 
var hrAngle,mnAngle,scAngle;  


function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES); 
  


}






function draw() {
  background(255,255,255);  


  translate(200,200); 
  rotate(-90); 
 hr = hour(); 
 mn = minute(); 
 sc = second(); 

 scAngle = map(sc,0,60,0,360); 
 mnAngle = map(mn,0,60,0,360); 
 hrAngle = map(hr %12,0,12,0,360); 

 push(); 
 rotate(scAngle); 
 stroke("green"); 
 strokeWeight(7); 
 line(0,0,100,0); 
 pop(); 

 push(); 
 rotate(mnAngle); 
 stroke("cyan"); 
 strokeWeight(7); 
 line(0,0,75,0); 
 pop(); 


 push(); 
 rotate(hrAngle); 
 stroke("red"); 
 strokeWeight(7); 
 line(0,0,50,0); 
 pop(); 

stroke("Orange"); 
point(0,0); 
stroke("green"); 
arc(0,0,300,300,0,scAngle); 

stroke("cyan"); 
arc(0,0,280,280,0,mnAngle); 


stroke("red"); 
arc(0,0,260,260,0,hrAngle);  

}