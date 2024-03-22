import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import { hasWhiteSpace, phonenoregex, reg } from "./login";
import { ButtonComponent } from "../commonfiles/button";
import { TextInput } from "../commonfiles/textinput";

const ForgotPasswordScreen = () => {
    const Navigation = useNavigate()
    const [emailInput, setemailInput] = useState('')
    const [disableLoginButton, setdisableLoginButton] = useState(true);

    //Onchange arrow functions
    const onemail = (emailtext) => {
        setemailInput(emailtext);
        checkForValidFields(emailtext)
    }

    // Validations
    const checkForValidFields = email => {
        let boolVal = reg.test(email) && !hasWhiteSpace(email) && email.length > 0;
        setdisableLoginButton(!boolVal);
      };

    //sendotp function
    const SendOTP = () => {
        Navigation('/otp')
    }



    return (
        <div className="loginscreencontainer">
            <div className="face-con">
                <h1 className="facebook-heading" style={{ fontFamily: 'serif', color: '#0062ff', fontSize: 45 }}>facebook</h1>
            </div>
            <div className="loginscreencontainer2" style={{width:'30%'}}>
                
            <h1 className="loginheading" >Forgot password</h1>

            <TextInput 
                heading ='Email'
                type='text'
                placeholder='Enter email'
                value = {emailInput}
                onchangefunction = {onemail}
                />
                <br />
                <ButtonComponent 
                title = 'Send OTP'
                onClickFunction={SendOTP}
                isdisable = {disableLoginButton}
                />
                            

            </div>
        </div>

    )
}

export default ForgotPasswordScreen