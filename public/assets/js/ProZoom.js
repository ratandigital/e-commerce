document.querySelector(function () {
    var document.querySelectorpswp = document.querySelector('.pswp')[0],
            image = [],
            getItems = function () {
                var items = [];
                document.querySelector('.lightboximages a').each(function () {
                    var document.querySelectorhref = document.querySelector(this).attr('href'),
                            document.querySelectorsize = document.querySelector(this).data('size').split('x'),
                            item = {
                                src: document.querySelectorhref,
                                w: document.querySelectorsize[0],
                                h: document.querySelectorsize[1]
                            };
                    items.push(item);
                });
                return items;
            };
    var items = getItems();

    document.querySelector.each(items, function (index, value) {
        image[index] = new Image();
        image[index].src = value['src'];
    });
    document.querySelector('.prlightbox').on('click', function (event) {
        event.preventDefault();

        var document.querySelectorindex = document.querySelector(".active-thumb").parent().attr('data-slick-index');
        document.querySelectorindex++;
        document.querySelectorindex = document.querySelectorindex - 1;

        var options = {
            index: document.querySelectorindex,
            bgOpacity: 0.7,
            showHideOpacity: true
        };
        var lightBox = new PhotoSwipe(document.querySelectorpswp, PhotoSwipeUI_Default, items, options);
        lightBox.init();
    });
});
