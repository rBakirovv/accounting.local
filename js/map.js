window.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
        center: window.innerWidth >= 1060 ? [55.731948, 37.584251] : [55.724731, 37.591043],
        zoom: window.innerWidth >= 1060 ? 17 : 15,
      }),
      myStreet1 = new ymaps.Placemark(
        [55.732120, 37.588526], {}, {
          iconLayout: "default#image",
          iconImageHref: "images/map-icon.svg",
          iconImageSize: [130, 130],
          iconImageOffset: [-30, -60],
        }
      );
    myMap.geoObjects.add(myStreet1);
    myMap.behaviors.disable("scrollZoom");
  }
})