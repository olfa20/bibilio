import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()
  let navigate = useNavigate()

  const Login =() =>{
  if (email === "admin" && password ==="admin") 

  
  {
    let path ='/'
    navigate(path)
  }
  else if (email === "user" && password === "user") {
     let path='/home' 
     navigate(path)

  }
  else {
    alert ('accées refusé')
  }
 
  
}

  return (
   <div    class="bg-image"
  
 >
        <MDBContainer fluid>
    
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
    
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
    
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
    
                  <MDBInput   onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='email' size="lg"/>
                  <MDBInput  onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='password'  size="lg"/>
    
                  <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">o password?</a></p>
                  <MDBBtn onClick={Login} outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn>
    
                  <div className='d-flex flex-row mt-3 mb-5'>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='facebook-f' size="lg"/>
                    </MDBBtn>
    
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='twitter' size="lg"/>
                    </MDBBtn>
    
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='google' size="lg"/>
                    </MDBBtn>
                  </div>
    
                  <div>
                    <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
    
                  </div>
                </MDBCardBody>
              </MDBCard>
    
            </MDBCol>
          </MDBRow>
    
        </MDBContainer>
        </div>
      );
    }
 

export default Login