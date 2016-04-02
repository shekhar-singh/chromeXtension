$(function(){
	var url="http://www.santapanminda.com/api.php?formate=json";
	var quote=$("#quote");

	$.get(url,function(data){
		var the_quote = data;
		var new_quote = JSON.parse(the_quote);
		quote.text(new_quote.posts[0].post.content);
	});
});