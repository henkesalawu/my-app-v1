import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate } from "react-router-dom";
import EMPLOYEES from "../../../app/api/employeesData";

function EmployeesEdit() {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [id,setId]=useState('');

    let navigate = useNavigate();

    var index = EMPLOYEES.map(function(e){
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = EMPLOYEES[index];
        a.Age = age;
        a.Name = name;

        navigate('/employees');
    }

    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('id'))
    },[])

  return (
    <div>
     <Form className="d-grid gap-2" style={{margin:'15rem'}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
      
    </div>
  )
}

export default EmployeesEdit;
