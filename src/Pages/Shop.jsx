import Productcart from "../Components/Productcart"

const Shop = () => {
  return (
       <div className="flex justify-between items-center gap-2">
        <Productcart 
        imgUrl="https://cdn.pixabay.com/photo/2017/05/24/21/33/workplace-2341642_1280.jpg"
        title="Internal Mouse"
        description="Ergonomically designed for comfort, it delivers flawless performance across multiple devices. Elevate your computing experience today."
        disPrice="2999"
        orgPrice="5999"
        />
        <Productcart 
        imgUrl="https://cdn.pixabay.com/photo/2020/05/26/07/43/skateboard-5221914_960_720.jpg"
        title="Basic skating Board"
        description="Ride the wave on solid ground. Our skateboard delivers smooth, stylish performance. Perfect for beginners and pros alike. Light, durable, and ready for action. Grab yours now"
        disPrice="6999"
        orgPrice="7999"
        />
        <Productcart 
        imgUrl="https://cdn.pixabay.com/photo/2017/06/23/11/54/water-2434416_1280.jpg"
        title="Water Bottle"
        description=" Our water bottle is lightweight, leak-proof, and keeps drinks icy cold or piping hot. Perfect for workouts, commutes, or adventures. Grab yours today!"
        disPrice="1999"
        orgPrice="2999"
        />
        <Productcart 
        imgUrl="https://cdn.pixabay.com/photo/2015/09/15/16/37/person-941311_960_720.jpg"
        title="BabyCap"
        description="Our soft baby caps protect delicate skin from the sun and cold. Stylish designs and breathable fabrics. Perfect for everyday wear or special occasions."
        disPrice="999"
        orgPrice="1500"
        />
       </div>
  )
}

export default Shop