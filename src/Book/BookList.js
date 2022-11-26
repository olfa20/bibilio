import React, { useState } from 'react'
import "./BookList.css"
import BookItem from './BookItem'


const BookList = props => {
    const [book, setBook] = useState(props.items)
    const handleRemove = (id) => {
        console.log(id)
        const newBook = book.filter(book =>
            book.id !== id)
        setBook(newBook)

    }
    if (book.length === 0) {

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
                        <th>Add Book</th>

                    </tr>
                </thead>

                <tbody>

                    {book.map((mybook) => (
                        <BookItem
                            index={mybook.id}
                            key={mybook.id}
                            id={mybook.id}
                            name={mybook.name}
                            prix={mybook.prix}
                            auteur={mybook.auteur}
                            locateur={mybook.locateur}
                            description={mybook.description}
                            categorie={mybook.categorie}
                          
                            myfn={handleRemove}
                        />




                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default BookList