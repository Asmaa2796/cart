import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { chairs } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/store/cart";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetails = () => {
  const list = useSelector((state) => state.cart.items);
  console.log(list);
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = chairs.filter((item) => item.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  const handlePlusQty = () => {
    setQty(qty + 1);
  };
  const handleMinusQty = () => {
    setQty(qty - 1 < 1 ? 1 : qty - 1);
  };
  const handleAddToCart = () => {
    toast.success("Item added to cart!");
    dispatch(
      addToCart({
        productID: detail.id,
        quantity: qty,
      })
    );
  };
  return (
    <>
      <div className="container py-5">
        <h5 className="text-secondary">
          <i className="fa fa-caret-right"></i> Product details
        </h5>
        <div className="bg-white my-3 shadow pt-5 pb-2 px-5">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <img
                src={`../img/${detail.img}`}
                className="w-100"
                alt={detail.itemName}
              />
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <h4 className="fw-bold sub-color">
                <i className="fa fa-caret-right"></i> {detail.itemName}
              </h4>
              <hr />
              <b>Price:</b>
              <b className="d-block text-success my-2">{detail.price}$</b>
              <button
                onClick={handleAddToCart}
                className="btn btn-dark btn-sm shadow"
              >
                Add to Cart&nbsp;
                <i className="fa fa-plus" style={{ fontSize: "10px" }}></i>
              </button>
              <hr />
              <b>Description:</b>
              <p className="line-height my-2 text-sm text-secondary">
                {detail.desc}
              </p>
              <hr />
              <b>Quantity:</b>
              <div className="qty">
                <button onClick={handleMinusQty}>-</button>
                <span>{qty}</span>
                <button onClick={handlePlusQty}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Notifiaction */}
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default ProductDetails;
