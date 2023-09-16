import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { product } from "./config";
const ViewProduct=()=>{
    const { id } = useParams();
    const[Productdata , setProductdata]=useState({})
    
    // Call API
    useEffect(() => {
        const apiURL = product(id);
        fetchProductdata(apiURL)
      }, [id])

    //   Function fetch
    const fetchProductdata = async(URL)=>{
        const res = await fetch(URL);
        const data = await res.json();
        setProductdata(data)
      }
    return(
        <>
       <div>
       {Productdata.image && <img src={Productdata.image} alt="" />}
{Productdata.category && <h2>{Productdata.category}</h2>}

       <h2>Price</h2>
       <button className="bg-black text-white">Buy Now</button>
       <button className="bg-black text-white">Add to Cart</button>
       </div>
        </>
    )
    }
export default ViewProduct