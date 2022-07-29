import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import Sign_img from "./Sign_img";

function Home() {
    const [inpval,setInpval]=useState({
        name:"",
        email:"",
        date:"",
        password:""

    })
    console.log(inpval)

    const [data,setData]=useState([])

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
        const {name, email, date, password}=inpval;

        if(name===""){
            alert("name field is required")
        }
        else if(email===""){
            alert("email field is required")
        }
        else if(!email.includes("@")){
            alert("email field is incorrect")
        }
        else if(date===""){
            alert("email field is required")
        }
        else if(password===""){
            alert("email field is required")
        }
        else if(password.length<5){
            alert("password length should be greater than 5")
        }
        else{
            console.log("data added successfully")

            localStorage.setItem("userdata",JSON.stringify([...data,inpval]))


        }
    }


  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify content between">
          <div className="left_data mt-3 p-5" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={handlechange}  placeholder="Enter Name" />               
                </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" onChange={handlechange}  placeholder="Enter email" />               
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" onChange={handlechange}  placeholder="Enter Date" />               
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={handlechange}  placeholder="Password" />
              </Form.Group>

              
              <Button className="col-lg-6" onClick={getdata} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3" >Already Have an accont <span><NavLink to="/login">signin</NavLink> </span></p>
          </div>
          <Sign_img></Sign_img>
        </section>
      </div>
    </>
  );
}

export default Home;
