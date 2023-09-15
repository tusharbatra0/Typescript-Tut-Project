import { Link } from "react-router-dom";
const SingleProduct=({image, category , id , price})=>{

    return(<>
    
    <div className="flex flex-col gap-2 ">

    <img className="min-w-[250px] max-w-[250px] min-h-[220px] max-h-[220px]" src={image} alt="Image" />
    <h2>{category}</h2>
    <h2>₹{price} /-</h2>
    <Link to={"/viewproduct"}><button className="bg-[#2b82ad] p-2 text-[#00405c]"> 
        View Product
    </button>
    </Link>
    </div>
    
    </>)
}
export default SingleProduct