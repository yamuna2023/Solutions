import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../commonfiles/button";
import { TextInput } from "../commonfiles/textinput";
import { hasWhiteSpace, phonenoregex, reg } from "../loginscreens/login";
import './index.css';

const Facebooksignup = () => {

    const Navigation = useNavigate();

    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [phonenumber, setphonenumber] = useState('')
    const [disableLoginButton, setdisableLoginButton] = useState(true);


    useEffect(() => { }, [email, password, confirmpassword, phonenumber])

    //Onchange arrow functions
    const handleChangeEmail = (emailtext) => {
        setemail(emailtext);
        checkForValidFields(emailtext, password, confirmpassword, phonenumber);
    }
    const handleChangePassword = (passwordtext) => {
        setpassword(passwordtext);
        checkForValidFields(email, passwordtext, confirmpassword, phonenumber);

    }
    const handleChangeConfirmPassword = (confirmpasswordtext) => {
        setconfirmpassword(confirmpasswordtext);
        // console.log(phonenumber.toString().length ,'<---lenght')
        checkForValidFields(email, password, confirmpasswordtext, phonenumber);

    }
    const handleChangePhoneNumber = (number) => {
        setphonenumber(number);
        checkForValidFields(email, password, confirmpassword, number);

    }

    // Validations
    const checkForValidFields = (email, password, confirmpassword, phonenumber) => {
        let boolVal =
            reg.test(email) &&
            !hasWhiteSpace(email) &&
            email?.length > 0 &&
            password?.length > 0 &&
            !hasWhiteSpace(password) &&
            confirmpassword?.length > 0 &&
            !hasWhiteSpace(confirmpassword) &&
            phonenumber.match(phonenoregex) &&
            phonenumber.toString()?.length >= 10;
        setdisableLoginButton(!boolVal);
    };

    //Signup function and store the value by using localstorage
    const onsignup = () => {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password)
        localStorage.setItem('phoneNumber', phonenumber)

        if (password === confirmpassword) {
            alert("User Registered Successfully")
            Navigation('/Facebooksignin')
            

        }
        else {
            alert('Password mismatch !!')
        }
    }


    return (
        <div className="registercontainer1"  >
            <div className="face-con">
                <h1 className="facebook-heading" style={{ fontFamily: 'serif', color: '#0062ff', fontSize: 45 }}>facebook</h1>
            </div>

            <div className="registercontainer2" style={{ width: '50%' }}>
                <p className="registersubheading" >Create a new account</p>
                <p className="registersubheading">It's quick and easy</p>
                <TextInput
                    heading='Enter Email'
                    type='text'
                    placeholder='Enter email address'
                    value={email}
                    onchangefunction={handleChangeEmail}
                />
                <TextInput
                    heading='Enter New Password'
                    type='text'
                    placeholder='New password'
                    value={password}
                    onchangefunction={handleChangePassword}
                    maxlength={10}
                />

                <TextInput
                    heading='Enter Confirm Password'
                    type='text'
                    placeholder='Enter confirm password'
                    value={confirmpassword}
                    onchangefunction={handleChangeConfirmPassword}
                    maxlength={10}
                />
                <TextInput
                    heading='Enter Phone Number'
                    type='text'
                    placeholder='Enter phone number'
                    value={phonenumber}
                    onchangefunction={handleChangePhoneNumber}
                    maxlength={10}
                />
                <p className="registerparagraph">People who use our service may have uploaded your contact information to Facebook. Learn more.

                    By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                {/* <button onClick={onsignup} className="button"
                    style={{ backgroundColor: disableLoginButton ? "grey" : "blue" }}
                    disabled={disableLoginButton}>signup</button> */}
                <ButtonComponent
                    title='signup'
                    onClickFunction={onsignup}
                    isdisable={disableLoginButton}
                />

                <p className="bottomtext"><span onClick={() => Navigation('/Facebooksignin')} style={{ color: "#3269a8", cursor: 'pointer', alignSelf: 'center' }}>Already have an account? </span></p>

            </div>





        </div>
    )
}
export default Facebooksignup