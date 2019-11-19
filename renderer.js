$('.search_func').on('keydown', function () {

    const val = $(this).val();
    const xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+val+"&api_key=sIQU43KI5M1D0uhZCBgGJ4IHp303lv7D&limit=6");

    xhr.done(function(data) {

        $('#content').empty();

        const items = [];

        $.each( data.data, function( key, value ) {
            console.log(key + ' is ' + value.images.original.url);
            items.push('<div class="col-4 mb-3"> <img class="w-100 gifFunc" src="'+ value.images.original.url +'"> </div>');

        });

        $('#content').append(items.join(''));

        $('.gifFunc').on('click', function () {
            const url = $(this).attr('src');
            const overlay = $('.overlay');

            overlay.removeClass('d-none');
            overlay.addClass('d-flex');

            $('#overlayImage').attr('src', url);

        });

        $('.closeOverlay').on('click', function () {
            const overlay = $('.overlay');

            overlay.addClass('d-none');
            overlay.removeClass('d-flex');

            $('#overlayImage').attr('src', '');

        });

    });
});


