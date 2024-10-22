import { useEffect, useState } from "react";
import { chairs } from "../data";
import { useDispatch } from "react-redux";
import { changeQty } from "../redux/store/cart";

const CartItem = (props) => {
  const { productID, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = chairs.filter((item) => item.id === productID)[0];
    setDetail(findDetail);
  }, [productID]);
  const handleMinusQty = () => {
    dispatch(
      changeQty({
        productID: productID,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQty = () => {
    dispatch(
      changeQty({
        productID: productID,
        quantity: quantity + 1,
      })
    );
  };
  return (
    <div className="cart_item rounded my-2 table-responsive">
      <table className="table p-3 border text-center">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width:"100px"}}>
              <img
                className="d-block my-2 mx-auto"
                style={{ width: "auto", maxHeight: "80px" }}
                src={`img/${detail.img}`}
                alt=""
              />
            </td>
            <td style={{width:"200px"}}>{detail.itemName}</td>
            <td style={{width:"200px"}}><b className="text-success">{detail.price * quantity}$</b></td>
            <td style={{width:"200px"}}>
              <div className="qty mx-auto">
                <button onClick={handleMinusQty}>-</button>
                <span>{quantity}</span>
                <button onClick={handlePlusQty}>+</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
