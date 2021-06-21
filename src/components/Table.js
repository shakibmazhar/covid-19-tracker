import React from "react";
import { useAppContext } from "../context";
import numeral from "numeral";
import "../style/Table.css";

const Table = () => {
    const { motherload } = useAppContext();
    // console.log(motherload);
    return (
        <div className="table">
            {motherload.map(({ country, cases, countryInfo }) => (
                <tr>
                    <td>
                        <img
                            className="table_flag"
                            src={countryInfo?.flag}
                            alt="flag"
                        />
                    </td>
                    <td className="table_country">{country}</td>
                    <td>
                        <strong className="table_stats">
                            {cases >= 1000
                                ? numeral(cases).format("0.0 a")
                                : numeral(cases).format("0,0")}
                        </strong>
                    </td>
                </tr>
            ))}
        </div>
    );
};

export default Table;
