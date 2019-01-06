$("ul").on("click", "li",function(){
	$(this).toggleClass("selected");
})
$("ul").on("click", "span",function(e){
$(this).parent().fadeOut(200,function(){
	$(this).remove();
});
e.stopPropagation();
})
$("input").on("keypress",function(e){
	var w=$("input").val();
	if(e.which===13)
	{
$("ul").append("<li><span>x</span>" + w + "</li>");
$("input").val("");
}
})
