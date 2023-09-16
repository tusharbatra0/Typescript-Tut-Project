import { Link } from "react-router-dom";
// import { Context } from "./Context/Context";
// import { useContext } from "react";

const Header=()=>{


    // const num = useContext(Context)
    return(
        <>
        <div className="flex ">
        <h1 className="mr-4 flex flex-col text-xl">Tushar's Mart 🛍️
        
        </h1>
        <div className="bg-[#00405c] items-center  p-2 flex justify-between w-full">
         <Link to={"/"}><h2 className="text-white cursor-pointer">Home</h2></Link>
         <Link to={"/about"}>
         <h2  className="text-white cursor-pointer">About</h2>
         </Link>
         <Link to={"/contact"}>
         <h2 className="text-white cursor-pointer">Contact</h2>
         </Link>
        </div>
<button className="bg-[#2a83ab] border-black text-white ml-4 w-[140px]">
    🛒Cart :- 
</button>

</div>
       </> 
    )
}
export default Header