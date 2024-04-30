import React from "react";
import Select from 'react-select';
import axios, { AxiosResponse } from 'axios';

const backendAPI = axios.create({
    baseURL: "http://localhost:8000"
})

interface Rover {
    name: string;
}

export default function Form() {
    let roverNames: object[] = [];
    backendAPI.get('/rovers').then((response) => {
        response.data.rovers.forEach((rover: Rover) => {
            const option = { value:`${rover.name}`, label: `${rover.name.toLocaleUpperCase()}` };
            roverNames.push(option)
        })
    }).catch(function (error) {
        console.log(error.toJSON());
    })
    
    return (
        <Select options={roverNames} />
    )
    
}