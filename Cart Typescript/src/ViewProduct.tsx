import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { product } from "./config";
const ViewProduct=()=>{
    const { id } = useParams();
    const[Productdata , setProductdata]=useState({})
   
    
    const fetchProductdata = async (URL) =>{
        const res = await fetch(URL);
        const data = await res.json();
        setProductdata(data);
    }
    
    useEffect(() => {
        const apiURL = product(id);
        fetchProductdata(apiURL)
      }, [])

    console.log(Productdata)
    return(
        <>
       <div>

        <img src={Productdata.image} alt="" />
       </div>
        </>
    )
}
export default ViewProduct