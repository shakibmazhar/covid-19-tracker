import React from "react";
import { useAppContext } from "../context";
import numeral from "numeral";
import "../index.css";

const Infobox = () => {
    const { countryData } = useAppContext();
    // console.log(countryData);
    return (
        <div className="flex flex-col items-center bg-gray-800 rounded-md border-t-4 border-red-500 mt-8 mb-8 ml-4 mr-4">
            <h2 className="text-xl text-white font-bold p-2">
                {countryData.country}
            </h2>
            <img
                className="w-12 object-contain rounded-sm"
                src={countryData?.countryInfo?.flag}
                alt=""
            />
            <h4 className="text-md text-white font-semibold p-2">
                {countryData.continent}
            </h4>
            {/* Info Container */}
            <div className="flex items-center m-4 w-full justify-between">
                {/* Today's cases */}
                <div className="bg-gray-700 m-2 rounded-md border-t-2 border-red-500 cursor-pointer w-1/3">
                    <h3 className="text-base font-semibold text-center p-2 text-white lg:text-lg">
                        Cases <span className="block">Today</span>
                    </h3>
                    <h4 className="text-base font-semibold p-2 text-red-500 lg:text-lg">
                        +{" "}
                        <span>
                            {numeral(countryData.todayCases).format("0,0")}
                        </span>{" "}
                    </h4>
                    <p className="p-2 text-white font-bold text-sm">
                        {" "}
                        <span className="text-red-500">
                            {numeral(countryData.cases).format("0.000a")}
                        </span>{" "}
                        total
                    </p>
                </div>
                {/* Today's deaths */}
                <div className="bg-gray-700 m-2 rounded-md border-t-2 border-red-600 cursor-pointer w-1/3">
                    <h3 className="text-base font-semibold text-center p-2 text-white lg:text-lg">
                        Deaths <span className="block">Today</span>
                    </h3>
                    <h4 className="text-base font-semibold p-2 text-red-600 lg:text-lg">
                        +{" "}
                        <span className="global_stats">
                            {numeral(countryData.todayDeaths).format("0,0")}
                        </span>{" "}
                    </h4>
                    <p className="p-2 text-white font-bold text-sm">
                        {" "}
                        <span className="text-red-600">
                            {numeral(countryData.deaths).format("0.000a")}
                        </span>{" "}
                        total
                    </p>
                </div>
                {/* Today's recovered */}
                <div className="bg-gray-700 m-2 rounded-md border-t-2 border-green-500 cursor-pointer w-1/3">
                    <h3 className="text-base font-semibold text-center p-2 text-white lg:text-lg">
                        Recoveries <span className="block">Today</span>
                    </h3>
                    <h4 className="text-base lg:text-lg font-semibold p-2 text-green-500">
                        +{" "}
                        <span>
                            {numeral(countryData.todayRecovered).format("0,0")}
                        </span>{" "}
                    </h4>
                    <p className="p-2 text-white font-bold text-sm">
                        {" "}
                        <span className="text-green-500">
                            {numeral(countryData.recovered).format("0.000a")}
                        </span>{" "}
                        total
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Infobox;
