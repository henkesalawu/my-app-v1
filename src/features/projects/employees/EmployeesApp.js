import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import EMPLOYEES from "../../../app/api/employeesData";
import {Link, useNavigate} from 'react-router-dom';
import { Container } from "semantic-ui-react";

function EmployeesApp() {

    let navigate = useNavigate();

    const handleDelete = (id) => {
        var index = EMPLOYEES.map(function(e){
            return e.id
        }).indexOf(id);

        EMPLOYEES.splice(index,1);

        navigate('/employees')
    }

    const handleEdit = (id, name, age) =>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('id',id);
    }

    return(
        <Container className="main">
        <Fragment>
            <div style={{margin:'10rem'}}>
            <Table striped bordered hover size="small">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        EMPLOYEES && EMPLOYEES.length > 0
                        ? 
                        EMPLOYEES.map((item) => {
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        <Link to={'/employees/edit'}>
                                        <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                                        </Link>
                                        &nbsp;
                                        
                                        <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                </tbody>
            </Table>
            <br>

            </br>
            <Link className='d-grid gap-2' to='/employees/create'>
                <Button size='lg'>Create</Button>
            </Link>

            </div>
        </Fragment>
        </Container>
    )
}

export default EmployeesApp;