import React from 'react';
import Template from '../Components/template';
import Loginimage from "../assests/loginimage.webp";

const Login = ({setIsLoggedIn}) => {
    return (
        <div>
            <Template
                title="Welcome Back"
                desc1="Access all the facilities with ease"
                desc2="Access to revolutionalised medical services"
                image={Loginimage}
                formType="login"
                setIsLoggedIn={setIsLoggedIn} // Correct spelling


            />
        </div>
    );
}
export default Login;