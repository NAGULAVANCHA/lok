var colours=generaterandomcolor(6);
var pickedColor1;
var e;
var flag=6;
$("#easy").click(function(){
	flag=3;
	$("#easy").addClass("selected");
	$("#hard").removeClass("selected");
	colours=generaterandomcolor(3);
	var e=$(".square");
	pickedColor1=pickedColor();
$("#p").text(pickedColor1);
	for(var i=0;i<3;i++)
{
	e[i].style.backgroundColor=colours[i];
}
e[3].style.display="none";
e[4].style.display="none";
e[5].style.display="none";
});
$("#hard").click(function(){
	flag=6;
	$("#easy").removeClass("selected");
	$("#hard").addClass("selected");
	colours=generaterandomcolor(6);
	e=$(".square");
	pickedColor1=pickedColor();
$("#p").text(pickedColor1);
	for(var i=0;i<e.length;i++)
{
	e[i].style.backgroundColor=colours[i];
}
e[3].style.display="block";
e[4].style.display="block";
e[5].style.display="block";
})
$("#reset").click(function(){
	if(flag==6){
	colours=generaterandomcolor(6);
	e=$(".square");
pickedColor1=pickedColor();
 $("#p").text(pickedColor1);
for(var i=0;i<e.length;i++)
{
	e[i].style.backgroundColor=colours[i];
}
}
else
{
colours=generaterandomcolor(3);
	var e=$(".square");
	pickedColor1=pickedColor();
$("#p").text(pickedColor1);
	for(var i=0;i<3;i++)
{
	e[i].style.backgroundColor=colours[i];
}	
}
$(".container").css("backgroundColor","steelblue");
$("#reset").text("reset");
$("#e").text("welcome");
});
e=$(".square");
pickedColor1=pickedColor();
$("#p").text(pickedColor1);
for(var i=0;i<e.length;i++)
{
	e[i].style.backgroundColor=colours[i];
}
$(".square").on('click',function(){
	var t=this.style.backgroundColor;
	if(t==$("#p").text())
	{
		$("#e").text("correct");
		$(".square").css("backgroundColor",t);
		$(".container").css("backgroundColor",t);
		$("#reset").text("play again");
	}
	else{
		this.style.backgroundColor="#232323";
		$("#e").text("Try again");
	}
});
function pickedColor() {
	// body...
	var g=Math.floor(Math.random()*colours.length);
	return colours[g];
}
function generaterandomcolor(num){
	var arr=[];
	for (var i=0;i<num;i++)
	{
		arr.push(RandomColor());

	}
	return arr;
	}


function RandomColor(){
var x=Math.floor(Math.random()*256);
var y=Math.floor(Math.random()*256);
var z=Math.floor(Math.random()*256);
return "rgb(" + x + ", " + y + ", " + z + ")";
}