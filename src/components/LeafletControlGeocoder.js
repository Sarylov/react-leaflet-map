import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

import { iconLeaflet } from "../constans/index.js";

export function LeafletControlGeocoder() {
    const map = useMap();
  
    useEffect(() => {
      var geocoder = L.Control.Geocoder.nominatim();
      if (typeof URLSearchParams !== "undefined" && window.location.search) {
        // parse /?geocoder=nominatim from URL
        var params = new URLSearchParams(window.location.search);
        var geocoderString = params.get("geocoder");
        if (geocoderString && L.Control.Geocoder[geocoderString]) {
          geocoder = L.Control.Geocoder[geocoderString]();
        } else if (geocoderString) {
          console.warn("Unsupported geocoder", geocoderString);
        }
      }
  
      L.Control.geocoder({
        query: "",
        placeholder: "Search here...",
        defaultMarkGeocode: false,
        geocoder
      })
        .on("markgeocode", function (e) {
          var latlng = e.geocode.center;
          L.marker(latlng, { iconLeaflet })
            .addTo(map)
            .bindPopup(e.geocode.name)
            .openPopup();
          map.fitBounds(e.geocode.bbox);
        })
        .addTo(map);
    }, []);
  
    return null;
  }