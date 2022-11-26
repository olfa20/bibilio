import React from 'react'
import Sidebar from '../component/Sidebar'
import CategorieList from "./CategorieList"
import BannerCatgegorie from '../component/BannerCatgegorie'

const categorieee = props => {
  
    const categorie = [

        {
          id:"1",
          name:"histoire"

        },
        {
            id:"2",
            name:"philosopgie"

        }
    ]



  return (
    <>
   
    
    <CategorieList items={categorie} />
    
    
    </>
    
  )
}

export default categorieee