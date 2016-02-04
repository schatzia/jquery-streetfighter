$(document).ready(function() {
	playIntro();
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
		$('.ryu-still').hide();
		$('.hadouken').hide();
	});
})
.keydown(function(event){
			if (event.which == 88){
				playCool();
				$('.ryu-ready').hide();
				$('.ryu-still').hide();
				$('.ryu.ryu-throwing').hide();
				$('.ryu').css("background", "url('images/ryu-cool.gif')");
			}
})
.keyup(function(event){
		if(event.which==88)	{
			pauseCoolSound();
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide()			;
			$('.ryu').css("background", "none");
			/* $('.ryu').removeAttr("background"); */
		}
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
function playCool () {
	/* $('#cool-sound')[0].volume = 0.5; */
	/* $('#cool-sound')[0].load();*/
	$('#cool-sound')[0].play();
}
function pauseCoolSound() {
	$('#cool-sound')[0].pause();
	$('#cool-sound')[0].load();
	/* $('#cool-sound')[0].currentTime = 0; */
}
function playIntro(){
	$('#streetfighter-theme')[0].volume = 0.3;
	$('#streetfighter-theme')[0].play();
	$('.sf-logo').fadeIn(3500, function(){
		$(this).fadeOut(1000, function(){
			$('.brought-by').fadeIn(2500, function(){
				$(this).fadeOut(1000, function(){
					$('.jquery-logo').fadeIn(2500, function(){
						$(this).fadeOut(1500, function(){
							$('.instructions').fadeIn(2000);
						});
					});
				});
			});
		});
	});
}
