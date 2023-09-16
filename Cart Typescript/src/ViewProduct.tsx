import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "./Context/Context";
import { product } from "./config";
interface ClothingItem {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
    title: string;
  }


const ViewProduct=()=>{
    const { id } = useParams();
    const [cartItems, setCartItems] = useState<ClothingItem[]>([]);


    const[Productdata , setProductdata]=useState<ClothingItem>()
    
    // Call API
    useEffect(() => {
        const apiURL = product(Number(id) );
        fetchProductdata(apiURL)
      }, [])

    //   Function fetch
    const fetchProductdata = async(URL : string)=>{
        const res = await fetch(URL);
        const data = await res.json();
        setProductdata(data)
      }

      // Add to Cart
      const addToCart = (product: ClothingItem) => {
        setCartItems((prev: ClothingItem[]) => [...prev, product]);
      };
      
    
    

     return(
        <>
       <div className="flex mt-2 gap-2 justify-center flex-col items-center">
       {Productdata?.image && <img className="rounded min-h-[400px] max-h-[400px] min-w-[400px] max-w-[400px]" src={Productdata?.image} alt="" />}
       {Productdata?.title && <h2 className="text-2xl" >{Productdata?.title}</h2>}

       <h2 className="text-2xl" >₹{Productdata?.price} /-</h2>
       <button className="bg-[#2b82ad] text-white">Buy Now</button>

       <button
  className="bg-[#2b82ad] text-white"
  onClick={() => {
    addToCart(Productdata);

  }}
>
  Add to Cart
</button>
       </div>
        </>
    )
    }
export default ViewProduct