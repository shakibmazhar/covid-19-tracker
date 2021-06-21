import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useAppContext } from "../context";
import "../style/Home.css";
import Infobox from "./Infobox";
import Map from "./Map";
import Table from "../components/Table";
import Linegraph from "./Linegraph";
import Globalupdate from "./Globalupdate";

export const Home = () => {
    const { mapPosition, dispatch } = useAppContext();
    const [casesType, setCasesType] = useState();

    useEffect(() => {
        // Api call for daily global updates
        const fetchDaily = async () => {
            await axios.get("/all").then((response) => {
                // console.log(response);
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
        <div className="home">
            <div className="home_left">
                <div className="row_one">
                    <div className="daily_update">
                        <Globalupdate setCasesType={setCasesType} />
                    </div>
                    {/* Country specific data */}
                    <div className="country_data">
                        <Infobox />
                    </div>
                </div>
                <div className="row_two">
                    {/* Map Component */}
                    <Map center={mapPosition} casesType={casesType} />
                </div>
            </div>
            <div className="home_right">
                <div className="home_right_style"></div>
                <h3>Live Cases by Country</h3>
                <Table />
                <h3>Cases History</h3>
                <Linegraph className="home_right_graph" casesType={casesType} />
            </div>
        </div>
    );
};

export default Home;
