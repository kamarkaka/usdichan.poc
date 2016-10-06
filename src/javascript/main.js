var $mobileIcon = $('.mobile-icon-js');
var $mobileMenu = $('.mobile-menu');

$mobileIcon.on('click', function(e) {
    e.preventDefault();
    $mobileIcon.toggleClass('icon-menu2');
    $mobileIcon.toggleClass('icon-cross');
    $mobileMenu.toggleClass('toggled');
});

function setHeader() {
    var $header = $('header');
    if($(document).scrollTop() > 0) {
        $header.addClass('docked');
    } else {
        $header.removeClass('docked');
    }
}
setHeader();
$(document).on('scroll', function(e) {
    setHeader();
});

var $videoContent = $('.video-content-js');
var $videoWrapper = $('.video-wrapper-js');
var $descriptionText = $('.description-text-js');
var $descriptionVideo = $('.description-video-content-js');
function setVideo() {
    var oriHeight = 720,
        oriWidth = 1280,
        height = $videoWrapper.height(),
        width = $videoWrapper.width(),
        descWidth = $descriptionVideo.width();

    if(width / height >= oriWidth / oriHeight) {
        $videoContent.css({
            'left': '',
            'height': '',
            'width': '100%'
        });
    } else {
        var left = (height * oriWidth / oriHeight - width) / 2;
        $videoContent.css({
            'left': '-' + left + 'px',
            'height': '100%',
            'width': ''
        });
    }

    var descHeight = Math.max(descWidth * 315 / 560, $descriptionText.height());
    $descriptionVideo.css({
        'height': descHeight + 'px'
    });
}

setVideo();
$(window).on('resize', function() {
    setVideo();
});

