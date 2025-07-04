import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Aboutus from "../components/pages/Aboutus";
import Events from "../components/pages/events";
import Achievements from "../components/pages/Achievements";
import GolfEvent from "../components/pages/golf";
import FootballEvent from "../components/pages/cadence";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/events" element={<Events />} />
            <Route path="/pages/golf" element={<GolfEvent />} />
            <Route path="/pages/cadence" element={<FootballEvent />} />
            <Route path="/events/:id" element={<Events />} />
            <Route path="/achievements" element={<Achievements />} />
        </Routes>
    );
};

export default AppRoutes;