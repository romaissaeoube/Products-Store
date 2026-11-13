
import Header from "../components/header";

export default function Contact() {
    return (
        <>
            <Header />

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-md-7 col-lg-6">

                        <div className="card border-0 shadow-lg rounded-4 p-4">

                            <div className="text-center mb-4">

                                <h2 className="fw-bold text-primary">
                                    Contact Us
                                </h2>

                                <p className="text-secondary">
                                    We'd love to hear from you!
                                </p>

                            </div>

                            <form>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fw-semibold">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label fw-semibold">
                                        Message
                                    </label>

                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                        placeholder="Enter your message"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg w-100 rounded-3"
                                >
                                    Send Message
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}
