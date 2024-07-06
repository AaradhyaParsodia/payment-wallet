import { Heading } from "../components/Heading.jsx";
import InputLabel from "../components/InputLabel.jsx";
import Button from "../components/Button.jsx";
import Redirect from "../components/Redirect.jsx";
import SubHeading from "../components/SubHeading.jsx";
import image from "../src/assets/image.png"
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function Signup(){
    let navigate = useNavigate();
    
    function handleClick(){
        navigate("/signin");
    }

    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [username , setusername] = useState("");
    const [password , setPassword] = useState("");

    return <div className="flex justify-center content-center h-screen bg-[#F1EF99]">
        <div className="bg-[#EBC49F] p-6 m-10 rounded-2xl shadow-2xl h-min">
            
            {/* <div className="flex justify-center">
            <img className=" size-[8rem]" src={image} alt="" />
            </div>
             */}
            
            <div className="grid justify-center text-center">
                <Heading className="" 
                    heading="Sign Up" 
                />
                <SubHeading
                    
                    subHeading="Enter your information to create an account"
                />
            </div>

            {/* <Heading className="" 
                heading="" 
                subHeading="" 
            /> */}


            <form className="p-4">
                <div className="md:grid grid-cols-2 gap-4">
                    <InputLabel
                        onChange={e => {
                            setFirstName(e.target.value);
                        }}
                        labelText = "First Name"
                        labelFor = "firstName"
                        inputFor = "text"
                        inputId = "firstName"
                        inputType = "text"
                        placeholder="John"
                        labelCustomClass = ""
                        inputCustomClass = ""
                    />
                    <InputLabel
                        onChange={e => {
                            setLastName(e.target.value);
                        }}
                        labelText = "Last Name"
                        labelFor = "lastName"
                        inputFor = "text"
                        inputId = "lastName"
                        inputType = "text"
                        placeholder="Wick"
                        labelCustomClass = ""
                        inputCustomClass = ""
                    />
                </div>
                
                <InputLabel
                    onChange={e => {
                        setusername(e.target.value);
                    }}
                    labelText = "Email"
                    labelFor = "usernameId"
                    inputFor = "text"
                    inputId = "usernameId"
                    inputType = "username"
                    placeholder="johnwick@chapter100.com"
                    labelCustomClass = ""
                    inputCustomClass = ""
                />
                <InputLabel
                    onChange={e => {
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
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            firstName,
                            lastName,
                            password
                        });
                        localStorage.removeItem("token");
                        localStorage.setItem("token",response.data.token);
                        navigate("/dashboard");
                    }}
                    btnText={"Submit"}
                    // customStyle = ""
                />

            </form>

            {/* <p> <button onClick={}></button></p> */}
            <Redirect 
                lableText="Already have an account ?"
                btnText="Login"
                handleClick={handleClick}
            />

        </div>
        
    </div>
}
