import { Component, useEffect, useState } from "react";
import './index.css'
import { useNavigate } from "react-router-dom";
import { TextInput } from "../commonfiles/textinput";
import { ButtonComponent } from "../commonfiles/button";
import { useAuth } from "../authprovider";
export function hasWhiteSpace(input) {
    return input.indexOf(' ') >= 0;
}
export let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
export let phonenoregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const Facebooksignin = () => {
    localStorage.setItem('Email', 'email')
    const navigation = useNavigate()
    const [emailInput, setemailInput] = useState()
    const [password, setpassword] = useState('')

    const [getUseremail, setGetUserEmail] = useState('')
    const [getUserPassword, setGetUserPassword] = useState('')
    const [getUserPhoneNumber, setGetUserPhoneNumber] = useState('')

    const [disableLoginButton, setdisableLoginButton] = useState(true);
    const auth = useAuth()
    //By using localstorage get the stored values
    useEffect(() => {
        var getUserEmail = localStorage.getItem('userEmail');
        setGetUserEmail(getUserEmail)
        var getUserPassword = localStorage.getItem('userPassword')
        setGetUserPassword(getUserPassword)
        var getUserPhoneNumber = localStorage.getItem('phoneNumber')
        setGetUserPhoneNumber(getUserPhoneNumber)
    }, [])

    //CALL function and Render the UI whether state is changed
    useEffect(() => {

    }, [emailInput, password])

    //onchange functions
    const onemail = (email) => {
        setemailInput(email);
        checkForValidFields(email, password);
    }

    const onpassword = (passwordtext) => {
        setpassword(passwordtext);
        checkForValidFields(emailInput, passwordtext);
    }

    // Validations
    const checkForValidFields = (email, password) => {
        let boolVal =
            (reg.test(email) || email.match(phonenoregex)) &&
            !hasWhiteSpace(email) &&
            password?.length > 0 &&
            email?.length > 0 &&
            !hasWhiteSpace(password);
        setdisableLoginButton(!boolVal);
    };

    //login function
    const onlogin = () => {
        checkForValidFields(emailInput, password)

        //checking current credentails and store credentails by using localstorage
        if (getUseremail === emailInput || getUserPhoneNumber === emailInput) {
            if (getUserPassword === password) {
                localStorage.setItem('Token',true)
                auth.loginAction();

                navigation('/Facebookdashboard')

            } else {
                alert('wrong password !!')
            }
        } else {
            alert('Email/Phone Number is Un-Registered !!')

        }

    }



    return (
        <div className="loginscreencontainer">
            <div className="face-con">
                <h1 className="facebook-heading" style={{ fontFamily: 'serif', color: '#0062ff', fontSize: 45 }}>facebook</h1>
            </div>
            <div className="loginscreencontainer2" style={{ width: '30%', height: '50%' }}>
                <h1 className="loginheading" >Log in to Facebook</h1>
                <TextInput
                    heading='Email/Phone Number'
                    type='text'
                    placeholder='Enter phone number/email'
                    value={emailInput}
                    onchangefunction={onemail}
                />
                <TextInput
                    heading='Password'
                    type='text'
                    placeholder='Enter password'
                    value={password}
                    onchangefunction={onpassword}
                />

                <br />
                <ButtonComponent
                    title='Login'
                    onClickFunction={onlogin}
                    isdisable={disableLoginButton}
                />


                <div style={{ paddingBottom: 10 }}>
                    <h1 className="last-con" style={{ fontWeight: '-moz-initial' }}>
                        <span onClick={() => navigation('/forgotpassword')} style={{ color: "#3269a8", cursor: 'pointer' }}>Forgotten password? </span>
                        <span onClick={() => navigation('/Facebooksignup')} style={{ color: "#3269a8", cursor: 'pointer' }}>sign up for Facebook</span>
                    </h1>
                </div>

            </div>
        </div>

    )
}

export default Facebooksignin