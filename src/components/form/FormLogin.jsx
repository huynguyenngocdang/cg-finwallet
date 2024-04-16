import React from "react";
import InputLogin from "../input/InputLogin";

const FormLogin = () => {
    return (
        <form className="max-w-[300px] mx-auto my-10">
            <InputLogin
                name="username"
                placeholder="Enter your name"
                id="username"
                label="Username"
                type="text"
            />
        </form>
    );
};


export default FormLogin;