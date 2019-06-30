window.onload = function () {

    var nav = document.querySelector('.heading__navs');
    var open = document.querySelector('.heading__open');

    open.addEventListener('click', function () {
        nav.classList.toggle('heading__navs--active');
        open.classList.add('btn--hide');
        open.classList.remove('btn--show');
        setTimeout(func, 3000);
    })

        

    function func() {
        nav.classList.remove('heading__navs--active');
        open.classList.add('btn--show');
        open.classList.remove('btn--hide');
    }


    var address = document.querySelector('#address');
    var phone = document.querySelector('#phone');
    console.log(address);
    console.log(phone);

    address.addEventListener('click', function () {
        address.classList.toggle('contacts--open');
    })

    phone.addEventListener('click', function () {
        phone.classList.toggle('contacts--open');
    })
    

    var scrollBtn = $('.arrow__top');
    scrollBtn.fadeOut();

    $(window).scroll(function () {
        if ($(window).scrollTop() < 937) {
            scrollBtn.fadeOut();
        } else {
            scrollBtn.fadeIn();
        }
    })


    $('.works__slider').slick({
        infinite: true,
        vertical: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            }]
    });

    $('.team__content').slick({
        infinite: true,
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        draggable: true,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 4000
                }
            }]
    });


}
function initMap() {

    var myMap = document.getElementById('map');
    var myCenter = {
        lat: -7.932735,
        lng: 112.626999                   
    };
    var markerCenter = {
        lat: -7.925417,
        lng: 112.636531 
    };
    var mapOptions = {
        zoom: 15,
        center: myCenter,
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "saturation": 5
                    },
                    {
                        "lightness": -10
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    }

    var map = new google.maps.Map(myMap, mapOptions);

    var marker = new google.maps.Marker({
        position: markerCenter,
        map: map,
        icon: '../img/marker.png'
    });
}
