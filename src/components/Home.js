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
        <div className="flex flex-col bg-gray-900 lg:flex-row justify-evenly items-center lg:items-start">
            <div className="flex flex-col">
                <div className="flex flex-col justify-evenly lg:flex-row">
                    {/* Global Updates Component */}
                    <div>
                        <Globalupdate setCasesType={setCasesType} />
                    </div>
                    {/* Country specific data Component */}
                    <div>
                        <Infobox />
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* Map Component */}
                    <Map center={mapPosition} casesType={casesType} />
                </div>
            </div>
            <div className="flex flex-col w-96 bg-gray-800 m-5 rounded-md border-t-4 border-red-500 items-center lg:w-4/12">
                <h3 className="text-center text-lg p-2 font-bold text-white">
                    Live Cases by Country
                </h3>
                <Table />
                <h3 className="text-center text-lg p-2 font-bold text-white mt-2">
                    {capitalize(casesType)} History
                </h3>
                <Linegraph casesType={casesType} />
            </div>
        </div>
    );
};

export default Home;
