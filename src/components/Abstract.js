import React from 'react';

const Abstract = ({ data }) => {

    // extract data
    const { origin, year, plan } = data;
    
    if(origin === '' || year === '' || plan === '') return null;

    return ( 
        <>
        <h2>Abstract</h2>
        <ul>
            <li>Origin: </li>
            <li>Year: </li>
            <li>Plan: </li>
        </ul>
        </>
     );
}
 
export default Abstract;