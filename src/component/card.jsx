function Card (){

    const data = [
        {
            bgcolor: "#9dbeb7",
            title: 23,
            subtitle: "Coimbatore"
        },

        {
            bgcolor: "#efe6d5",
            title: "01 Feb 2025",
            subtitle: "18:40:00"
        },

        {
            bgcolor: "#008ecc",
            title: "Built Using",
            subtitle: "React"
        }
    ]
    return(
        <div className="flex justify-between flex-wrap px-10">
            {
                data.map(function(item,index){
                    return(
                        <div key={index} style={{backgroundColor: item.bgcolor}} className=" p-3 mx-4 my-6 text-center flex-grow rounded-md">
                            <h3 className="text-3xl font-semibold p-2">{item.title}</h3>
                            <p className="text-2xl p-2">{item.subtitle}</p>
                        </div>
                    )
                })
            }
        </div>
       
    )
}

export default Card;