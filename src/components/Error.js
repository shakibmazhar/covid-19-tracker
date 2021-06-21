import React from "react";
import { Link } from "react-router-dom";
import "../style/Error.css";

const Error = () => {
    return (
        <div className="error">
            <h2 className="error_msg">Dead End!!</h2>
            <Link to="/">
                <button className="error_btn">Go Back</button>
            </Link>
        </div>
    );
};

export default Error;
