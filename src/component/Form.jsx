import { useState } from "react";

function Form(props) {
    var arr = props.arr;
    var setarray = props.setarray;
    
    const [activity, newactivity] = useState("");
    const [date, setdate] = useState("");
    const [time, settime] = useState("")

    const handleactivity = (event) => {
        newactivity(event.target.value);
    }

    const handledate = (event) => {
        setdate(event.target.value);
    }

    const handletime = (event) => {
        settime(event.target.value);
    }

    const addactivity = () => {
        if (!activity || !date || !time) {
            alert("Please fill in all fields");
            return;
        }
        setarray([...arr,{id:arr.length+1, activity:activity, date:date, time:time}]);
        newactivity('');
        setdate('');
        settime('');
    };
    
    return (
        <div className="px-12 flex flex-wrap">
            <div className="m-2 flex-grow">
                <input value={activity} onChange={handleactivity} type="text" placeholder="Activity" className="border rounded-md px-3 py-2 w-full"/>
            </div> 
            
            <div className="m-2">
                <input value={date} onChange={handledate} type="date" className="border rounded-md px-3 py-2 w-full" />
            </div>
            
            <div className="m-2">
                <input value={time} onChange={handletime} type="time" className="border rounded-md px-3 py-2 w-full" />
            </div>

            <div className="m-2 flex gap-4">
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-800" onClick={addactivity}>
                    Add
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Reminder
                </button>
            </div>
        </div>
    );
}

export default Form;
