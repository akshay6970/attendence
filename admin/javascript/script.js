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
    let secondHalf =[0, 25, 50 , 75 , 100]

    var neww = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["python", "Javascript", "php", "Java", "c##", "C++"],
            datasets: [
                {
                data: secondHalf,
                label:"false",
            }
        ],
        },
        options:{
            tooltips:{
                intersect : false,
                mode:'index'
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
