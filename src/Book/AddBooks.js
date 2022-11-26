import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Sidebar from '../component/Sidebar'

const AddBooks = props => {
    const [title, setTitle] = useState('')
    const [description,setDescription] = useState()
    const [locateur, setLocateur] = useState()
    const [auteur, setAuteur] = useState()
    const [reservation, setReservation] = useState()

    function handleChange(event) {
        setTitle(event.target.value)

    }
    
    const placeSubmitHandler = event => {
      
        console.log(title)
    }

    return (
        <>
        <Sidebar>
        <div>
 

 <form className='form'>

     <div class="form-group">
         <label for="exampleInputEmail1">Title</label>
         <input OnChange={handleChange} type="Title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Ttitle" />
     </div>
     <div class="form-group">
         <label for="exampleInputPassword1">Description</label>
         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Description" />
     </div>
     <div class="form-group">
         <label for="exampleInputPassword1">Locateur</label>
         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Locateur" />
     </div>
     <div class="form-group">
         <label for="exampleInputPassword1">Auteurs</label>
         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Auteurs" />
     </div>
     <div>
         <div>
             <label for="exampleInputPassword1">Reservation</label>


             <label>
                 <input id="yes" type="radio" name="choice-radio" />
                 Yes
             </label>
             <label>
                 <input id="no" type="radio" name="choice-radio" />
                 No
             </label>
         </div>
     </div>
     <div>
         <button onClick={placeSubmitHandler} type="submit" class="btn btn-primary">Submit</button>
     </div>
 </form>
</div>
        </Sidebar>
       </>

    )
}


export default AddBooks