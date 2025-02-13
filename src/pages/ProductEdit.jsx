import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as z from "zod";
import instance from "../axios";

const productSchema = z.object({
  title: z.string().min(6, { message: "Ten san pham phai co it nhat 6 ky tu" }),
  price: z.number().min(0, { message: "Phai lon hon 0" }),
  description: z.string().optional(),
});

const ProductEdit = ({ onEdit }) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`/products/${id}`);
      reset(data);
    })();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit((data) => onEdit({ ...data, id }))}>
        <h1>Product Form</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description")}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
