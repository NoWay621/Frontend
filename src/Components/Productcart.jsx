import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { LuIndianRupee } from "react-icons/lu";

const Productcart = ( { imgUrl, title, description, disPrice, orgPrice } ) => {
  return (
    <div className="w-80 border border-gray-500 rounded-2xl texr-center p-4">
    <img src={imgUrl} alt="Mouse" className="w-72 rounded-2xl"/>
    <h1 className="uppercase text-xl font-semibold py-2">{title}</h1>
    <p className="text-xl text-gray-600">{description}</p>
    <div className="flex gap-1 my-3 items-center">
       <FaStar className="text-orange-600"/>
       <FaStar className="text-orange-600"/>
       <FaStar className="text-orange-600"/>
       <FaStar className="text-orange-600"/>
       <FaRegStarHalfStroke className="text-orange-600"/>
    </div>
    <p className="flex justify-between items-center text-xl gap-0">Discount Price <LuIndianRupee />{disPrice}</p>
    <p className="flex justify-between items-center text-sm">Original Price <LuIndianRupee /><span className="line-through text-black">{orgPrice}</span></p>
    <div className="flex justify-between items-center py-3">
      <button className="bg-orange-600 rounded-md p-3">Add to Cart</button>
      <button className=" bg-orange-500 rounded-md p-3">Buy Now</button>
    </div>
  </div>
  )
}

export default Productcart