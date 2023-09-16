import { useContext } from "react";
import { CartContext } from "./Context/Context";
const CartView=()=>{

    const { cartItem }: any = useContext(CartContext);

    if (!cartItem) {
        return <div>Loading...</div>;
      }
  return(
    <>
    <div className="flex flex-col">

<ol>

    <li>
    {cartItem.map((item : any)=>{
        return <div className="flex  mt-4  justify-center items-center" key={item.id}>
            
        <img className="min-h-[200px] max-h-[200px] min-w-[200px] max-w-[200px] " src={item.image} alt="" />
        <div className="flex flex-col">
        <h1>{item.title}</h1>
        <h2> ₹{item.price}/-</h2>
        </div>
        </div>
        })}
    </li>
</ol>
       
    </div>
        </>
  )
}
export default CartView