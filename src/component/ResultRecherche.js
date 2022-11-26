import React, { useState } from 'react'
import { Sidebar } from 'react-pro-sidebar';
import { useLocation } from 'react-router-dom';
import BookList from '../Book/BookList';
import Header from '../Book/Header';
import CategorieList from '../Categories/CategorieList';

const ResultRecherche = props => {
    const [book, setBook] = useState(props.items)


const mybooktype = useLocation.state.mybooktype

    
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className>
   
   
      {book &&
        book.map((mybook,mycategory) => {
          if (mybook.name === mybooktype) {
            return (
              <div>
               <BookList items={mybooktype}/>
            </div>
            );
          } else if (mycategory.name === mybooktype) {
            return (
                <div>
                <CategorieList items={mybooktype}/>
             </div>
             );
            
          } })}
          </div>
          </>
  )}
                 


export default ResultRecherche