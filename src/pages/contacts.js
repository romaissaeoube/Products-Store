import { Link } from "react-router-dom";
import Header from "../components/header";

export default function Contacts(props){
    return(
        <>
            <Header/>
            <div className="container page-container">
                <div className="page-heading">
                    <h2 style={{color:"darkblue"}}>Liste des contacts</h2>
                </div>

                <div className="table-card">
                    <table className="table custom-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Téléphone</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {props.contacts.map((c)=>
                                <tr key={c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.nom}</td>
                                    <td>{c.prenom}</td>
                                    <td>{c.telephone}</td>
                                    <td>
                                        <Link className="btn  btn-dark me-2" to={"/editer/" + c.id}>Modifier</Link>
                                        <button className="btn btn-danger" onClick={()=>props.supprimer(c.id)}>Supprimer</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Link to="/ajouter" className="btn btn-primary">Ajouter un contact</Link>
                </div>
            </div>
        </>
    )
}