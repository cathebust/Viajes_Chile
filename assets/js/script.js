//smooth scroll//

$(function () {

    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html,body").animate({
                scrolltop: $(gato).offset().scrolltop
            }, 800, function () {
                window.location.hash = gato;
            });
        }
    });

    //tooltip de buttons section inicio (carusel)//

    $('[data-bs-toggle="tooltip"]').tooltip();

});


