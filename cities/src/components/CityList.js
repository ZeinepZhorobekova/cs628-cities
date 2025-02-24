import React from "react";
import { Link } from "react-router-dom";
import { citiesData } from "../data";

const CityList = () => {
    return (
        <div>
            <h2>City List</h2>
            <ul>
                {citiesData.map((city) => (
                    <li key={city.id}>
                        <Link to={`/cities/${city.id}`}>{city.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CityList;
