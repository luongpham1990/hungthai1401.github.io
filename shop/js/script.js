$(document).ready(function() {
    /***************** Owl Carousel ******************/

    $("#slide").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });

    /***************** Full Width Slide ******************/

    var slideHeight = $(window).height();

    $('#slide .item').css('height', slideHeight);

    $(window).resize(function () {
        $('#slide .item').css('height', slideHeight);
    });
    /***************** Owl Carousel Testimonials ******************/

    $("#owl-testi").owlCarousel({

        navigation: false, // Show next and prev buttons
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "backSlide",
        autoPlay: true

    });

    $("#fb").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });
    
    $("#flexiselProduct").flexisel({
        visibleItems: 3,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,            
        pauseOnHover:true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3
            }
        }
    });

    $("#indexBlog").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        items : 3,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });

    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });

    $("#related-product-container").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        items : 3,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    $.resetColor = function() {
        $('.color').each(function() {
            $(this).css('border', '');
        });
        $('.size').each(function() {
            $(this).css('border', '');
        });
    }

    $('.color').click(function() {
        $.resetColor();
        $(this).css('border', '3px solid #393A3B');
        return false;
    });

    $('.size').click(function() {
        $.resetColor();
        $(this).css('border', '3px solid #393A3B');
        return false;
    });


    $('#descre').click(function() {
        var total = parseFloat($('#total').val());
        if (total > 0) {
            total -= 1;
            $('#total').val(total);
        }
        return false; // dont' reload html
    });

    $('#incre').click(function() {
        var total = parseFloat($('#total').val());
        total += 1;
        $('#total').val(total);
        return false;
    });

});