import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './pages/contacts';
import Editer from './pages/editer';
import Ajouter from './pages/ajouter';
import './App.css';
export default function App() {
    let listeContacts =[
        {id:1, nom: "Oubellouche", prenom: "Romaissae" , telephone: "02512554816"},
        {id:2, nom: "Moukad", prenom: "Fatima Zahra" , telephone: "047612816567"}
    ];
    let [contacts, setContacts] = useState(listeContacts);
    function supprimerC(id){
        setContacts(contacts.filter((c)=> c.id !== id ))
    }
    function ajouterC (contact){
        setContacts([...contacts,contact])
    }
    function modifierC(contact){
        setContacts(contacts.map((c)=> c.id === contact.id ? contact : c))
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/contacts' element={<Contacts contacts={contacts} supprimer={supprimerC}/>} />
                    <Route path='/editer/:id' element={<Editer contacts={contacts} modifier={modifierC}/>} />
                    <Route path='/ajouter' element={<Ajouter ajouter={ajouterC}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}