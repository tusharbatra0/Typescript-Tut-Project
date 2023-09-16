import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./Context/Context";
import { ClothingItem } from "./Context/Context";

const Header = () => {
   
  const { cartItem } = useContext(CartContext);

  return (
    <>
      <div className="flex">
        <h1 className="mr-4 flex flex-col text-xl">Tushar's Mart 🛍️</h1>
        <div className="bg-[#00405c] items-center  p-2 flex justify-between w-full">
          <Link to={"/"}>
            <h2 className="text-white cursor-pointer">Home</h2>
          </Link>
          <Link to={"/about"}>
            <h2 className="text-white cursor-pointer">About</h2>
          </Link>
          <Link to={"/contact"}>
            <h2 className="text-white cursor-pointer">Contact</h2>
          </Link>
        </div>
        <Link to={"/cartview"}>
          <button className="bg-[#2a83ab] border-black text-white ml-4 w-[140px]">
            🛒Cart :- {cartItem?.length ? cartItem?.length : 0}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Header;