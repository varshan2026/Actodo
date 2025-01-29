import { useState } from "react";
import {useNavigate,Link} from "react-router-dom";


function Login(props){
    
    const userdata = props.userdata;

    const[loguser, setloguser] = useState("");
    const[logpass, setlogpass] = useState("");
    const[ruser, setruser] = useState(true);
    const navigate = useNavigate();


    const handleloguser = (event) => {
        setloguser(event.target.value)
    }

    const handlelogpass = (event) => {
        setlogpass(event.target.value)
    }

    function checkuser(){
        userdata.forEach(function(item){
            if(loguser == item.username && logpass == item.password){
                navigate("/landing", {state:{username:loguser}})
            }
            else{
                setruser(false)
            }
        })

        console.log(userdata)
    }


    return(
        <div className="mx-12 my-12">

        <div className=" mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-0.5">Hello,</h1>
            {ruser?<p className="text-gray-600">I help manage activities after login</p>:<p className="text-red-600">please signup before login</p>}
        </div>

        <div className="w-full max-w-sm">
            <div className="mb-2">
                <input 
                    onChange={handleloguser}
                    value={loguser}
                    type="text" 
                    placeholder="Username" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                />
            </div>

            <div className="mb-2">
                <input 
                    onChange={handlelogpass}
                    value={logpass}
                    type="password" 
                    placeholder="Password" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                />
            </div>

            <div className="mb-3 flex flex-row justify-between px-0.5">
                <button onClick={checkuser} className="w-30 p-3 rounded-md bg-orange-500 text-white font-medium "> Login </button>

                <p className="text-gray-600">
                    Don't have an account?{" "}
                    <span className="text-blue-500 font-medium cursor-pointer hover:underline">
                        <Link to="/signup">Signup</Link>
                    </span>
                </p>
            </div>

            <div className="text-center">
               
            </div>
        </div>
    </div>
    )
}

export default Login;