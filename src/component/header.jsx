import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom"

function Header(){
    const data = useLocation();
    return(
        <div className="pt-3  flex justify-between align-bottom px-12">
            <div>
                <h1 className="text-4xl font-bold font-sans m-2">Hello, {data.state.username}</h1>
                <p className="m-2 text-2xl">I help you to manage your activities </p>
            </div>

            <div>
                <h1 className="text-2xl font-semibold text-red-500 cursor-pointer"><Link to={"/"}>Log Out</Link></h1>
            </div>
        </div>
    )
}

export default Header;