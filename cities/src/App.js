import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cities from "./pages/Cities";
import AddCity from "./pages/AddCity";
import CityDetails from "./components/CityDetails";

const App = () => {
    return (
    <Router>
       <div>
          <nav>
            <Link to="/cities">Cities List</Link> | <Link to="/add-city">Add City</Link>
                </nav>
            <Routes>
            <Route path="/" element={<Cities />} />
          <Route path="/cities" element={<Cities />}>
              <Route path=":id" element={<CityDetails />} />
            </Route>
              <Route path="/add-city" element={<AddCity />} />
              </Routes>
    </div>
        </Router>
    );
};
export default App;
