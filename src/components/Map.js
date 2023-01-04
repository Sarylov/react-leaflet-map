import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import {LeafletControlGeocoder} from "./LeafletControlGeocoder" 

export default function Map() {
  return (
    <MapContainer center={[40.505, -100.09]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LeafletControlGeocoder/>
    </MapContainer>
  );
}
