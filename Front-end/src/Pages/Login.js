import "./Login.css";
import FormInput from "../Components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
function Login({ setLoginUser }) {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
        errorMessage: "",
    });


    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Email Address Didn't Match",
            label: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Wrong password",
            label: "Password",
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const login = () => {
        axios.post("http://localhost:9002/login", values)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate('/');
            })
    }

    return (
        <div className="login">
            <form action="" onSubmit={handleSubmit} className="login-form">
                <h1 className="heading">Login</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className="button" onClick={login}> Login</button>
                <p className="sign-up">Don't have an account? <Link to="/signup" className="sign-up">Sign-Up</Link> </p>

            </form>
        </div>
    );
}

export default Login;
