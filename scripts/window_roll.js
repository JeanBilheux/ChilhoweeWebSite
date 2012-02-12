$(document).ready(function() {

	var images = ['images/backWindow/backWindow1.jpg', 'images/backWindow/backWindow2.jpg', 'images/backWindow/backWindow3.jpg'];
	var index = 1;
	var refreshTime = 5;
	//in seconds

	//Function that will refresh the pictures shown behind the window of the main page
	window.setInterval(rollPictures, refreshTime * 1000);

	function rollPictures() {

		$('div#window_back_view>img').attr('src', images[index]);
		
		index++;
		if(index == images.length) {
			index = 0;
		}

	}

});
