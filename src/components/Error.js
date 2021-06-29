import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Error = () => {
    return (
        <div className="bg-gray-900 w-screen h-screen flex flex-col items-center">
            <h2 className="text-2xl p-4 mt-40 mb-12 ml-10 mr-10 text-center text-white font-semibold">
                Dead End!!
            </h2>
            <Link to="/">
                <button className="bg-red-500 p-2 rounded-2xl text-center text-md transition ease-out duration-300 transform hover:scale-110">
                    Go Back
                </button>
            </Link>
        </div>
    );
};

export default Error;
