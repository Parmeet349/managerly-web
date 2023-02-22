import React from "react";

// Importing Images
import profile from "../assets/images/profile.svg"

const Testimonials = () => {

    // List of testimonials with description and name
    const testimonials = [
        {
            description: `I've been using this product for a few weeks now and I'm blown away by the results. 
                            It's so easy to use and has really helped me to stay organized and productive. 
                            I love how intuitive the interface is and how quickly I can get things done. 
                            Highly recommended!`,
            name: "Jane D"
        },
        {
            description: `I was a little skeptical at first, but this product has exceeded my expectations in every way. 
                            It's made my life so much easier and has helped me to save time and reduce stress. 
                            The customer support team is also fantastic and always goes above and beyond to help. 
                            I can't imagine going back to the way things were before.`,
            name: "John S"
        },
        {
            description: `I've tried a lot of similar products over the years, but this one really stands out from the crowd. 
                            It's incredibly user-friendly and the features are exactly what I was looking for. 
                            It's made a big difference in my workflow and has helped me to be more efficient and productive. 
                            I highly recommend this product to anyone who wants to streamline their workday.`,
            name: "Sarah M"
        }
    ]

    // Map through the testimonials and return the desired HTML
    const testimonialsList = testimonials.map((testimonial) => {
        return (
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div class="h-full text-center">
                    <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={profile} />
                    <p class="leading-relaxed">{testimonial.description}</p>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
                    {/* <p class="text-gray-500">Senior Product Designer</p> */}
                </div>
            </div>
        )
    })

    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {testimonialsList}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonials;