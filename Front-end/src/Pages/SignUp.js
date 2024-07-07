import "./SignUp.css";
import FormInput from "../Components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
function SignUp() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        errorMessage: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 character and shouldn't include any special character",
            label: "UserName",
            pattern: `^[A-Za-z0-9]{3,16}$`,
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email Address",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-10 character and include atleast 1 letter, 1 number and 1 special Character",
            label: "Password",
            pattern: `(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-zA-z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Password Don't Match",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const register = () => {
        const { username, email, password, confirmPassword } = values
        if (username && email && password) {
            if (password === confirmPassword)
                axios.post("http://localhost:9002/sign-in", values)
                    .then(res => {
                        alert(res.data.message)
                        navigate('/');
                    })
        }
        else {
            alert("invalid Input")
        }

    }

    return (
        <div className="signUp">
            <form action="" onSubmit={handleSubmit} className="sign-up-form">
                <h1 className="heading">Sign Up</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className="button" onClick={register}> Sign-in</button>
                <p className="loginButton">Already have an account? <Link to="/Login" className="loginButton">Login</Link> </p>
            </form>
        </div>
    );
}

export default SignUp;
