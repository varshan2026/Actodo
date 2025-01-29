import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

function Signup(props) {

    const userdata = props.userdata;
    const setuserdata = props.setuserdata;
    const navigate = useNavigate()


    const[signuser, setsignuser] = useState('');
    const[signpass, setsignpass] = useState('');
    const[signconpass, setsignconpass] = useState('')

    const handlesignuser = (event) => {
        setsignuser(event.target.value)
    }

    const handlesignpass = (event) => {
        setsignpass(event.target.value)
    }

    const handlesignconpass = (event) => {
        setsignconpass(event.target.value)
    }

    function signupuser(){
        const userExists = userdata.some(userdata => userdata.username === signuser);

        if(userExists){
            alert("User Already Existed")
        }
        else{
            setuserdata(function(prevuser){
                var newuser = [...prevuser, {username:signuser, password:signpass}]
                return newuser;
            })
            navigate("/")
        }
    }

    return (
        <div className="mx-12 my-12">

            <div className=" mb-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-0.5">Hey Hai</h1>
                <p className="text-gray-600">You can signup here</p>
            </div>

            <div className="w-full max-w-sm">
                <div className="mb-2">
                    <input 
                        onChange={handlesignuser}
                        type="text" 
                        placeholder="Username" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                </div>

                <div className="mb-2">
                    <input 
                        onChange={handlesignpass}
                        type="password" 
                        placeholder="Password" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <input 
                        onChange={handlesignconpass}
                        type="password" 
                        placeholder="Confirm Password" 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                    />
                </div>

                <div className="mb-3 flex flex-row justify-between px-0.5">

                    <button onClick={signupuser} className="w-30 p-3 rounded-md bg-orange-500 text-white font-medium " > 
                        Signup 
                    </button>

                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <span className="text-blue-500 font-medium cursor-pointer hover:underline">
                            <Link to="/">Login</Link>
                        </span>
                    </p>
                </div>

                <div className="text-center">
                   
                </div>
            </div>
        </div>
    );
}

export default Signup;
