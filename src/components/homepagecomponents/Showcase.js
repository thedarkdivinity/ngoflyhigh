import React from 'react';
import {NavLink} from "react-router-dom";

const Showcase = () => {
    return (
        <section className="showcase">
        <div className="content">
        <h1 className="text-white text-center">Welcome to Our NGO</h1>
        <NavLink to="/about" className="btn btn-dark mx-auto mt-5">KNOW MORE</NavLink>
        </div>
        </section>
    )
}

export default Showcase;
