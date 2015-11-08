$(document).ready(function(){
	$('#name').focusout(function(event){
		$('#name + .error').html(' ');
		if ($('#name').val().length == 0) {
			$('#name, label[for="name"]').attr({
				class: 'error'
			}); //end attr
			$('#name + .error').html('Please enter your name.');
			event.preventDefault();
		} else {
			$('#name, label[for="name"]').attr({
				class: 'none'
			});
			$('#name + .error').html(' ');
		}
	}); //end focusout

	$('button').click(function(submit){
		$('#name + .error').html(' ');
		if ($('#name').val().length == 0) {
			$('#name, label[for="name"]').attr({
				class: 'error'
			}); //end attr
			$('#name + .error').html('Please enter your name.');
			submit.preventDefault();
		} else {
			$('#name, label[for="name"]').attr({
				class: 'none'
			});
			$('#name + .error').html(' ');
		}
	}); //end submit

	$('#searchengine').change(function(){
		if ($('#searchengine').val() == 'google') {
			$('div.msg').html('Google totally rocks!');
		} else if ($('#searchengine').val() == 'yahoo') {
			$('div.msg').html('Yahoo? Seriously???');
		} else if ($('#searchengine').val() == 'bing') {
			$('div.msg').html('Bing! You must be a Microsoft fan.');
		} else {
			$('div.msg').html('Other? Never heard of it.');
		}

	}); //end change

















}); //end ready


