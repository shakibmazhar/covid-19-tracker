import React from "react";
import { useAppContext } from "../context";
import numeral from "numeral";
import "../style/Infobox.css";

const Infobox = () => {
    const { countryData } = useAppContext();
    // console.log(countryData);
    return (
        <div className="infobox">
            <div className="infobox_style"></div>
            <h2 className="infobox_country">{countryData.country}</h2>
            <img
                className="infobox_flag"
                src={countryData?.countryInfo?.flag}
                alt="flag"
            />
            <h4 className="infobox_continent">{countryData.continent}</h4>
            <div className="infobox_info">
                <div className="new_cases">
                    <div className="new_cases_style"></div>
                    <h3>Cases Today</h3>
                    <h4>+ {numeral(countryData.todayCases).format("0,0")}</h4>
                    <p>
                        {" "}
                        <span className="total_red">
                            {numeral(countryData.cases).format("0,0")}
                        </span>{" "}
                        total
                    </p>
                </div>
                <div className="new_deaths">
                    <div className="new_deaths_style"></div>
                    <h3>Deaths Today</h3>
                    <h4>+ {numeral(countryData.todayDeaths).format("0,0")}</h4>
                    <p>
                        {" "}
                        <span className="total_red">
                            {numeral(countryData.deaths).format("0,0")}
                        </span>{" "}
                        total
                    </p>
                </div>
                <div className="new_recoveries">
                    <div className="new_recoveries_style"></div>
                    <h3>Recoveries Today</h3>
                    <h4>
                        + {numeral(countryData.todayRecovered).format("0,0")}
                    </h4>
                    <p>
                        {" "}
                        <span className="total_green">
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
