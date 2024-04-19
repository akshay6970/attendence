document.addEventListener("DOMContentLoaded", function () {
    let toggle = document.querySelector(".toggle");
    let sideContainer = document.querySelector(".side-bar-Container");
    let title = document.querySelectorAll('.menu-title')
    let main = document.querySelector('.main');
    let listName = document.querySelectorAll('.title')

    toggle.addEventListener("click", function () {
        console.log('you clicked');
        sideContainer.classList.toggle("active");
        main.classList.toggle("active");
        title.forEach(function (item) {
            item.classList.toggle("none");
        });
    });

    // date picker liberary
    $('.js-example-basic-single').select2();

    $(function() {
        $("#datepicker").datepicker({
            dateFormat: 'yy-mm-dd',
            minDate: 0 // minimum selectable date is today
        });
    });


    //  hover on side bar
    
    sideContainer.addEventListener("mouseenter", function () {

        // Check if sideContainer has the active class
        if (sideContainer.classList.contains("active")) {
            // Add additional styles when mouse enters and sideContainer is active
            sideContainer.style.width = '250px';
            sideContainer.style.zIndex = '111';
            
            listName.forEach(function (item) {
                item.classList.add("show");
            });
            title.forEach(function (item) {
                item.classList.add("show-title");
            });
        } else {
            sideContainer.style.width = '250px';
        }
    });

    // hover out on SideBar
    sideContainer.addEventListener("mouseleave", function () {
        // Check if sideContainer has the active class
        if (sideContainer.classList.contains("active")) {
            // Remove additional styles when mouse leaves and sideContainer is active
            sideContainer.classList.add('hover-close'); // Set back to the original width
            sideContainer.style.zIndex = '';

            listName.forEach(function (item) {
                item.classList.remove("show");
            });
            title.forEach(function (item) {
                item.classList.remove("show-title");
            });
        } else {
            sideContainer.style.width = '250px';
        }
    });

    // employee page tab 

    var tabButtons = document.querySelectorAll(".tablinks");
    // console.log(tabButtons);

    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener("click", function () {
            var tabName = this.dataset.tab;

            var tabContent = document.getElementById(tabName);

            var allTabContent = document.querySelectorAll(".tab-content");
            var allTabButtons = document.querySelectorAll(".tablinks");

            for (var j = 0; j < allTabContent.length; j++) {
                allTabContent[j].style.display = "none";
                allTabButtons[j].classList.remove("active");
            }

            tabContent.style.display = "flex";
            this.classList.add("active");
        });
    }

    document.querySelector(".tablinks").click();
});


document.addEventListener("DOMContentLoaded", function () {
    let ctx = document.getElementById('myChart').getContext("2d");

    let firstHalf = [2006, 2007, 2008, 2009, 2010, 2011, 2012]
    let secondHalf = [15, 25, 20, 10, 20]

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: firstHalf,
            datasets: [
                {
                    label: "Total Income",
                    barPercentage: 0.5,
                    barThickness: 17,
                    maxBarThickness: 17,
                    minBarLength: 2,
                    data: [100, 75, 50, 75, 50, 75, 100],
                    backgroundColor: "rgb(255, 155, 68)",
                },
                {
                    label: "Total Outcome",
                    labels: "label 2",
                    barPercentage: 0.5,
                    barThickness: 17,
                    maxBarThickness: 17,
                    minBarLength: 2,
                    data: [90, 65, 40, 65, 40, 65, 90],
                    backgroundColor: "rgb(252, 96, 117)",
                }
            ],
        },
        options: {
            animation: false,
            plugins: {
                tooltip: {

                    // Disable the on-canvas tooltip
                    enabled: true,
                    backgroundColor: "white",
                    bodyColor: "rgb(255, 155, 68)",
                    titleColor: "black",
                    title: "hello",
                    x: 10,
                    y: 0,
                    barThickness: 17,
                    // caretX: 10,
                },
                filler: {
                    propagate: true
                },
                legend: {
                    display: false
                },
            },
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        },
    });

    let lineGraph = document.getElementById("myChart2").getContext("2d");


    new Chart(lineGraph, {
        type: 'line',
        data: {
            labels: firstHalf,
            datasets: [
                {
                    label: "Total Sales",
                    barPercentage: 0.5,
                    barThickness: 17,
                    maxBarThickness: 1,
                    minBarLength: 1,
                    data: [50, 75, 50, 75, 50, 75, 100],
                    backgroundColor: "rgb(255, 155, 68)",
                },
                {
                    label: "Total Revenue",
                    labels: "label 2",
                    barPercentage: 0.5,
                    barThickness: 1,
                    maxBarThickness: 1,
                    minBarLength: 2,
                    data: [90, 65, 40, 65, 40, 65, 50],
                    backgroundColor: "rgb(252, 96, 117)",
                }
            ],
        },
        options: {
            plugins: {
                tooltip: {

                    // Disable the on-canvas tooltip
                    enabled: true,
                    backgroundColor: "white",
                    bodyColor: "rgb(255, 155, 68)",
                    titleColor: "black",
                    title: "hello",
                    x: 10,
                    y: 0,
                    barThickness: 1,
                    // caretX: 10,
                },
                legend: {
                    display: false
                },
            },
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        },
    });
});

