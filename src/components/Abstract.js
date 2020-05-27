import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { firstCapitalltter } from '../helper';

const AbstractContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFFFFF;
    margin: 1rem 0 0 0;
`;

const Abstract = ({ data }) => {

    // extract data
    const { origin, year, plan } = data;

    if (origin === '' || year === '' || plan === '') return null;

    return (
        <AbstractContainer>
            <h2>Abstract Purchase</h2>
            <ul>
                <li>Origin: {firstCapitalltter(origin)}</li>
                <li>Year: {year}</li>
                <li>Plan: {firstCapitalltter(plan)}</li>
            </ul>
        </AbstractContainer>
    );
}

Abstract.propTypes = {
    data: PropTypes.object.isRequired
}

export default Abstract;