import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, population, region, subregion, capital, flags, fifa } = props.country;
    const { common, official } = name;
    const { png } = flags;
    // const [nameOfCapital] = capital;
    // console.log(capital[0])
    return (
        <div className='country'>
            <img src={png} alt="" />
            <h3>Country Name: {common}</h3>
            <h4>Country Official Name: {official}</h4>
            <p><strong>Region of {region}</strong></p>
            <p><small>Sub Region of {subregion}</small></p>
            <p><small>Area: {area}</small></p>
            <h5>Population of the Country {population}</h5>
            <h6>Name of the Capital of {capital}</h6>
            <p>Country Name of FIFA {fifa}</p>
        </div>
    );
};

export default Country;