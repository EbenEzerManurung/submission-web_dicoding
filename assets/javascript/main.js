//dom untuk merubah sekilas pada gambar
const gambarImage = document.querySelector("#frontend1");
const gambarImage1 = document.querySelector("#backend1");
const gambarImage2 = document.querySelector("#fullstack1");
gambarImage.setAttribute("src", "assets/image/front-end.jpg");


//manipulasi untuk gambar frontend
    gambarImage.addEventListener('mouseenter', function (event) {
        if (event.target.id === "frontend1") {
            event.target.setAttribute("src", "assets/image/4.jpg");
            return;
        } else  {
            return;
        }
    });

    gambarImage.addEventListener('mouseout', function (event) {
        if (event.target.id === "frontend1") {
            event.target.setAttribute("src", "assets/image/front-end.jpg");
            return;
        }
    });

//manipulasi untuk gambar backend
    gambarImage1.addEventListener('mouseenter', function (event) {
        if (event.target.id === "backend1") {
            event.target.setAttribute("src", "assets/image/backend1.jpg");
            return;
        } else  {
            return;
        }
    });

    gambarImage1.addEventListener('mouseout', function (event) {
        if (event.target.id === "backend1") {
            event.target.setAttribute("src", "assets/image/back-end.jpg");
            return;
        }
    });

    //manipulasi untuk gambar backend
    gambarImage2.addEventListener('mouseenter', function (event) {
        if (event.target.id === "fullstack1") {
            event.target.setAttribute("src", "assets/image/fullstack1.jpg");
            return;
        } else  {
            return;
        }
    });

    gambarImage2.addEventListener('mouseout', function (event) {
        if (event.target.id === "fullstack1") {
            event.target.setAttribute("src", "assets/image/fullstack.png");
            return;
        }
    });

    //manipulasi gambar web development
    const galeri = document.querySelector('.galeri');
    const jumbo = document.querySelector('.jumbo');
    const thumbs = document.querySelectorAll('.thumb');

    galeri.addEventListener('click', function (e) {
        if (e.target.className == 'thumb') {
            jumbo.src = e.target.src;
            jumbo.classList.add('fade');
            setTimeout(function () {
                jumbo.classList.remove('fade');
            }, 500);

            thumbs.forEach(function (thumb) {
                thumb.className = 'thumb';
            });

            e.target.classList.add('active');
        }
    })