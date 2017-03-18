function startApp() {

    let images = [
        'images/background/bg1.jpg',
        'images/background/bg2.jpg',
        'images/background/bg3.jpg',
        'images/background/bg4.jpg'];

    //RUN BACKGROUND CAROUSEL
    let i = 0;
    $("#background-bottom").css("opacity", 0);
    changeImage('#background-bottom', images[i]);
    changeBackground();
    setInterval(changeBackground, 10000);

    //BACKGROUND CONTROLLERS
    function changeImage(id, image) {
        $(id).css('background', 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0,0,0,.6)), url(' + image + ') center/cover no-repeat fixed');
    }

    function changeBackground() {
        $('#background-bottom')
            .animate({"opacity": 1}, 5000, function () {
                changeImage('#background-top', images[i], 1);
                if (++i >= images.length) {
                    i = 0;
                }
                $("#background-bottom").css("opacity", 0);
                changeImage('#background-bottom', images[i]);
            });
    }
}