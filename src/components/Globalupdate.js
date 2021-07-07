import numeral from "numeral";
import React from "react";
import { useAppContext } from "../context";
import "../index.css";

const Globalupdate = ({ setCasesType }) => {
    const { daily } = useAppContext();

    return (
        <div className="border-t-4 border-red-500 bg-gray-800 rounded-md flex flex-col mt-8 mb-8 ml-4 mr-4">
            <h2 className="text-xl p-4 text-center m-2 text-white font-bold">
                Worldwide Updates
            </h2>
            {/* Updates Container */}
            <div className="w-full flex">
                {/* Today's cases */}
                <div
                    className="bg-gray-700 m-2 rounded-md border-t-2 border-red-500 cursor-pointer w-1/3"
                    onClick={() => setCasesType("cases")}
                >
                    <h3 className="text-base font-semibold text-center p-2 text-white lg:text-lg">
                        Cases <span className="block">Today</span>
                    </h3>
                    <h4 className="text-base font-semibold p-2 text-red-500 lg:text-lg">
                        + <span>{numeral(daily.todayCases).format("0,0")}</span>{" "}
                    </h4>
                    <p className="p-2 text-white font-bold text-sm">
                        {" "}
                        <span className="text-red-500">
                            {numeral(daily.cases).format("0.00a")}
                        </span>{" "}
                        total
                    </p>
                </div>
                {/* Today's deaths */}
                <div
                    className="bg-gray-700 m-2 rounded-md border-t-2 border-red-600 cursor-pointer w-1/3"
                    onClick={() => setCasesType("deaths")}
                >
                    <h3 className="text-base font-semibold text-center p-2 text-white lg:text-lg">
                        Deaths <span className="block">Today</span>
                    </h3>
                    <h4 className="text-base font-semibold p-2 text-red-600 lg:text-lg">
                        +{" "}
                        <span className="global_stats">
                            {numeral(daily.todayDeaths).format("0,0")}
                        </span>{" "}
                    </h4>
                    <p className="p-2 text-white font-bold text-sm">
                        {" "}
                        <span className="text-red-600">
                            {numeral(daily.deaths).format("0.00a")}
                        </span>{" "}
                        total
                    </p>
                </div>
                {/* Today's recovered */}
                <div
                    className="bg-gray-700 m-2 rounded-md border-t-2 border-green-500 cursor-pointer w-1/3"
                    onClick={() => setCasesType("recovered")}
                >
                    <h3 className="text-base font-semibold text-center p-2 text-white lg:text-lg">
                        Recoveries <span className="block">Today</span>
                    </h3>
                    <h4 className="text-base lg:text-lg font-semibold p-2 text-green-500">
                        +{" "}
                        <span>
                            {numeral(daily.todayRecovered).format("0,0")}
                        </span>{" "}
                    </h4>
                    <p className="p-2 text-white font-bold text-sm">
                        {" "}
                        <span className="text-green-500">
                            {numeral(daily.recovered).format("0.00a")}
                        </span>{" "}
                        total
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Globalupdate;
