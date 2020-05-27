import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

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
                <TransitionGroup
                    component="span"
                    className="result"
                >
                    <CSSTransition
                        classNames="result"
                        key={list}
                        timeout={{ enter: 500, exit: 500 }}
                    >
                        <ListText>Total cost: $<span>{list}</span></ListText>
                    </CSSTransition>
                </TransitionGroup>
            </ListResult>
    );
}

Result.propTypes = {
    list: PropTypes.number.isRequired
}

export default Result;