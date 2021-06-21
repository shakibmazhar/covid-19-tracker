import numeral from "numeral";
import React from "react";
import { useAppContext } from "../context";
import "../style/Globalupdates.css";

const Globalupdate = ({ setCasesType }) => {
    const { daily } = useAppContext();

    return (
        <div className="globalUpdate">
            {/* Style bar */}
            <div className="global_bar"></div>
            <h2 className="global_title">Worldwide Updates</h2>
            <div className="global_info">
                {/* Today's cases */}
                <div
                    className="global_cases"
                    onClick={() => setCasesType("cases")}
                >
                    <div className="global_bar"></div>
                    <h3 className="global_label">Cases Today</h3>
                    <h4>
                        +{" "}
                        <span className="global_stats">
                            {numeral(daily.todayCases).format("0,0")}
                        </span>{" "}
                    </h4>
                    <p>
                        {" "}
                        <span className="global_stats">
                            {numeral(daily.cases).format("0.00a")}
                        </span>{" "}
                        total
                    </p>
                </div>
                {/* Today's deaths */}
                <div
                    className="global_deaths"
                    onClick={() => setCasesType("deaths")}
                >
                    <div className="global_bar"></div>
                    <h3 className="global_label">Deaths Today</h3>
                    <h4>
                        +{" "}
                        <span className="global_stats">
                            {numeral(daily.todayDeaths).format("0,0")}
                        </span>{" "}
                    </h4>
                    <p>
                        {" "}
                        <span className="global_stats">
                            {numeral(daily.deaths).format("0.00a")}
                        </span>{" "}
                        total
                    </p>
                </div>
                {/* Today's recovered */}
                <div
                    className="global_recovered"
                    onClick={() => setCasesType("recovered")}
                >
                    <div className="global_bar_green"></div>
                    <h3 className="global_label">Recoveries Today</h3>
                    <h4>
                        +{" "}
                        <span className="global_stats_green">
                            {numeral(daily.todayRecovered).format("0,0")}
                        </span>{" "}
                    </h4>
                    <p>
                        {" "}
                        <span className="global_stats_green">
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
