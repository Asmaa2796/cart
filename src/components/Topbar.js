import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [totalQty,setTotalQty] = useState(0);
  const listOfCart = useSelector((state) => state.cart.items);
  useEffect(() => {
    let total = 0;
    listOfCart.forEach(item => total += item.quantity);
    setTotalQty(total);
  }, [listOfCart]);
  return (
    <div className="top_bar py-3">
      <div className="container">
        <Link to="/"><img src={"/logo.png"} style={{width:"auto",maxHeight:"50px"}} alt="" /></Link>
        <Link to="/cart">
        <div className="cart_qty">
          <img src={"/cart.png"} alt="" />
          <small>{totalQty}</small>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
