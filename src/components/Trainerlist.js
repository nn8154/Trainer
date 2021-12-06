import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@mui/material/Button';
import AddTrainer from './AddTrainer';
import EditTrainer from './EditTrainer';

export default function Trainerlist(){
    const [trainers, setTrainers] = useState([]);

    useEffect (() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then (data => setTrainers(data.content))
    }

    const deleteTrainer = (link) => {
        if (window.confirm('Are you sure?')) {
        fetch(link, {method: 'DELETE'})
        .then(response => fetchData())
        .catch(err => console.error(err))
        }
    }

    const saveTrainer = (trainer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trainer)
        })
        .then(response => fetchData())
        .catch(err => console.error(err))
    }

    const updateTrainer = (trainer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trainer)
        })
        .then(response => fetchData())
        .catch(err => console.error(err))        
    }

    const columns = [
        {
            Header: 'Firstname',
            accessor: 'firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        }, 
        {
            Header: 'Streetaddress',
            accessor: 'streetaddress'
        }, 
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },  
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        }, 
        {
            Header: 'Phone',
            accessor: 'phone'
        },  
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <EditTrainer updateTrainer={updateTrainer} trainer={row.original} />
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button color="error" size="medium" onClick={() => deleteTrainer(row.value)}>Delete</Button>
        }                                        
    ]

    return (
        <div>
            <AddTrainer saveTrainer={saveTrainer} />
            <ReactTable filterable={true} data={trainers} columns={columns}/>
        </div>
    );
}