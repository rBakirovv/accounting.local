window.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
        center: window.innerWidth >= 1060 ? [55.745891, 37.585824] : [55.737532, 37.589615],
        zoom: window.innerWidth >= 1060 ? 17 : 15,
      }),
      myStreet1 = new ymaps.Placemark(
        [55.745853, 37.587955], {}, {
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