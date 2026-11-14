import {Link} from "react-router-dom";
import Header from "../components/header";

export default function Home(){
    return(
        <>
            <Header/>
            <div className="container home-container">
                <div style={{textAlign:"center"}}>
                    <h1>Bienvenue dans la page d'accueil</h1>
                    <h2>Pour voir la liste des contacts <Link to="/contacts" className="btn btn-primary">Cliquer ici</Link></h2>
                </div>
            </div>
        </>
    )
}