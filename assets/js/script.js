$(document).ready(function() {
    $(window).on('load', function() {
        hdSticky();
    });

    $(window).scroll(function() {
        hdSticky();
    });


    function hdSticky() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".fixed-top ").addClass("add-header-active ");
        } else {
            $(".fixed-top ").removeClass("add-header-active ");
        }
    }

});

// search
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// mobile-view
$(".side-btn-mobile").on('click', function() {
    $('body').toggleClass('side-Open-mobile');
});

// sidebar
$(".side-btn").on('click', function() {
    $('body').toggleClass('side-Open');
});