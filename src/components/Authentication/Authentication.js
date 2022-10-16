import { Fragment } from "react";
import SignUp from "./SignUp";

const Authentication = () => {
    const SignUpHandler = async(email, password) => {
        try {
            const res = await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCo8dRipd6E0B7hUHwaaGSlxWF1cPcp9QY',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        returnSecureToken: true
                    }),
                    headers:{
                        "Content-Type": "application/json",
                    }
                }
            )
            if(!res.ok){
                throw new Error('Something went wrong');
            }
            const data = await res.json();
            console.log(data);
            console.log('successful');
        } catch (err) {
            console.log(err);
            alert(err);
        }
    }

    return (
        <Fragment>
            <SignUp onSignUp={SignUpHandler} />
        </Fragment>
    )
};

export default Authentication;