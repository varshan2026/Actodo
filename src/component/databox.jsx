import { useState } from "react";

function Databox(props){

    var arr = props.arr
    var setarray = props.setarray
    
    const handledelete = (deleteid) => {
        
        var temparr = arr.filter(function(item){
            if(item.id === deleteid){
                return false
            }
            else{
                return true
            }
        })

        setarray(temparr)
    }

    return(
        <div>
              {arr.length ===0?<h1 className="text-2xl font-semibold text-gray-500 text-center mt-5">You havn't add anything</h1>:""}

            {
              
                arr.map(function(item){
                    return( 
                        <div key={item.id} className="flex flex-wrap justify-between align-middle mx-12 my-3 p-5 bg-blue-100 hover:bg-blue-300 font-medium rounded-md">
                            
                            <p className="text-1xl">{item.activity}</p> 
    
                            <p>{item.date}</p> 

                            <p>{item.time}</p> 
                        
                            <p className="text-red-500 cursor-pointer" onClick={() => handledelete(item.id)}>Delete</p> 
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Databox;