import { Component, useEffect, useState } from "react";
import './index.css'
import { useNavigate } from "react-router-dom";
import { hasWhiteSpace } from "./login";
import { ButtonComponent } from "../commonfiles/button";
import { TextInput } from "../commonfiles/textinput";

const ConfirmPasswordScreen = () => {
    localStorage.setItem('Email', 'email')
    const Navigation = useNavigate()
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [disableLoginButton, setdisableLoginButton] = useState(true);

    //onchange arrowfunctions
    const onchangepassword = (passwordtext) => {
        setpassword(passwordtext);
        checkForValidFields(passwordtext, confirmpassword)
    }
    const onchangeconfirmpassword = (confirmpasswordtext) => {
        setconfirmpassword(confirmpasswordtext);
        checkForValidFields(password, confirmpasswordtext)

    }

    // Validations
    const checkForValidFields = (password, confirmpassword) => {
        let boolVal =
            !hasWhiteSpace(password) &&
            password?.length > 0 &&
            confirmpassword?.length > 0 &&
            !hasWhiteSpace(confirmpassword);
        setdisableLoginButton(!boolVal);
    };

    //submit function
    const Submit = () => {
        if(password === confirmpassword){
            localStorage.setItem('userPassword', password)
            Navigation('/Facebooksignin')
        }else{
            alert('Password mismatch')
        }

        
           }



    return (
        <div className="loginscreencontainer">
            <div className="face-con">
                <h1 className="facebook-heading" style={{ fontFamily: 'serif', color: '#0062ff', fontSize: 45 }}>facebook</h1>
            </div>
            <div className="loginscreencontainer2" style={{width:'30%', }}>
                <h1 className="loginheading">New password</h1>
                <TextInput 
                heading ='New Password'
                type='text'
                maxLength={10}
                placeholder="Enter new password"
                value = {password}
                onchangefunction = {onchangepassword}
                />
                <TextInput 
                heading ='Confirm Password'
                type='text'
                maxLength={10}
                placeholder="Enter confirm password"
                value = {confirmpassword}
                onchangefunction = {onchangeconfirmpassword}
                />
                <br />
                <ButtonComponent 
                title = 'Reset Password'
                onClickFunction={Submit}
                isdisable = {disableLoginButton}
                />
                


            </div>
        </div>

    )
}

export default ConfirmPasswordScreen