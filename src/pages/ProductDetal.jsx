import React, { useEffect, useState } from "react";
import instance from "../axios";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 style={{ fontSize: "3em", color: "green" }}>Chi tiết sản phẩm</h1>
      <div>
        <h2>
          <span style={{ fontSize: "1.5em", color: "blue" }}>
            {product.title}
          </span>
        </h2>
        <img src={product.image} alt={product.title} />
        <p>
          Price: <span style={{ color: "red" }}>{product.price}</span>
        </p>
        <p>
          Description:
          <span style={{ color: "blue" }}>{product.description}</span>
        </p>
      </div>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default ProductDetail;
