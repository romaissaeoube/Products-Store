
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header";

export default function Product() {

    let { id } = useParams();
    let [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((R) => {
            setProduct(R.data);
        });
    }, [id]);

    return (
        <>
            <Header />

            <div className="container py-5">

                <div className="card border-0 shadow-lg rounded-4 p-4">

                    <div className="row align-items-center g-4">

                        {/* Product Image */}
                        <div className="col-md-5 text-center">

                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="img-fluid rounded-4"
                                style={{
                                    width: "100%",
                                    maxHeight: "350px",
                                    objectFit: "contain"
                                }}
                            />

                        </div>

                        {/* Product Information */}
                        <div className="col-md-7">

                            <span className="badge bg-primary mb-3">
                                {product.category}
                            </span>

                            <h2 className="fw-bold mb-3">
                                {product.title}
                            </h2>

                            <p className="text-secondary">
                                {product.description}
                            </p>

                            <h3 className="text-primary fw-bold my-4">
                                ${product.price}
                            </h3>

                            <hr />

                            <div className="row g-3">

                                <div className="col-6">
                                    <div className="bg-light rounded-3 p-3">
                                        <small className="text-secondary">
                                            Brand
                                        </small>
                                        <h6 className="fw-bold mb-0">
                                            {product.brand || "N/A"}
                                        </h6>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="bg-light rounded-3 p-3">
                                        <small className="text-secondary">
                                            Stock
                                        </small>
                                        <h6 className="fw-bold mb-0">
                                            {product.stock}
                                        </h6>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}
