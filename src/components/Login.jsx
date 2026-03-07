import React from "react"
import { Link } from "react-router"

// Page Components
import Form from "./PageComponents/Form"
import TextField from "./PageComponents/Textfield"
import Logo from "./PageComponents/Logo"
import ForgotPassword from "./ForgotPassword"
import Checkbox from "./PageComponents/Checkbox"


const Login = () =>{
    return(
        <div className="min-h-dvh flex place-self-center">
            <Form className="gap-2">
                <Logo className="place-self-center"/>
                <span className="text-black text-2xl font-bold">Welcome</span>
                <span className="text-gray-800 mb-10">Login to your account.</span>
                <TextField
                    placeholderText="Username"
                />
                <TextField
                    placeholderText="Password"
                    type="password"
                />
                <div className="flex gap-20 px-5">
                    <ForgotPassword/>
                    <Checkbox 
                        placeholderText={"Keep me Logged In"}
                    />
                </div>
                <Link className="bg-gray-800 p-1 rounded-3xl mt-5
                                   hover:bg-gray-900 min-w-24 max-w-48
                                   place-self-center"
                      to="/"
                >
                    Login
                </Link>

                {/* Some Footer below */}
            </Form>
        </div>
    )
}

export default Login