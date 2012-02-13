$(document).ready(function() {
	
	$("#a_news_board").bind("mouseover", newsBoardMouseOver);
	$("#a_news_board").bind("mouseout", newsBoardMouseOut);
	
	$("#a_books").bind("mouseover", booksOver);
	$("#a_books").bind("mouseout", booksOut);
	
	function newsBoardMouseOver() {
		$('#a_news_board img').attr('src',"../images/NewsBoardOver.png");
	};
	
	function newsBoardMouseOut() {
		$('#a_news_board img').attr('src',"../images/NewsBoardOff.png");
	};
	
	function booksOver() {
		$("#a_books img").attr('src','../images/BooksOver.png');
	}
	
	function booksOut() {
		$("#a_books img").attr('src','../images/BooksOff.png');
	}
	
	
});
