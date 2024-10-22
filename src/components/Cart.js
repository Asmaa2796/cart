import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="cart py-5">
        <div className="container">
          <h5 className="text-secondary">
            <i className="fa fa-caret-right"></i> Cart
          </h5>
          <div className="my-3">
            {cart.length > 0 ? (
              cart.map((item, key) => <CartItem key={key} data={item} />)
            ) : (
              <div className="text-center bg-white rounded shadow p-4">
                <img src={"/cart_empty.gif"} className="d-block my-2 mx-auto" style={{width:"auto",maxHeight:"120px"}} alt="" />
                <h4 className="my-3">Cart is empty</h4>
                <Link to="/">
                <button
                className="btn btn-dark btn-sm shadow"
              >
                <i className="fa fa-angle-double-left" style={{ fontSize: "14px" }}></i>
                &nbsp;Back Home
                
              </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
