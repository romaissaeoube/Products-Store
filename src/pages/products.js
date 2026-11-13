
import Header from "../components/header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Products() {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((R) => {
            setProducts(R.data.products);
        });
    }, []);

    return (
        <>
            <Header />

            <div className="container py-4">
                <div className="row g-4">

                    {products.map((prod) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={prod.id}>

                            <div className="card h-100 shadow-sm">

                                <img
                                    src={prod.thumbnail}
                                    className="card-img-top"
                                    alt={prod.title}
                                    style={{
                                        height: "200px",
                                        objectFit: "contain",
                                        padding: "10px"
                                    }}
                                />

                                <div className="card-body d-flex flex-column">

                                    <h5 className="card-title">
                                        {prod.title}
                                    </h5>

                                    <p className="card-text text-primary fw-bold">
                                        ${prod.price}
                                    </p>

                                    <Link
                                        to={`/product/${prod.id}`}
                                        className="btn btn-primary mt-auto"
                                    >
                                        View Details
                                    </Link>

                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}
