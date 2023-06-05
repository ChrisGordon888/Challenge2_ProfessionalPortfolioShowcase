// Text fade
$(document).ready(function() {
    $(".about-text").hide().fadeIn(2333);
});

// $(document).ready(function() {
//     $(".work-image").hide().fadeIn(2333);
// });

$(document).ready(function() {
    $(".contact-info").hide().fadeIn(2333);
});

// Dark mode
$(document).ready(function() {
    $("#dark-mode-toggle").click(function() {
        $("body").toggleClass("dark-mode");
        if ($("body").hasClass("dark-mode")) {
            $("#dark-mode-toggle").text("Light Mode");
        } else {
            $("#dark-mode-toggle").text("Dark Mode");
        }
    });
});

// Code for the smooth scroll function
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// // Code for the scrolling header color change function
// $(document).ready(function() {
//     $(window).scroll(function() {
//         let scroll = $(window).scrollTop();
//         if (scroll > 300) {
//             $(".header-left").css("background", "#343a40");
//         } else {
//             $(".header-left").css("background", "transparent"); 
//         }
//     });
// });

// // Code for changing the banner content on page load
// $(document).ready(function() {
//     let bannerContent = ["Welcome to my Portfolio", "Christopher Gordon", "Web Developer", "Let's create something together"];
//     let i = 0;
//     setInterval(function() {
//         $("#banner-content").text(bannerContent[i]);
//         i = (i + 1) % bannerContent.length;
//     }, 2000);
// });