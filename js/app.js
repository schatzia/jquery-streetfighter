$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate( 
			{  left: '1020px'	},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '628px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.hadouken').hide();
	});
})
.keydown(function(event){
			if (event.which == 88){
				$('.ryu-ready').hide();
				$('.ryu-still').hide();
				$('.ryu.ryu-throwing').hide();
				$('.ryu').css("background", "url('images/ryu-cool.gif')");
			}
})
.keyup(function(){
			$('.ryu-still').show();			
			$('.ryu').css("background", "none");
			/* $('.ryu').removeAttr("background"); */
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
