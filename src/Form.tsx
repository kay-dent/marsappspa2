import React, { useState } from "react";
import Select from 'react-select';
import axios, { AxiosResponse } from 'axios';

const backendAPI = axios.create({
    baseURL: "http://localhost:8000"
})

interface Rover {
    name: string;
}

export default function Form(this: any) {
    let roverNames: object[] = [];
    const [images, setImages] = useState<Array<string>>([])
    let roverName = ""

    backendAPI.get('/rovers').then((response) => {
        response.data.rovers.forEach((rover: Rover) => {
            const option = { value:`${rover.name}`, label: `${rover.name.toUpperCase()}` };
            roverNames.push(option)
        })
    }).catch(function (error) {
        console.log(error.toJSON());
    })

    function handleChange( newValue : any ) {
        console.log('hi')
        if (newValue.value) {
            roverName = newValue.value.toLowerCase();
            backendAPI.get(`/rovers/${roverName}/photos/fhaz`).then((response: AxiosResponse) => {
                if (response.data.urls) {
                    setImages(response.data.urls.slice(0,5))
                }
                
            }).catch(function (error) {
            console.log(error);
        })
        }

    }
    
    return (
        <div id="form">
            <Select options={roverNames} onChange={handleChange} />
            <div id="images-container">
                {images.map((imageUrl: string) => <img src={imageUrl} key={imageUrl} alt="space images" />)}
            </div>
        </div>
    )
    
}

