//  THIS IS THE FUNCTIONS OF THE ENVELOPE & HEARTS ON CLICK  //

$(document).ready(function(){
    var envelope = $("#envelope");  // declaring a varaible object in JS
    var hearts = $(".heart");

    envelope.click(function(){  // open & closes the envelope on click
        if (envelope.hasClass("open")){
            close();
        }

        else{
            open();
        }
    });

    function open(){
        envelope.addClass("open")
            .removeClass("close");

        hearts.css("animation", "none");  // restart the heart animation on reopen
        setTimeout(function(){
            hearts.css("animation", "");
        }, 10);  // sets delay to force reflow of hearts
    }

    function close(){
        envelope.addClass("close")
            .removeClass("open");
    }

})

