var searchButton = document.querySelector('.hotel-search-button');

var form = document.querySelector(".hotel-search-form");
var dateFrom = form.querySelector(".from-date");
var dateTo = form.querySelector(".to-date");
var parentNumber = form.querySelector(".parent-number");
var childrenNumber = form.querySelector(".children-number");
var errMessage = form.querySelector(".error-message");

form.classList.add("form-hide");

searchButton.addEventListener("click", function () {
    form.classList.toggle("form-hide");

    if (dateFrom.value && dateTo.value && parentNumber.value && childrenNumber.value) {
        errMessage.classList.remove("error-message-show");
    };
});

form.addEventListener("submit", function (evt) {
    if (!dateFrom.value || !dateTo.value || !parentNumber.value || !childrenNumber.value) {
        evt.preventDefault();
        form.classList.remove("form-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("form-error");
        errMessage.classList.add("error-message-show");
    }
});