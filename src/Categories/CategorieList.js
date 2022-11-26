import React from 'react'
import { useState } from 'react'
import CategorieItem from './CategorieItem'

const CategorieList = props => {

    const [categorie, setCategorie] = useState(props.items)

    const handleRemove = (id) => {
        console.log(id)
        const newcategorie= categorie.filter(categorie =>
            categorie.id !== id)
        setCategorie(newcategorie)

    }
    if (categorie.length === 0) {

        return (
            <div className='center'>
                <h2> No Books found.</h2>


            </div>
        )
    }


  return (
    <div className='table'>
    <table class="table table-dark " >

        <thead>
            <tr>
                <th >#</th>
                <th >Name</th>
                <th >action</th>
                <th>Add Categorie</th>

            </tr>
        </thead>

        <tbody>

            {categorie.map((mycategorie) => (
                <CategorieItem
                    index={mycategorie.id}
                    key={mycategorie.id}
                    id={mycategorie.id}
                    name={mycategorie.name}
                    
                    myfn={handleRemove}
                />




            ))}
        </tbody>

    </table>
</div>
)
}


export default CategorieList