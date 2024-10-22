import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Proceed from "./Proceed";
import { useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const [proceed,setProceed] = useState(false);
  const handleProceed = () => {
    setProceed(true);
  };

  return (
    <>
      <div className="cart py-5">
        <div className="container">
          <h5 className="text-secondary">
            <i className="fa fa-caret-right"></i> Cart
          </h5>
          <div className="my-3">
            {cart.length > 0 ? (
              <>
                {cart.map((item, key) => (
                  <CartItem key={key} data={item} />
                ))}

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-6">
                    <Link to="/">
                      <button className="btn btn-sm btn-dark">
                        {" "}
                        <i className="fa fa-angle-double-left"></i> Back Home
                      </button>
                    </Link>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <div style={{ float: "right" }}>
                      <button
                        onClick={handleProceed}
                        className="btn btn-sm btn-success"
                      >
                        Proceed <i className="fa fa-angle-double-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center bg-white rounded shadow p-4">
                <img
                  src={"/cart_empty.gif"}
                  className="d-block my-2 mx-auto"
                  style={{ width: "auto", maxHeight: "120px" }}
                  alt=""
                />
                <h4 className="my-3">Cart is empty</h4>
                <Link to="/">
                  <button className="btn btn-dark btn-sm shadow">
                    <i
                      className="fa fa-angle-double-left"
                      style={{ fontSize: "14px" }}
                    ></i>
                    &nbsp;Back Home
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {proceed && <Proceed/>}
    </>
  );
};

export default Cart;
