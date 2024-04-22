import { Heading } from "../components/Heading.jsx";
import InputLabel from "../components/InputLabel.jsx";
import image from "../src/assets/image.png"
import { useNavigate, Link } from "react-router-dom";

export function Signup(){
    let navigate = useNavigate();
    
    function handleClick(){
        navigate("/signin");
    }

    return <div className="flex justify-center content-center w-[100hv] h-[100hv] bg-[#F1EF99]">
        <div className="bg-[#EBC49F] p-6 m-10 rounded-2xl shadow-2xl">
            
            {/* <div className="flex justify-center">
                <img className=" size-[8rem]" src={image} alt="" />
            </div>
             */}
             
            <Heading className="" 
                heading="Sign Up" 
                subHeading="Enter your information to create an account" 
            />


            <form className="p-5">
                <div className="md:grid grid-cols-2 gap-4">
                    <InputLabel
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
                        labelText = "Second Name"
                        labelFor = "secondName"
                        inputFor = "text"
                        inputId = "secondName"
                        inputType = "text"
                        placeholder="Wick"
                        labelCustomClass = ""
                        inputCustomClass = ""
                    />
                </div>
                
                <InputLabel
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
                    labelText = "Password"
                    labelFor = "password"
                    inputFor = "password"
                    inputId = "password"
                    inputType = "password"
                    placeholder="***********"
                    labelCustomClass = ""
                    inputCustomClass = ""
                /> 
                <button type="button" className="w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">Submit</button>

            </form>

            <p>Already have an account? <button onClick={handleClick}>Login</button></p>

        </div>
        
    </div>
}
