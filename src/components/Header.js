import { FormControl, Select, MenuItem } from "@material-ui/core";
import axios from "../axios";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../context";
import "../index.css";

const Header = () => {
    const { countries, dispatch } = useAppContext();
    const [selectedCountry, setSelectedCountry] = useState("BGD");

    // Call api function
    const fetchCountryData = async () => {
        await axios.get(`/countries/${selectedCountry}`).then((response) => {
            // console.log(response.data);
            dispatch({
                type: "SET_COUNTRY_DATA",
                payload: response.data,
            });
            dispatch({
                type: "SET_MAP",
                payload: [
                    response.data.countryInfo.lat,
                    response.data.countryInfo.long,
                ],
            });
        });
    };

    // On change function
    const handleOnChange = (e) => {
        const countryCode = e.target.value;
        setSelectedCountry(countryCode);
        fetchCountryData();
    };

    // Call API for country data on mount
    useEffect(() => {
        fetchCountryData();
    }, [selectedCountry]);

    return (
        <div className="bg-black flex items-center justify-between h-20">
            <h4 className="text-3xl p-2 ml-2 text-red-500">COVID-19 Tracker</h4>
            {/* Drop down menu */}
            <FormControl className="bg-white rounded-md w-40 right-4">
                <Select
                    variant="outlined"
                    value={selectedCountry}
                    onChange={handleOnChange}
                >
                    {countries.map((country, index) => {
                        return (
                            <MenuItem key={index} value={country.value}>
                                {country.name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </div>
    );
};

export default Header;
