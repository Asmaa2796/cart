import { Link } from "react-router-dom";
import { chairs } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/store/cart";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const list = useSelector((state) => state.cart.items);
  console.log(list);
  const dispatch = useDispatch();
  const handleAddToCart = (id) => {
    toast.success("Item added to cart!");
    dispatch(addToCart({
        productID:id,
        quantity:1
    }));
  }
  
  return (
    <>
    <div>
      <div className="container py-5">
        <h4 className="my-3 text-secondary">
          Shopping cart <i className="fa fa-shopping-cart"></i>
        </h4>
        <div className="row">
          {chairs ? (
            chairs.map((el) => (
              <div className="col-lg-3 col-md-4 col-6" key={el.id}>
                <div className="card px-3 my-2 pb-2 shadow rounded">
                  <img src={`img/${el.img}`} alt={el.itemName} />
                  <Link to={`/details/${el.slug}`}>
                    <h5 className="mb-2">
                      {el.itemName}&nbsp;
                      <small>
                        <i className="fa fa-angle-double-right"></i>
                      </small>
                    </h5>
                  </Link>
                  <p className="line-height my-1 text-secondary text-sm">
                    {el.desc}
                  </p>
                  <span>{el.price}$</span>
                  <button className="add_to_cart shadow" onClick={() => handleAddToCart(el.id)}>
                    Add to Cart&nbsp;
                    <i className="fa fa-plus" style={{ fontSize: "10px" }}></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="card p-4 my-2 shadow-sm rounded">No chairs</div>
          )}
        </div>
      </div>
    </div>
    {/* Notifiaction */}
    <ToastContainer autoClose={2000} />
    </>
  );
};

export default Products;