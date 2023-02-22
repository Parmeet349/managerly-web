import React from 'react';

// Importing Components
import Header from '../components/Header';
import ForgetPassword from '../components/ForgetPassword'
import Footer from '../components/Footer';

function ForgetPasswordScreen(props) {
    return (
        <div>
            <Header appLink={props.appLink} />
            <ForgetPassword />
            <Footer />
        </div>
    )
}

export default ForgetPasswordScreen;