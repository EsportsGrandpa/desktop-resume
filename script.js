$(document).ready(function () {
    $(".effect").on("click", function (e) {
        $(".popup").css("display", "block");
    });
    $(".center").on("click", function () {
        $(".popup").css("display", "none");
    });
});