
import Header from "../components/header";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Header />

            <div className="container py-5">

                <div className="row align-items-center bg-light rounded-4 p-4 p-md-5 shadow-sm">

                    <div className="col-md-7">

                        <span className="badge bg-primary mb-3">
                            Welcome to Our Store
                        </span>

                        <h1 className="display-5 fw-bold mb-3">
                            Discover Our
                            <span className="text-primary"> Products</span>
                        </h1>

                        <p className="text-secondary fs-5 mb-4">
                            Explore our collection of amazing products
                            and find everything you need at the best prices.
                        </p>

                        <Link
                            to="/products"
                            className="btn btn-primary btn-lg rounded-pill px-4"
                        >
                            Explore Products →
                        </Link>

                    </div>

                    <div className="col-md-5 text-center mt-4 mt-md-0">

                        <div
                            className="bg-white rounded-4 p-4 shadow-sm"
                        >
                            <span style={{ fontSize: "100px" }}>
                                🛍️
                            </span>

                            <h4 className="fw-bold text-primary mt-2">
                                Online Shopping
                            </h4>

                            <p className="text-secondary mb-0">
                                Everything in one place
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}
