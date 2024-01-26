$(document).ready(function(){

$("#indexdoor").click(function() {
    var allPages = [
        "osmanthus_honey_brew",
        "under_the_umbrella",
        "unrequitted_love",
        "troubled_by_the_moon",
        "well-intentioned",
        "four_hundred_dollars"
    ];

    // Get the list of visited pages from localStorage or initialize an empty array
    var visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];

    // Filter out visited pages from the available options
    var availablePages = allPages.filter(function(page) {
        return !visitedPages.includes(page);
    });

    // If there are no available pages, reset the visitedPages array
    if (availablePages.length === 0) {
        visitedPages = [];
        availablePages = allPages; // Refill the availablePages array
    }

    // Randomly select a page from the available options
    var randomIndex = Math.floor(Math.random() * availablePages.length);
    var selectedPage = availablePages[randomIndex];

    // Update visited pages and store in localStorage
    visitedPages.push(selectedPage);
    localStorage.setItem('visitedPages', JSON.stringify(visitedPages));

    // Redirect to the selected page
    window.location.href = selectedPage + ".html";
});




$(".cross").click(function(){
    $('.blogholder').hide();
    $('#shanshan').show();
});

$(".blogbutton").click(function(){
    $('.blogholder').css("display","flex");
    $('#shanshan').hide();
});

$(document).on('click', function (event) {
    var display = $('.blogholder').css('display');
    if (!$(event.target).closest('.blog').length && !$(event.target).closest('.blogbutton').length && display == "flex") {
        $('.blogholder').hide();
        $('#shanshan').show();
    } else {}
});

$(document).mousemove(function(e) {
    setTimeout(function() {
      $('#shanshan').css({'left': e.pageX + 48 + 'px', 'top': e.pageY + 200 + 'px'});
    }, 120); // 500 milliseconds (0.5 seconds) delay
  });



var audioElement = document.getElementById('myAudio');
  var audioPlayed = false;

  // Attach click event to the .blogbutton
  $(".blogbutton").click(function() {
    // Check if audio has not been played yet
    if (!audioPlayed) {
      // Play the audio
      audioElement.play();
      audioPlayed = true;
    }

    // Add your other logic for displaying the blog or any other actions
    $('.blogholder').css("display", "flex");
    $('#shanshan').hide();
  });

});