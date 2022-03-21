import React from 'react';
import './Country.css'

const Country = (props) => {
const{area, region, name, population, capital, flags } = props.country;
    console.log(props)
    return (
        <div className='country bg-info'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" srcset="" />
           <h4> Population: {population}</h4>
           <h4>Area: {area} sqkm</h4>
           <p>Region:{region}</p>
           <p>Capital: {capital}</p>
           <p></p>
        </div>
    );
};

export default Country;