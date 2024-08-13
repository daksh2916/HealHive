import React from 'react';
import Template from '../Components/template';
import SignImage from "../assests/signupimage.jpg";

const Signup = ({ setIsLoggedIn }) => {
    return (
        <div>
            <Template
                title="Join Us"
                desc1="Start using exceptional services available at HealHive"
                desc2="Healthcare made easy"
                image={SignImage}
                formType="signup"
                setIsLoggedIn={setIsLoggedIn} // Correct spelling
            />
        </div>
    );
}

export default Signup;
