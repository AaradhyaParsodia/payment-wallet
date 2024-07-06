import { Heading } from "../components/Heading"
import InputLabel from "../components/InputLabel"
import Button from "../components/Button"
import Redirect from "../components/Redirect";
import SubHeading from "../components/SubHeading";
import { Signup } from "./Signup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function Signin(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
    
    function handleClick({route}){
        navigate("/signup");
    }

    return <div className="flex justify-center content-center h-screen bg-[#F1EF99]">
        <div className="bg-[#EBC49F] p-6 m-10 rounded-2xl shadow-2xl h-min">
            <div className="grid justify-center text-center">
                <Heading className="" 
                    heading="Sign In" 
                />
                <SubHeading
                    
                    subHeading="Enter your credentials to access your account"
                />
            </div>
            <form className="p-5">
                    <InputLabel
                        onChange={(e)=>{
                            setUsername(e.target.value);
                        }}
                        labelText = "Email"
                        labelFor = "emailId"
                        inputFor = "text"
                        inputId = "emailId"
                        inputType = "email"
                        placeholder="johnwick@chapter100.com"
                        labelCustomClass = ""
                        inputCustomClass = ""
                    />
                    <InputLabel
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        labelText = "Password"
                        labelFor = "password"
                        inputFor = "password"
                        inputId = "password"
                        inputType = "password"
                        placeholder="***********"
                        labelCustomClass = ""
                        inputCustomClass = ""
                    /> 
                    
                    <Button
                        onClick={async ()=>{
                            const response = await axios.post(`http://localhost:3000/api/v1/user/signin`, {
                                username,
                                password
                            });

                            localStorage.removeItem('token');
                            localStorage.setItem("token", response.data.token);
                            navigate("/dashboard")
                        }}

                        btnText={"Sign In"}
                        // customStyle=""
                    />

                </form>

                {/* <p> <button onClick={handleClick}></button></p> */}
                <Redirect 
                    lableText="Don't have an account ? "
                    btnText="Sign Up"
                    handleClick={handleClick}
                />
        </div>
    </div>
}