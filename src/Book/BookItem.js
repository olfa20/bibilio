import React, { useState } from 'react'
import "./BookItem.css"
import { Link } from 'react-router-dom'




const BookItem = props => {

 const [table, setTable] = useState()


    return (


        <>
            <tr>
                <td scope="row">{props.index}</td>
                <Link to={`/book/${props.name}`} 
                
                state={{id: props.id, name: props.name, prix: props.prix, auteur: props.auteur, locateur: props.locateur,
                    description: props.description, reservation: props.reservation, categorie: props.categorie}}
                >
                <td class='cursor-point'>{props.name}</td>
                </Link>
                <td>
                    <Link
                        to={"/editbook/"}
                        state={{
                            id: props.id, name: props.name, prix: props.prix, auteur: props.auteur, locateur: props.locateur,
                            description: props.description, reservation: props.reservation, categorie: props.categorie
                        }}
                    >
                        <button type="button" class="btn btn-success">Edit</button>
                    </Link>
                    <button onClick={() => props.myfn(props.id)} type="button" class="btn btn-danger">Delete</button>

                </td>
                <td> <Link
                    to={"/addbook"}
                >
                    <button type="button" class="btn btn-warning">Add Book</button>
                </Link>
                </td>
            </tr>

        </>

    )
}

export default BookItem

