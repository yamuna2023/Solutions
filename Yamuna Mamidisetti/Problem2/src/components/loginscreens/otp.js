import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import { TextInput } from "../commonfiles/textinput";
import { ButtonComponent } from "../commonfiles/button";

const OTPScreen = () => {
    localStorage.setItem('Email', 'email')
    const Navigation = useNavigate()
    const [OTP, setOTP] = useState('')
    const [disableLoginButton, setdisableLoginButton] = useState(true);

    //onchange arrow functions
    const onChangeOTP = (otp) => {
        setOTP(otp);
        checkForValidFields(OTP)
    }

    // Validations
    const checkForValidFields = Otp => {
        // console.log(Otp.toString().length,'<---')
        let boolVal = Otp.toString()?.length >= 3;
        setdisableLoginButton(!boolVal);
    };

    //ConfirmOTP function
    const ConfirmOTP = () => {
        Navigation('/confirmpassword')
    }



    return (
        <div className="loginscreencontainer">
            <div className="face-con">
                <h1 className="facebook-heading" style={{ fontFamily: 'serif', color: '#0062ff', fontSize: 45 }}>facebook</h1>
            </div>
            <div className="loginscreencontainer2" style={{ width:'30%' }}>
                <h1 className="loginheading" >OTP</h1>
                <TextInput 
                heading ='OTP'
                type='text'
                placeholder='Enter OTP'
                value = {OTP}
                onchangefunction = {onChangeOTP}
                />
                <br />
                <ButtonComponent 
                title = 'Confirm OTP'
                onClickFunction={ConfirmOTP}
                isdisable = {disableLoginButton}
                />

               
            </div>
        </div>

    )
}

export default OTPScreen