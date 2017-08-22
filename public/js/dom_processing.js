/**
 * Created by justin on 24/06/16.
 */
var non_pericoloso = 0;
var pericoloso = 0;
var libero = 0;
var continuo=0;
var hasStarted1;
var hasStarted2;
var hasStarted3;
var hasStarted4;

$("#non_pericoloso").on('click', function () {
    non_pericoloso = 1;
    pericoloso=0;
    libero=0;
    continuo=0;
});

$("#pericoloso").on('click', function () {
    non_pericoloso = 0;
    pericoloso=1;
    libero=0;
    continuo=0;
});

$("#libero").on('click', function () {
    non_pericoloso = 0;
    pericoloso=0;
    libero=1;
    continuo=0;
});

$("#continuo").on('click', function () {
    non_pericoloso = 0;
    pericoloso=0;
    libero=0;
    continuo=1;
});


$("#start").on('click', function () {
    if(pericoloso==1){
        hasStarted1=true;
    } else if(non_pericoloso==1) {
        hasStarted2=true;
    } else if(libero==1){
        hasStarted3=true;
    } else if(continuo==1){
        hasStarted4=true;
    }
});