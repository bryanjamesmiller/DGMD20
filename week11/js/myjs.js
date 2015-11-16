/**
 * Created by B on 11/14/2015.
 */
$(document).ready(function(){
// Draw a 90&deg; arc
    $('#btn1').click(function(){
        $('#cv1').drawArc({
            layer:true,
            name:'box2',
            strokeStyle: '#000',
            strokeWidth: 5,
            fillStyle:'blue',
            x: 100, y: 100,
            radius: 50,
            // start and end angles in degrees
            start:100, end: 360
        }).drawArc({
            layer:true,
            name:'box3',
            strokeStyle: '#200',
            strokeWidth: 5,
            fillStyle:'green',
            x: 150, y: 200,
            radius: 50,
            // start and end angles in degrees
            start: 0, end: 300
        });
    }); // End click btn1 to draw circles

    $('#btn2').click(function(){
        $('#cv1').clearCanvas();
    });

    // "box" is the name of the layer
    $('#cv3').drawRect({
        layer:true,
        name:'box',
        fillStyle:'brown',
        strokeStyle:'purple',
        strokeWidth:3,
        x:100,
        y:60,
        width:100,
        height:60
    });

    $('#cv3').animateLayer('box', {
        x:220,
        y:150
    }, 2500);

    $('#cv2').drawText({
        layer:true,
        fillStyle:'orange',
        strokeStyle:'blue',
        strokeWidth:1,
        x:200,
        y:100,
        fontSize:'25px',
        fontFamily:'Verdana, sans-serif',
        text:'JCanvas is interesting',
        click:function(){
            $(this).animateLayer(0, {
                // Scale up by 25%
                scale:'+=0.25'

                // Perform over 250 milliseconds.
            }, 250);
        }
    });
});