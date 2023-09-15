import { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { useState } from "react";
const Product=()=>{
    const [Products, setProducts] = useState([]);
    console.log(Products)

    const productsApi = "https://fakestoreapi.com/products";

    const fetchProducts = async(URL)=>{
     const res = await fetch (URL);
     const data = await res.json();
    setProducts(data)
    }
    useEffect(() => {
        fetchProducts(productsApi);
      }, []);

    return(<>
    <div className='flex w-full flex-wrap gap-[70px] justify-center items-center' >
  {
  Products.map((item)=>{

    return <div key={item.id} className="flex flex-wrap gap-12">
        <SingleProduct
        key={item.id}
        image={item.image}
        category={item.category}
        price={item.price}
        />
    </div>
  })

  }
    </div>
    </>)
}
export default Product

