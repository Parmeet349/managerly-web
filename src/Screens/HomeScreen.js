import React from 'react';

// Importing Components
import Header from '../components/Header';
import Body from '../components/Body';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function HomeScreen(props) {
    return (
        <div>
            <Header appLink={props.appLink}/>
            <Body appLink={props.appLink}/>
            <Features />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default HomeScreen;