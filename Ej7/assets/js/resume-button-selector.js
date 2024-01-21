'use strict';

$(function () {
    $("#collapseProfesionalSkills").collapse('show');
    $("#collapseStatic").collapse('show');
    $(".boton-selector").click(collapseButtonClick);
    $(".accordion-button").click(function () {
        $(".accordion-button").removeClass('custom-shadow');
        $(this).addClass('custom-shadow');
        $(this).style('color', '#F31A59');
    })
});

function collapseButtonClick() {
    $(".collapse").collapse('hide');
    let botones = $(".boton-selector");
    //console.log(botones);
    botones.each(function () {
        //console.log($(this));
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
    });
    $(this).addClass("active");
    console.log("Selector clicked");
}