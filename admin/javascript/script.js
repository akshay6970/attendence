document.addEventListener("DOMContentLoaded", function () {
    let toggle = document.querySelector(".toggle");
    let sideContainer = document.querySelector(".side-bar-Container");
    let title = document.querySelectorAll('.menu-title')
    let main = document.querySelector('.main');
    let index;

    toggle.addEventListener("click", function () {
        console.log('you clicked');
        sideContainer.classList.toggle("active");
        main.classList.toggle("active");
        title.classList.toggle("none");

    });
});


document.addEventListener("DOMContentLoaded", function() {
    let ctx = document.getElementById('myChart').getContext("2d");

    let firstHalf =[2006, 2007, 2008 , 2009 , 2010]
    let secondHalf =[15, 25, 20 , 10 , 20]

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: firstHalf,
            datasets: [
                {
                data: secondHalf,
                barThickness: 17,
                // minBarLength: 2,
            }
        ],
        },
        options:{
            plugins: {
                tooltip: {

                    // Disable the on-canvas tooltip
                    enabled: false,
                    backgroundColor: "white",
                    bodyColor:"rgb(255, 155, 68)",
                    titleColor:"black",
                    x:10,
                    y:0,
                    barThickness:17,
                    // caretX: 10,
                },
                filler: {
                    propagate: true
                }
            },
            responsive:false,
        },
        legend:{
            display:true,
            position:"bottom",
            align:"center",
        }

    });
});
