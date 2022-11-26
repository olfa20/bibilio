import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './Header'
import Banner from './Banner'
import "./Home.css"

const Home = () => {




    return (
        <>


            <div>
                <table class="table table-sm table-dark ">

                    <thead>
                        <tr>
                            <th scope="col">Books</th>
                            <th >
                                <Link to={'/addbook'}> <button>  ADD Books</button> </Link>
                                <Link to={'/books'}><button> All Books</button></Link> </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Authors</th>
                            <td> <button>ADD Authors</button>
                                <button>All Authors</button></td>
                        </tr>
                        <tr>
                            <th scope="row">Categories</th>
                            <td> <button> Add Categories</button>
                                <button>All Categories</button></td>
                        </tr>
                        <tr>
                            <th scope="row">Réservation</th>
                            <td> <button> Add Réservation</button>
                                <button>All Réservation</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home