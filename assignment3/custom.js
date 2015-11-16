/**
 * Created by B on 11/7/2015.
 */

$(document).ready(function(){
    $('input').addClass(
        "first"
    );

    var er1 = $('#er1');
    er1.hide();
    var email = $('#in1');
    email.focusout(function(){
        if(email.val().length == 0){
            er1.show();
            er1.addClass(
                'warning'
            );
        } else {
            er1.hide();
        }
    });

    var er2 = $('#er2');
    er2.hide();
    var pswd1 = $('#in2');
    pswd1.focusout(function(){
        if(pswd1.val().length == 0){
            er2.show();
            er2.addClass(
                'warning'
            );
        } else {
            er2.hide();
        }
    });

    var er3 = $('#er3');
    er3.hide();
    var pswd2 = $('#in3');
    pswd2.focusout(function(){
        if(pswd2.val() != pswd1.val()){
            er3.show();
            er3.addClass(
                'warning'
            );
        } else {
            er3.hide();
        }
    });

    pswd2.keyup(function(){
        if(pswd2.val() != pswd1.val()){
            er3.show();
            er3.addClass(
                'warning'
            );
        } else {
            er3.hide();
        }
    });

    pswd1.keyup(function(){
        if(pswd2.val() != pswd1.val()){
            er3.show();
            er3.addClass(
                'warning'
            );
        } else {
            er3.hide();
        }
    });

    $('#btn1').click(function(e){
        if(pswd2.val() != pswd1.val()){
            e.preventDefault();
            er3.show();
            er3.addClass(
                'warning'
            );
        }
        if(pswd1.val().length == 0){
            e.preventDefault();
            er2.show();
            er2.addClass(
                'warning'
            );
        }
        if(email.val().length == 0){
            e.preventDefault();
            er1.show();
            er1.addClass(
                'warning'
            );
        }
    });

    $('li').addClass(
        'line_items'
    ); // I know this is a little redundant but just practicing

    $('nav').addClass(
        'nav_items'
    ); // I know this is a little redundant but just practicing


    $('figure').css({
        'display':'inline'
    }); // I know this is a little redundant but just practicing


    $('#img4, #img5, #img6, #img7, #img9').hide();

    var test = false;
    var test2 = false;

    if(test = false) {
        $('#img2').click(function () {
            $('#img4, #img5').show();
        });
    }

    if(test2 = false) {
        $('#img1').hover(function () {
            $('#img7, #img9').show();
        });
    }

    var test_three = true;
    $('#img2').click(function(){
        if(test_three) {
            test_three = false;
            $('#feds').addClass(
                'federation_blue_white'
            ); // End #id css on hover mouse in
        } else {
            test_three = true;
            $('#feds').removeClass(
                'federation_blue_white'
            ); // End #id css on hover mouse in
        }
        test = true;

        $('#img4').slideToggle(3000, function(){
            $('#img4').slideToggle(3000);
        }); // End #img4 slideToggle callback

        $("#img5").slideDown(3000, function(){
            $("#img5").slideUp(3000);
        }); // End #img5 slideDown callback function

        // slideUp should make it disappear, then slideDown make it reappear
        $("#img6").slideUp(3000, function(){
            $("#img6").slideDown(3000);

        });  // End #img6 slideDown callback function
    }); // End #img2 click event function

    $('#img1').hover(function(){
        // Mouse in

        test2 = true;
        $('h2:even').addClass(
            'dominion'
        ); // End #id css on hover mouse in

        $('#img7').slideToggle(500);
        $("#img8").animate({opacity: "0.0"});
        $('#img9').slideToggle(500);

    }, function() {
        // Mouse out

        $('h2:even').removeClass(
            'dominion'
        ); // End #id css on hover mouse out

        $('#img7').slideToggle(500);
        $("#img8").animate({opacity: "1.0"});
        $('#img9').slideToggle(500);

    }); // End #img1 hover event function


    $('#btn3').click(function(){
        var input = $('#in4').val();
        $('#cv1').drawEllipse({
            layer:true,
            name:'vul',
            fillStyle: '#A85842',
            strokeStyle: '#46616C',
            strokeWidth: 5,
            x: 150, y: 110,
            width: 175, height: 200
        }).drawEllipse({
            layer:true,
            name:'earth',
            fillStyle: '#46616C',
            strokeStyle: '#A85842',
            strokeWidth: 5,
            x: 150, y: 350,
            width: 175, height: 200
        }).drawText({
            layer:true,
            fillStyle:'blue',
            StrokeStyle:'green',
            strokeWidth:2,
            x:350,
            y:150,
            fontSize:'28px',
            fontFamily:'Verdana, sans-serif',
            text:'Welcome, ' + input + ', to planets Earth and Vulcan!'
        });

            $('#cv1').animateLayer('earth', {
                x: 520,
                y: 150
            }, 2500).animateLayer('vul', {
                x: 120,
                y: 150
            }, 2500).animateLayer('earth', {
                x: 150,
                y: 110
            }, 2500).animateLayer('vul', {
                x: 150,
                y: 350
            }, 2500).animateLayer('vul', {
                x: 520,
                y: 150
            }, 2500).animateLayer('earth', {
                x: 120,
                y: 150
            }, 2500).animateLayer('vul', {
                x: 150,
                y: 110
            }, 2500).animateLayer('earth', {
                x: 150,
                y: 350
            }, 2500);
    }); // End click btn1 to draw circles

    $('#btn2').click(function(){
        $('#cv1').clearCanvas();
        $('#cv1').removeLayers();
    });

}); // End document ready