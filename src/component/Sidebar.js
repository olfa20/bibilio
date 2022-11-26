import React, { Children, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";

import Header from '../Book/Header';


import { NavLink, useLocation } from 'react-router-dom'
import "./Sidebar.css"
import EditBook from '../Book/EditBook';

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true)

    const toggle = () => setIsOpen(!isOpen)


    const menuItem = [
        {
            path: "/dashboard",
            name: "dashboard",
            icon: <MdDashboard />

        },
        {
            path: "/books",
            name: "books",

        },
        {
            path: "/categories",
            name: "categories",

        },
        {
            path: "/authors",
            name: "authors",

        },
        {
            path: "/reservation",
            name: "reservations"


        }
    ]

    return (
        <>
            <Header />
            <div className='container'>
                <div style={{ width: isOpen ? "300px" : "50px" }} className='sidebar'>
                    <div className='top_section'>

                        <div style={{ marginLeft: isOpen ? "50px" : "10px" }} className='bars'>
                            <FaBars onClick={toggle} />
                        </div>


                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                <div className='icon'>{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className='link_text' >{item.name}</div>
                            </NavLink>




                        ))


                    }

                </div>

                <main>
                    {children}

                </main>


            </div>
        </>
    )
}


export default Sidebar

/*{
    menuItem.map((item, index) => {
        if (item.path === '/books') {
            return (
                <Book />
            )
        }
        else if (item.path === "/categories") {
            return (
                <Categorie />
            )
        }
        else if (item.path === "/dashboard") {
            return (
                <Dashboard />
            )
        }
        else if (item.path === "/authors") {
            return (
                <Authors />
            )
        }
    })
}
*/