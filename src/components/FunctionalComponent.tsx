import React from 'react';

type Location = {
    lat: number,
    lon: number,
    city: string,
    temp: number,
    weather: string

}

const FunctionalComponent = (props: Location) => {
    console.log(props)
    return(
        <div>
            <h1>Location: {props.city}</h1>
            <p>weather: {props.weather}</p>
            <p>temp: {props.temp} F</p>
        </div>
    )
}

export default FunctionalComponent;
