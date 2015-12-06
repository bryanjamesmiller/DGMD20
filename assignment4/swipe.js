$(document).ready(function(){
    $('div.ui-block-a').bind('swipeleft', function(event){
        $('div.ui-block-a').css("width", "75%");
    });

    $('div.ui-block-b').bind('swipeleft', function(event){
        $('div.ui-block-b').css("width", "75%");
    });

    $('div.ui-block-c').bind('swipeleft', function(event){
        $('div.ui-block-c').css("width", "75%");
    });

    $('div.ui-block-a').bind('swiperight', function(event){
        $('div.ui-block-a').css("width", "32%");
    });

    $('div.ui-block-b').bind('swiperight', function(event){
        $('div.ui-block-b').css("width", "32%");
    });

    $('div.ui-block-c').bind('swiperight', function(event){
        $('div.ui-block-c').css("width", "32%");
    });

});
