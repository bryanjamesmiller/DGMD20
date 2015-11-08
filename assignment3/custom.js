/**
 * Created by B on 11/7/2015.
 */

$(document).ready(function(){
    $('input').css({
        'display':'block',
        'margin-bottom':'2em'
    });

    var er1 = $('#er1');
    er1.hide();
    var email = $('#in1');
    email.focusout(function(){
        if(email.val().length == 0){
            er1.show();
            er1.css({
                'color':'red'
            });
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
            er2.css({
                'color':'red'
            });
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
            er3.css({
                'color':'red'
            });
        } else {
            er3.hide();
        }
    });

    pswd2.keyup(function(){
        if(pswd2.val() != pswd1.val()){
            er3.show();
            er3.css({
                'color':'red'
            });
        } else {
            er3.hide();
        }
    });

    pswd1.keyup(function(){
        if(pswd2.val() != pswd1.val()){
            er3.show();
            er3.css({
                'color':'red'
            });
        } else {
            er3.hide();
        }
    });

    $('#btn1').click(function(e){
        if(pswd2.val() != pswd1.val()){
            e.preventDefault();
            er3.show();
            er3.css({
                'color':'red'
            });
        }
        if(pswd1.val().length == 0){
            e.preventDefault();
            er2.show();
            er2.css({
                'color':'red'
            });
        }
        if(email.val().length == 0){
            e.preventDefault();
            er1.show();
            er1.css({
                'color':'red'
            });
        }
    });

    $('li').css({
        'display':'inline',
        'margin-right':'30px',
    });

    $('nav').css({
        'background-color':'grey',
        'padding':'20px',
    }); // End figure css


    $('figure').css({
        'display':'inline'
    }); // End figure css


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
            $('#feds').css({
                'color': 'white',
                'background-color': '#3399FF'
            }); // End #id css on hover mouse in
        } else {
            test_three = true;
            $('#feds').css({
                'color': 'black',
                'background-color': 'white'
            }); // End #id css on hover mouse in
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
        $('#doms').css({
            'color':'red',
            'background-color':'black'
        }); // End #id css on hover mouse in

        $('#img7').slideToggle(3000);
        $("#img8").animate({opacity: "0.0"});
        $('#img9').slideToggle(3000);

    }, function() {
        // Mouse out

        $('#doms').css({
            'color':'black',
            'background-color':'white'
        }); // End #id css on hover mouse out

        $('#img7').slideToggle(3000);
        $("#img8").animate({opacity: "1.0"});
        $('#img9').slideToggle(3000);

    }); // End #img1 hover event function

}); // End document ready