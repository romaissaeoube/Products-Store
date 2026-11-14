import Header from "../components/header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Ajouter(props){
    let navigate = useNavigate();
    let [id,setId]=useState("")
    let [nom,setNom]=useState("")
    let [prenom,setPrenom]=useState("")
    let [tele,setTele]=useState("")
    function ajouterC(){
        let contact={id:id,nom:nom,prenom:prenom,telephone:tele}
        props.ajouter(contact)
        navigate('/contacts')
    }

    return(
        <>
            <Header/>
            <div className="container form-container">
                <div className="form-card">
                    <h2>Ajouter un contact</h2>
                    <label>ID</label>
                    <input type="number" className="form-control" value={id} onChange={(e)=>setId(e.target.value)}/>
                    <label>Nom</label>
                    <input type="text" className="form-control" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                    <label>Prénom</label>
                    <input type="text" className="form-control" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
                    <label>Téléphone</label>
                    <input type="text" className="form-control" value={tele} onChange={(e)=>setTele(e.target.value)}/>
                    <button className="btn btn-primary mt-4" onClick={ajouterC}>Ajouter</button>
                </div>
            </div>
        </>
    )
}