import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data, removeProduct }) => {
  return (
    <>
      <Link to="/admin/product-add" className="btn btn-primary">
        Add new product
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={`/product-detal/${product.id}`}>
                  {" "}
                  <img src={product.image} alt={product.title} />
                </Link>
              </td>
              <td>
                <Link to={`/product-detal/${product.id}`}>
                  {" "}
                  {product.title}
                </Link>
              </td>
              <td>
                <Link to={`/product-detal/${product.id}`}>{product.price}</Link>
              </td>
              <td>{product.description ? product.description : "Updating"}</td>
              <td>
                <Link
                  to={`product-edit/${product.id}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
                <button
                  onClick={() => removeProduct(product.id)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
