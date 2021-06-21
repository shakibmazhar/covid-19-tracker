import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 400,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 800,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 1000,
    },
};

const mapData = (data, casesType = "cases") => {
    return data.map((country) => (
        <Circle
            pathOptions={{
                fillColor: casesTypeColors[casesType].hex,
                color: casesTypeColors[casesType].hex,
            }}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.1}
            radius={
                Math.sqrt(country[casesType]) *
                casesTypeColors[casesType].multiplier
            }
        >
            <Popup>
                <div className="popup_container">
                    <div
                        className="popup_flag"
                        style={{
                            backgroundImage: `url(${country.countryInfo.flag})`,
                        }}
                    />
                    <div className="popup_name">{country.country}</div>
                    <div className="popup_cases">
                        Cases: {numeral(country.cases).format("0,0")}
                    </div>
                    <div className="popup_deaths">
                        Deaths: {numeral(country.deaths).format("0,0")}
                    </div>
                    <div className="popup_recovered">
                        Recoveries: {numeral(country.recovered).format("0,0")}
                    </div>
                </div>
            </Popup>
        </Circle>
    ));
};

export default mapData;
