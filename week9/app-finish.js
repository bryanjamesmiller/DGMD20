$(document).ready(function(){
// video 1
	$('#apple-btn').click(function(){
		console.log('The apple button was clicked!');
		alert('We love apples!');
	}); //end click

	$('#orange-btn-off').click(function(){
		$('#orange-img').hide(1000);
	}); //end orange off click

	$('#orange-btn-on').click(function(){
		$('#orange-img').show(1000);
	}); //end orange off click

//Video 2
	//$('select something').hover(function(){}, function(){});
	$('#banana-btn').hover(function(){
		//hovering on the element
		console.log('You hovered over the banana button!');
		$('#banana-btn').css({
			backgroundColor: 'orange'
		}); //end css
	}, 
	function(){
		//leaving the element
		console.log('The banana button was left behind!');
		$('#banana-btn').css({
			backgroundColor: 'blue'
		}); //end css
	});

	$('#apple-img').hover(function(){
		$('#apple-img').attr({
			'src': 'img/apples-400.jpg'
		});
	}, 
	function(){
		$('#apple-img').attr({
			'src': 'img/apple-300.jpg'
		});
	});
//Video 3
	$('#cherry-btn').click(function(){
		$('#cherry-img').animate({
			opacity: '0.25',
			height: 'toggle'
		}, 5000, 'swing', function(){
			$('#cherry-img').css({
				opacity: '1'
			}); //end img css
			$('#cherry-btn').css({
				backgroundColor: 'red'
			}); //end btn css
		}); //end animate
	}); //end click
//Video 4
	$('#jumbotron-btn').click(function(){
		$('#jumbotron-img').removeClass('oval').addClass('rounded');
		$('.jumbotron h1').text('Yummy fruit!');
		$('.jumbotron p').prepend('<p>You clicked the button and made a new paragraph!</p>');	
		$('#jumbotron-btn').replaceWith('<p style="color: green; font-weight: bold;">Success! You clicked the button.</p>')
	}); //end click



}); //end ready












