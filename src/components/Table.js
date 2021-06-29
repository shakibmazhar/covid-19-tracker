import React from "react";
import { useAppContext } from "../context";
import numeral from "numeral";
import "../index.css";

const Table = () => {
    const { motherload } = useAppContext();
    // console.log(motherload);
    return (
        <div className="table ml-4 mr-4 p-4 rounded-md">
            {motherload.map(({ country, cases, countryInfo }) => (
                <tr className="flex items-center justify-between">
                    <td>
                        <img
                            className="w-4"
                            src={countryInfo?.flag}
                            alt="flag"
                        />
                    </td>
                    <td className="text-md text-white text-center">
                        {country}
                    </td>
                    <td>
                        <strong className="text-red-500">
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
