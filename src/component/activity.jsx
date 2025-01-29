import { useState } from "react";
import Form from "./Form";
import Databox from "./databox"

function Activity(){
    const [arr, setarray] = useState([
        {
            id: 1,
            activity: "Team Meet",
            date: "2025-02-01",
            time:"08:30"
        }
     ])
    return(
        <>
            <Form arr={arr} setarray={setarray} />
            <Databox arr={arr} setarray={setarray} />
        </>
    )
}

export default Activity;