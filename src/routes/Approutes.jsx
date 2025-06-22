import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";     
import Aboutus from "../components/pages/Aboutus";
import ContactForm from "../components/pages/Contact";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<ContactForm />} />
        </Routes>
    );
};

export default AppRoutes;