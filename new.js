$("button").last().click(function(){
	$("span").text("0");
})
var h=0;
var l=0;
$("input").on("keyup",function(){
$("#3").text($("input").val());
});


$("button").first().click(function(){
	if(h+1==$("input").val())
	{
		$("#1").text(h+1);
		$("#1").css("colour","green");
		alert("player one wins");
	}
	else{
		h=h+1;
	$("#1").text(h);
}});

$("button:nth-of-type(2)").click(function(){
	if(l+1==$("input").val())
	{
		$("#2").text(h+1);
		$("#2").css("colour","green");
		alert("player two wins");
	}
	else{
		l=l+1;
	$("#2").text(l);
}});