import React from "react";
import { Outlet } from "react-router-dom";
import CityList from "../components/CityList";

const Cities = () => {
    return (
        <div>
            <h1>Cities Application</h1>
            <CityList />
            <Outlet /> {/* This will render the nested city details */}
        </div>
    );
};

export default Cities;
