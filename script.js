$(document).ready(function () {
    $(".clickMe").on("click", function (e) {
        $(".popup").css("display", "block");
    });
    $(".center").on("click", function (e) {
        $(".popup").css("display", "none");
    });

});