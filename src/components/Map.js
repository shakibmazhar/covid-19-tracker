import React from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../index.css";
import { useAppContext } from "../context";
import mapData from "../mapData";

const Map = ({ center, casesType }) => {
    const { motherload } = useAppContext();
    return (
        <div className="map">
            <LeafletMap center={center} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapData(motherload, casesType)}
            </LeafletMap>
        </div>
    );
};

export default Map;
