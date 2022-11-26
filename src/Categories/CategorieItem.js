import React from 'react'
import { Link } from 'react-router-dom'


const CategorieItem = props => {
  return (
    <>
    <tr>
        <td scope="row">{props.index}</td>
        <td>{props.name}</td>
        <td>
            <Link
                to={"/editcategorie/"}
                state={{
                    id: props.id, name: props.name
                }}
            >
                <button type="button" class="btn btn-success">Edit</button>
            </Link>
            <button onClick={() => props.myfn(props.id)} type="button" class="btn btn-danger">Delete</button>

        </td>
        <td> <Link
            to={"/addcategorie"}
        >
            <button type="button" class="btn btn-warning">Add Categorie</button>
        </Link>
        </td>
    </tr>

</>

  )
}

export default CategorieItem