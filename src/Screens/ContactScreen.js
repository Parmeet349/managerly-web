import React from 'react';

// Importing Components
import Header from '../components/Header';
import Contact from '../components/Contact'
import Footer from '../components/Footer';

function ContactScreen(props) {
    return (
        <div>
            <Header appLink={props.appLink}/>
            <Contact />
            <Footer/>
        </div>
    )
}

export default ContactScreen;