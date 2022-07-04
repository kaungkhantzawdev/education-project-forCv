let screenHeight = $(window).height();
// console.log(screenHeight);

$(window).scroll(function() {
    let currentPosition = $(this).scrollTop();
    // console.log(currentPosition);
    if (currentPosition > screenHeight - 200) {
        $(".header").addClass("header-item");
        $('.scroll').addClass("tap-scroll");
    } else {
        $(".header").removeClass("header-item");
        $('.scroll').removeClass("tap-scroll");
        setActive("home");
    }
});

function setActive(current) {

    $(".nav-link").removeClass("current-section");

    $(`.nav-link[href='#${current}']`).addClass('current-section');

}

function navScroll() {

    let currentSection = $("section[id]");
    currentSection.waypoint(function(direction) {

        if (direction == "down") {
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }

    }, { offset: '150px' });

    currentSection.waypoint(function(direction) {

        if (direction == "up") {
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }

    }, { offset: '150px' });

}

navScroll();


wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();

$(".counter").counterUp({
    delay: 10,
    time: 1000
});

$(window).on("load", function() {
    $('.loader-container').fadeOut(500, function() {
        $(this).remove();
    });
});