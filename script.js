$(document).ready(function(){

$("#indexdoor").click(function(){
    var output;
    var result = Array(5);
    result[0] = "osmanthus_honey_brew";
    result[1] = "under_the_umbrella";
    result[2] = "unrequitted_love";
    result[3] = "troubled_by_the_moon";
    result[4] = "well-intentioned";

    var Num = Math.floor(Math.random() * 5);
    var output = result [Num];
    // console.log(output);
    window.location.href = "file:///Users/valia/Documents/GitHub/Moon-Bound-Express/" + output + ".html";
});

$(".cross").click(function(){
    $('.blogholder').hide();
});

$(".blogbutton").click(function(){
    $('.blogholder').css("display","flex");
});

$(document).on('click', function (event) {
    var display = $('.blogholder').css('display');
    if (!$(event.target).closest('.blog').length && !$(event.target).closest('.blogbutton').length && display == "flex") {
        $('.blogholder').hide();
    } else {}
});


});