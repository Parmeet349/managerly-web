import React from "react";

// Importing Components
import ContactSection from "./ContactSection";

const AboutUs = () => {

    // About Us Text
    const aboutText = `At Managerly, we believe that online security should be simple, accessible, and effective. 
                        That's why we created a password manager app that is designed to make your life easier while 
                        keeping your sensitive information secure. Our team of experienced developers and security experts 
                        have worked hard to create a user-friendly platform that is backed by advanced encryption technology, 
                        ensuring that your login credentials are always safe and secure. Our mission is to help individuals and 
                        businesses protect their online identities, reduce the risk of cyber attacks, and stay one step ahead of 
                        the ever-evolving threat landscape. We believe that online security should be a priority for everyone, and 
                        we are committed to making it easy for our users to keep their sensitive information safe from prying eyes. 
                        We are passionate about what we do, and we are always looking for ways to improve our product and provide 
                        the best possible user experience. If you have any questions or feedback, please don't hesitate to contact us 
                        - we'd love to hear from you!`

    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">About Us</h1>
                        <p class="leading-relaxed text-lg">{aboutText}</p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                    </div>
                    <ContactSection/>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;