import Header from "../components/header";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Editer(props){
    let {id}=useParams();
    let navigate = useNavigate();
    let [nom,setNom]=useState("")
    let [prenom,setPrenom]=useState("")
    let [tele,setTele]=useState("")
    useEffect(()=>{
        let contact = props.contacts.find((c)=> c.id == id);
        if(contact){
            setNom(contact.nom);
            setPrenom(contact.prenom);
            setTele(contact.telephone);
        }
    },[id,props.contacts]);
    function modifierC(){
        let Ncontact={id:id,nom:nom,prenom:prenom,telephone:tele}
        props.modifier(Ncontact)
        navigate('/contacts')
    }
    return(
        <>
            <Header/>
            <div className="container form-container">
                <div className="form-card">
                    <h2>Modifier un contact</h2>
                    <label>ID</label>
                    <input type="text" className="form-control" value={id} disabled/>
                    <label>Nom</label>
                    <input type="text" className="form-control" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                    <label>Prénom</label>
                    <input type="text" className="form-control" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
                    <label>Téléphone</label>
                    <input type="text" className="form-control" value={tele} onChange={(e)=>setTele(e.target.value)}/>
                    <button className="btn btn-primary mt-4" onClick={modifierC}>Enregistrer</button>
                </div>
            </div>
        </>
    )
}