import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <nav className="navbar custom-navbar">
                <div className="container">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacts">Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ajouter">Ajouter un Contact</Link>
                        </li>
                </div>
            </nav>
        </>
    )
}