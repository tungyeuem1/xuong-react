/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import productReducer from "../reducer/productReducer";
import api from "../api";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, { products: [] });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/products");
        console.log(data);
        dispatch({ type: "SET_PRODUCTS", payload: data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
