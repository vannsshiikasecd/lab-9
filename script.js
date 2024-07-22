$(document).ready(function() {
   
    $('.filter-btn').on('click', function() {
        var category = $(this).attr('data-category');
        
        if (category === 'all') {
            $('.photo').show();
        } else {
            $('.photo').hide();
            $('.photo[data-category="' + category + '"]').show();
        }
    });

    
    $('.photo img').on('click', function() {
        var src = $(this).attr('src');
        $('#lightbox-img').attr('src', src);
        $('#lightbox').fadeIn();
    });

    $('#close').on('click', function() {
        $('#lightbox').fadeOut();
    });

    $('#lightbox').on('click', function(event) {
        if (event.target.id === 'lightbox') {
            $('#lightbox').fadeOut();
        }
    });