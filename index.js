document.addEventListener("DOMContentLoaded", function () {
    var restaurantList = document.getElementById("restaurantList");
    restaurantList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            var restaurantId = event.target.getAttribute("data-restaurant-id");
            window.location.href = "menu.html?restaurant=" + restaurantId;
        }
    });
});


