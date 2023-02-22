import React from "react";

// Importing Components
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function AboutScreen(props) {
    return (
        <div>
            <Header appLink={props.appLink}/>
            <AboutUs />
            <Footer />
        </div>
    );
}

export default AboutScreen;