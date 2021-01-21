$(function () {
    $(".change-eaten").on("click", function (event) {
        let id = $(this).data("id")
        $.ajax("/api/newBurger/" + id, {
            type: "PUT",
            data: id
        }).then(function () {
            location.reload()
        })
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#new").val().trim()
        }
        $.ajax("/api/newBurger/", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload()
        })
    })
})