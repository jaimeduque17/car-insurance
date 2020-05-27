import React from 'react';
import styled from '@emotion/styled';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin: 2rem 0 0 0;
    padding: 1rem;
    text-align: center;
`;

const ListResult = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin: 1rem 0 0 0;
    position: relative;
`;

const ListText = styled.p`
    color: #00828F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({ list }) => {

    return (
        (list === 0)
            ? <Message>Choose origin, year and plan insurance</Message>
            : <ListResult>
                <ListText>Total cost: ${list}</ListText>
            </ListResult>
    );
}

export default Result;