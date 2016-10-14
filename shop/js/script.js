$(document).ready(function() {

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').css('display', 'block');
        } else {
            $('.scrollToTop').css('display', 'none');
        };
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},600);
        return false;
    });

    // Show Find Box

    $('.find-box-md').on('click', function() {
        $('.find-container-md').css('display', 'block');
        $('.find-md').css('display', 'block');
        $('#find-md').css('display', 'block');
        $('#find-md').trigger('focus');
    });

    $('#find-md').focusout(function() {
        $('.find-container-md').css('display', 'none');
    });

    $('.find-box-xs-sm').on('click', function() {
        $('.find-container-xs-sm').css('display', 'block');
        $('.find-xs-sm').css('display', 'block');
        $('#find-xs-sm').css('display', 'block');
        $('#find-xs-sm').trigger('focus');
    });

    $('#find-xs-sm').focusout(function() {
        $('.find-container-xs-sm').css('display', 'none');
    });

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
        return false; // dont' reload html
    });


    $('#descre').click(function() {
        var total = parseFloat($('#total').val());
        if (total > 0) {
            total -= 1;
            $('#total').val(total);
        }
        return false;
    });

    $('#incre').click(function() {
        var total = parseFloat($('#total').val());
        total += 1;
        $('#total').val(total);
        return false;
    });

    $('.delete1').click(function() {
        $('.box-1').fadeOut('slow', function() {
            $('.box-1').remove();
        });
    });

    $('.delete2').click(function() {
        $('.box-2').fadeOut('slow', function() {
            $('.box-2').remove();
        });
    });

    $('#delete').click(function() {
        $('.cart-box').fadeOut('slow', function() {
            $('.cart-box').remove();
        });
    });
    
});