import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Sign_img from './Sign_img';

function Login() {

    const history =useNavigate();

    const [inpval,setInpval]=useState({
        email:"",
        password:""
    })
    console.log(inpval)

    

    const handlechange=(e)=>{
        const {value,name}=e.target
       //console.log(value,name)

       setInpval(()=>{
        return{
            ...inpval,
            [name]:value
        }
    })
    }

    const getdata=(e)=>{
        e.preventDefault();

        const getuserArr=localStorage.getItem("userdata")
        console.log(getuserArr)



        const {email,password}=inpval;

      if(email===""){
            alert("email field is requied")
        }
        else if(!email.includes("@")){
            alert("email field is incorrect")
        }
        else if(password===""){
            alert("email field is required")
        }
        else if(password.length<5){
            alert("password length should be greater than 5")
        }
        else{
            if(getuserArr && getuserArr.length)
            {
                const userdataa=JSON.parse(getuserArr)
                const userlogin=userdataa.filter((el,k)=>{
                  return el.email===email && el.password===password
                })
                if (userlogin.length===0){
                  alert("Invalid User")
                }
                else
                {
                  console.log("Successfully logged In")
                  history ("/details")
                }
            }
        }
    }




  return (
    <div>
        <div className="container mt-3">
        <section className="d-flex justify content between">
          <div className="left_data mt-3 p-5" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>                
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" onChange={handlechange}  placeholder="Enter email" />               
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={handlechange}  placeholder="Password" />
              </Form.Group>            

              
              <Button className="col-lg-6" onClick={getdata} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3" >Already Have an accont<span> signin</span></p>
          </div>
          <Sign_img></Sign_img>
        </section>
      </div>
    </div>
  )
}

export default Login