import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import NotFound from "./components/commonfiles/notfound";
import Facebookdashboard from "./components/dashboardscreens/dashboard";
import ProfileCard from "./components/dashboardscreens/profilecard";
import ConfirmPasswordScreen from "./components/loginscreens/confirmpassword";
import ForgotPasswordScreen from "./components/loginscreens/forgotpassword";
import Facebooksignin from "./components/loginscreens/login";
import OTPScreen from "./components/loginscreens/otp";
import Facebooksignup from "./components/signupscreens/registeruser";

import AuthProvider, { useAuth } from "./components/authprovider";


const PrivateRoute = () => {
    const user = useAuth();
    console.log("usrrer", user)
    if (!user.token) return <Navigate to="/Facebooksignin" />;
    return <Outlet />;
};



const App = () => {
    const user = useAuth()
    return (
        <BrowserRouter>
            <AuthProvider>

                <Routes>

                    <Route exact path="/" element={<Facebooksignin />} />
                    <Route exact path="/Facebooksignin" element={<Facebooksignin />} />
                    <Route exact path="/Facebooksignup" element={<Facebooksignup />} />
                    <Route exact path="/forgotpassword" element={<ForgotPasswordScreen />} />
                    <Route exact path="/otp" element={<OTPScreen />} />
                    <Route exact path="/confirmpassword" element={<ConfirmPasswordScreen />} />

                    <Route element={<PrivateRoute />}>
                        <Route exact path="/Facebookdashboard" element={<Facebookdashboard />} />
                        <Route exact path="/profile" element={<ProfileCard />} />
                    </Route>
                    <Route element={<NotFound />}
                    />

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
export default App