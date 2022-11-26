import React from 'react'
import BookList from "../Book/BookList"
import BannerBook from '../component/BannerBook'
import Sidebar from '../component/Sidebar'


const Book = (props) => {

    const book = [
        {
            id: 1,
            name: "olfa",
            description: 'C est un livre crée en 2017',
            locateur: 'emilie',
            auteur: 'daniel',
            prix: 14000,
            reservation: "réservé",
            categorie: "drole"


        }, {
            id: 2,
            name: "amine",
            description: 'C est un livre crée en 2017',
            locateur: 'emilie',
            auteur: 'daniel',
            prix: 14000,
            reservation: "réservé",
            categorie: "romance"


        },
        {
            id: 3,
            name: "amine",
            description: 'C est un livre crée en 2017',
            locateur: 'emilie',
            auteur: 'daniel',
            prix: 14000,
            reservation: "réservé",
            categorie: "romance"


        },
        {
            id: 4,
            name: "amine",
            description: 'C est un livre crée en 2017',
            locateur: 'emilie',
            auteur: 'daniel',
            prix: 14000,
            reservation: "réservé",
            categorie: "romance"


        },






    ]


    return (
        <>
        <Sidebar>
        <BannerBook/>
        <BookList items={book} />
        </Sidebar>
        
        </>
        
    )


}

export default Book