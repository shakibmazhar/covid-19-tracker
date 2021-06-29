import React from "react";
import { useAppContext } from "../context";
import numeral from "numeral";
import "../index.css";

const Infobox = () => {
    const { countryData } = useAppContext();
    // console.log(countryData);
    return (
        <div className="flex flex-col items-center bg-gray-800 rounded-md border-t-4 border-red-500 m-5">
            <h2 className="text-xl text-white font-bold p-2">
                {countryData.country}
            </h2>
            <img
                className="w-12 object-contain rounded-sm"
                src={countryData?.countryInfo?.flag}
                alt="flag"
            />
            <h4 className="text-md text-white font-semibold p-2">
                {countryData.continent}
            </h4>
            {/* Info Container */}
            <div className="flex items-center m-4 w-11/12 justify-between">
                {/* Cases Container */}
                <div className="bg-gray-700 p-2 rounded-md border-t-2 border-red-500 m-2 w-full">
                    <h3 className="font-bold text-center text-lg text-white p-2">
                        Cases <span className="block">Today</span>
                    </h3>
                    <h4 className="text-lg text-red-500 font-bold p-2">
                        + {numeral(countryData.todayCases).format("0,0")}
                    </h4>
                    <p className="text-center p-2 font-semibold text-white text-sm">
                        {" "}
                        <span className="text-red-500">
                            {numeral(countryData.cases).format("0,0")}
                        </span>{" "}
                        total
                    </p>
                </div>
                {/* Deaths Container */}
                <div className="bg-gray-700 p-2 rounded-md border-t-2 border-red-600 m-2 w-full">
                    <h3 className="font-bold text-center text-lg text-white p-2">
                        Deaths <span className="block">Today</span>
                    </h3>
                    <h4 className="text-lg text-red-600 font-bold p-2">
                        + {numeral(countryData.todayDeaths).format("0,0")}
                    </h4>
                    <p className="text-center p-2 font-semibold text-white text-sm">
                        {" "}
                        <span className="text-red-600">
                            {numeral(countryData.deaths).format("0,0")}
                        </span>{" "}
                        total
                    </p>
                </div>
                {/* Recoveries Container */}
                <div className="bg-gray-700 p-2 rounded-md border-t-2 border-green-500 m-2 w-full">
                    <div className="new_recoveries_style"></div>
                    <h3 className="font-bold text-center text-lg text-white p-2">
                        Recoveries <span className="block">Today</span>
                    </h3>
                    <h4 className="text-lg text-green-500 font-bold p-2">
                        + {numeral(countryData.todayRecovered).format("0,0")}
                    </h4>
                    <p className="text-center p-2 font-semibold text-white text-sm">
                        {" "}
                        <span className="text-green-500">
                            {numeral(countryData.recovered).format("0,0")}
                        </span>{" "}
                        total
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Infobox;
