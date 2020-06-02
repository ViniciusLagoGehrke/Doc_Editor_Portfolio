$(function () {
    $("#language-toggle").click(function () {
        $(".eng").switchClass("eng", "pot", 10);
        $(".pot").switchClass("pot", "eng", 10);
    });
});