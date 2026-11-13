import {Link} from "react-router-dom";
export default function Header() {
    return (
        <nav className="nav navbar bg-primary justify-content-center">
            <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/products">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
        </nav>
    );
}