import React from 'react'
import { useLocation } from "react-router-dom";
import Sidebar from '../component/Sidebar';

import "./EditBook.css"


const EditBook = () => {



    const title = useLocation().state.name
    const prix = useLocation().state.prix
    const auteur = useLocation().state.auteur
    const locateur = useLocation().state.locateur
    const description = useLocation().state.description
    const reservation = useLocation().state.reservation
    const categorie = useLocation().state.categorie



    const message = () => {
        alert("Book edité avec succées")
    }




    return (
        <>
        <Sidebar>
        <div>
            <form className='form'>

                <div class="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="Title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input class="form-control" id="exampleInputPassword1" value={description} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Locateur</label>
                    <input class="form-control" id="exampleInputPassword1" value={locateur} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Prix</label>
                    <input class="form-control" id="exampleInputPassword1" value={prix} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Auteurs</label>
                    <input class="form-control" id="exampleInputPassword1" value={auteur} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">categorie</label>
                    <input class="form-control" id="exampleInputPassword1" value={categorie} />
                </div>
                <div>
                    <div>
                        <label for="exampleInputPassword1">{reservation}</label>



                    </div>
                </div>
                <div>
                    <button onClick={message} type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        </Sidebar>
       
        </>
        

    )
}

export default EditBook