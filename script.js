$(document).ready(function(){

$("#indexdoor").click(function(){
    var output;
    var result = Array(6);
    result[0] = "osmanthus_honey_brew";
    result[1] = "under_the_umbrella";
    result[2] = "unrequitted_love";
    result[3] = "troubled_by_the_moon";
    result[4] = "well-intentioned";
    result[5] = "four_hundred_dollars";

    var Num = Math.floor(Math.random() * 6);
    var output = result [Num];
    // console.log(output);
    window.location.href = "" + output + ".html";
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

$(document).mousemove(function(e) {
    setTimeout(function() {
      $('#shanshan').css({'left': e.pageX + 48 + 'px', 'top': e.pageY + 200 + 'px'});
    }, 120); // 500 milliseconds (0.5 seconds) delay
  });


 // Check if the current URL ends with ".html"
 if (currentUrl.endsWith(".html")) {
    // Check if the slug is "index.html"
    if (currentUrl.endsWith("index.html")) {
        var newUrl = currentUrl.replace("index.html", "");
    }
  
    window.history.replaceState({}, document.title, newUrl);
}

});