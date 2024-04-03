document.addEventListener("DOMContentLoaded", function() {
    let toggle = document.querySelector(".toggle");
    let sideContainer = document.querySelector(".side-bar-Container");
    let title = document.querySelectorAll('.menu-title')
    let index ;

    toggle.addEventListener("click", function() {
        console.log('you clicked');
        sideContainer.classList.toggle("active");
        title.classList.toggle("none");

    });
});
