$(document).ready(function() {
	
	$("#a_news_board").bind("mouseover", newsBoardMouseOver);
	$("#a_news_board").bind("mouseout", newsBoardMouseOut);
	
	$("#a_books").bind("mouseover", booksOver);
	$("#a_books").bind("mouseout", booksOut);
	
	$("#a_camera").bind("mouseover", cameraOver);
	$("#a_camera").bind("mouseout", cameraOut);

	$("#a_rates").bind("mouseover", ratesOver);
	$("#a_rates").bind("mouseout", ratesOut);

	$("#a_instructions").bind("mouseover", instructionsOver);
	$("#a_instructions").bind("mouseout", instructionsOut);

	$("#a_store").bind("mouseover", storeOver);
	$("#a_store").bind("mouseout", storeOut);

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
	
	function cameraOver() {
		$("#a_camera img").attr('src','../images/cameraOver.png');
	}
	
	function cameraOut() {
		$("#a_camera img").attr('src','../images/cameraOff.png');
	}
	
	function ratesOver() {
		$("#a_rates img").attr('src','../images/ratesOver.png');
	}
	
	function ratesOut() {
		$("#a_rates img").attr('src','../images/ratesOff.png');
	}

	function instructionsOver() {
		$("#a_instructions img").attr('src','../images/instructionsOver.png');
	}
	
	function instructionsOut() {
		$("#a_instructions img").attr('src','../images/instructionsOff.png');
	}

	function storeOver() {
		$("#a_store img").attr('src','../images/storeOver.png');
	}
	
	function storeOut() {
		$("#a_store img").attr('src','../images/storeOff.png');
	}

});
