ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.758468,37.601088],
                zoom: 14
            });

            var myPlacemark = new ymaps.Placemark([55.758468,37.601088], {}, {
              iconLayout: 'default#image',
              iconImageHref: '/img/mark.svg',
              iconImageSize: [20, 20]
            })

            myMap.geoObjects.add(myPlacemark);
        }
