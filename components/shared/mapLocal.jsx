import React, { useEffect, useRef } from "react";

export const MapLocal = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ymaps) {
      const init = () => {
        const map = new window.ymaps.Map(mapRef.current, {
          center: [46.364887, 47.987949],
          zoom: 17,
        });

        const placemark = new window.ymaps.Placemark([46.364887, 47.987949], {
          balloonContent: "Наше фотоателье",
        });

        map.geoObjects.add(placemark);
      };

      window.ymaps.ready(init);
    }
  }, []);

  return <div ref={mapRef} className="mapCont" />;
};
