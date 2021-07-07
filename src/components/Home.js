import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useAppContext } from "../context";
import "../index.css";
import Infobox from "./Infobox";
import Map from "./Map";
import Table from "../components/Table";
import Linegraph from "./Linegraph";
import Globalupdate from "./Globalupdate";
import { capitalize } from "@material-ui/core";

export const Home = () => {
    const { mapPosition, dispatch } = useAppContext();
    const [casesType, setCasesType] = useState("cases");

    // Api call for daily global updates
    const fetchDaily = async () => {
        await axios.get("/all").then((response) => {
            console.log(response);
            dispatch({
                type: "SET_DAILY",
                payload: response.data,
            });
        });
    };

    // Api call for fetching countries
    const fetchCountries = async () => {
        await axios.get("/countries").then((response) => {
            // console.log(response.data);
            const country = response.data.map((item) => ({
                name: item.country,
                value: item.countryInfo.iso3,
            }));
            dispatch({
                type: "SET_COUNTRIES",
                payload: country,
            });
            dispatch({
                type: "SET_MOTHERLOAD",
                payload: response.data,
            });
        });
    };

    useEffect(() => {
        // Initial call on mount
        fetchDaily();
        fetchCountries();
        // Calls api every 10 minutes
        const intervalId = setInterval(() => {
            fetchDaily();
            console.log("API Called on Interval");
        }, 300000);
        //Clears interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    // console.log(daily);

    return (
        <div className="w-full flex flex-col bg-gray-900 lg:flex-row justify-evenly items-center lg:items-start">
            <div className="w-full flex flex-col">
                <div className="flex flex-col items-center justify-evenly lg:flex-row lg:items-start">
                    {/* Global Updates Component */}
                    <div className="w-full lg:w-1/2 max-w-xl">
                        <Globalupdate setCasesType={setCasesType} />
                    </div>
                    {/* Country specific data Component */}
                    <div className="w-full lg:w-1/2 max-w-xl">
                        <Infobox />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-evenly lg:flex-row">
                    {/* Map Component */}
                    <Map center={mapPosition} casesType={casesType} />
                    <div className="flex flex-col w-11/12 p-2 max-w-xl bg-gray-800 mt-8 mb-8 ml-4 mr-4 rounded-md border-t-4 border-red-500 items-center">
                        <h3 className="text-center text-lg p-2 mt-4 mb-4 font-bold text-white">
                            Cases by Country
                        </h3>
                        <Table />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-11/12 max-w-xl bg-gray-800 mt-8 mb-8 ml-4 mr-4 rounded-md border-t-4 border-red-500 items-center ">
                {/* Graph */}
                <h3 className="text-center text-lg p-2 mt-4 mb-4 font-bold text-white">
                    {capitalize(casesType)} History
                </h3>
                <Linegraph casesType={casesType} />
            </div>
        </div>
    );
};

export default Home;
