import React, { useState } from 'react';
import { useSearchParams  } from 'react-router-dom'

// Importing Components
import ContactSection from "./ContactSection";

function ForgetPassword() {

    console.log("ForgetPassword");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // alert('Password Matched');
            // On Submit press call api and pass the new password and the token
            
            // Call API
            const url = 'https://password-manager-13.herokuapp.com/changePassword';
            const data = {
                type: "resetPass",
                email_address: email,
                password: password,
                new_password: password,
                token: token
            }
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    alert(data.message);
                    // Refresh Page and delete params from url
                    window.location.reload(false);
                }
                else{
                    alert(data.message);
                }
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            alert('Password Not Matched');
        }
    }

    let [searchParams, setSearchParams] = useSearchParams();
    let token = searchParams.get('token');
    let email = searchParams.get('email');

    return (
        <div>
            <section class="text-gray-600 body-font relative">
                <form onSubmit={handleSubmit}>
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Reset Password</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Forgot your password? Reset it in seconds with just a few clicks.</p>
                        </div>
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                                        <input type="password" value={password} onChange={handlePasswordChange} id="password" name="password" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <label for="confirmPassword" class="leading-7 text-sm text-gray-600">New Password</label>
                                        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} id="confirmPassword" name="confirmPassword" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div class="p-2 w-full">
                                    <button type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Reset</button>
                                </div>
                                <ContactSection />
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default ForgetPassword;