// owl Carusel
document.addEventListener("DOMContentLoaded", function () {
    var owl = $('#owl-carousel1').owlCarousel({
        // center:true,
        loop: true,
        margin: 18,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('.prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    // Next button functionality
    $('.next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    // =========== policy card =======
    var owl_new = $('#owl-carousel2').owlCarousel({

        loop: true,
        margin: 18,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    $('.prev-policy').click(function () {
        owl_new.trigger('prev.owl.carousel');
    });

    // Next button functionality
    $('.next-policy').click(function () {
        owl_new.trigger('next.owl.carousel');
    });
});

function close_notify() {
    document.querySelector('.alert-notify').style.display = "none";
}

//  ============ Deal Page  ====================

document.addEventListener("DOMContentLoaded", function () {

    const total = document.getElementById('total-deal').getContext("2d");

    new Chart(total, {
        type: 'bar',
        data: {
            labels: ['Inpipeline', 'Follow Up', 'Schdule', 'Conversation', 'Won', 'Lost'],
            datasets: [{
                label: '# of Votes',
                data: [400, 30, 248, 470, 470, 180],
                borderWidth: 1,
                backgroundColor: "rgba(255, 195, 143, 0.85)",
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    enabled: true,
                    backgroundColor: "white",
                    bodyColor: "rgb(255, 155, 68)",
                    titleColor: "black",
                    title: "hello",
                    x: 10,
                    y: 0,
                    barThickness: 6,
                },
                legend: {
                    display: false
                },
            },

        },
    });

    const lostDeal = document.getElementById('lost-deal').getContext("2d");

    new Chart(lostDeal, {
        type: 'bar',
        data: {
            labels: ['conversation', 'Follow Up','Inpipeline' ],
            datasets: [{
                label: '# of Votes',
                data: [400, 30, 448],
                borderWidth: 1,
                backgroundColor: "rgba(249, 108, 133, 0.85)",
                barPercentage: 0.5,
                barThickness: 17,
                maxBarThickness: 100,
                minBarLength: 2,
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    enabled: true,
                    backgroundColor: "white",
                    bodyColor: "rgb(255, 155, 68)",
                    titleColor: "black",
                    title: "hello",
                    x: 10,
                    y: 0,
                    barThickness: 1,
                },
                legend: {
                    display: false
                },
            },
            indexAxis: 'y',
        },
    });

    const wonDeal = document.getElementById('won-deal').getContext("2d");

    new Chart(wonDeal, {
        type: 'bar',
        data: {
            labels: ['conversation', 'Follow Up','Inpipeline' ],
            datasets: [{
                label: '# of Votes',
                data: [400, 122, 250],
                borderWidth: 1,
                backgroundColor: "rgba(119, 216, 130, 0.85)",
                barPercentage: 0.5,
                barThickness: 17,
                maxBarThickness: 100,
                minBarLength: 2,
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    enabled: true,
                    backgroundColor: "white",
                    bodyColor: "rgb(255, 155, 68)",
                    titleColor: "black",
                    title: "hello",
                    x: 10,
                    y: 0,
                    barThickness: 1,
                },
                legend: {
                    display: false
                },
            },
            indexAxis: 'y',
        },
    });

});
