import { Link } from "react-router-dom";

const Proceed = () => {
  return (
    <div className="proceed">
      <div className="card text-center p-4">
        <img src={"/proceed.gif"} alt="" />
        <h5 className="text-secondary text-md my-4">This option will be available soon!</h5>
        <Link to="/">
          <button className="btn btn-sm btn-secondary" style={{fontSize:"11px"}}>
            {" "}
            <i className="fa fa-angle-double-left"></i> Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Proceed;
