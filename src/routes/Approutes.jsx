import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Aboutus from "../components/pages/Aboutus";
import Events from "../components/pages/events";
import Achievements from "../components/pages/Achievements";
import GolfEvent from "../components/pages/golf";
import FootballEvent from "../components/pages/cadence";
import KingfisherEvent from "../components/pages/kingfisher";
import CGIEvent from "../components/pages/cgi";
import JSWMarathonEvent from "../components/pages/jsw";
import SunfeastEvent from "../components/pages/sunfeast";
import NetcrackerEvent from "../components/pages/netcracker";

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
            <Route path="/pages/kingfisher" element={<KingfisherEvent />} />
            <Route path="/pages/cgi" element={<CGIEvent />} />
            <Route path="/pages/jsw-marathon" element={<JSWMarathonEvent />} />
            <Route path="/pages/sunfeast" element={<SunfeastEvent />} />
            <Route path="/pages/netcracker" element={<NetcrackerEvent />} />
        </Routes>
    );
};

export default AppRoutes;