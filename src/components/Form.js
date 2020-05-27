import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDifference, calculateOrigin, getPlan } from '../helper';

const Field = styled.div`
    display: flex;
    margin: 1rem 0 0 0;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const Input = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    margin: 2rem 0 0 0;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: #FFFFFF;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin: 0 0 2rem 0;
`;

const Form = () => {

    const [data, setData] = useState({
        origin: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);

    // extract values
    const { origin, year, plan } = data;

    // read the data of the form
    const getInfo = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    // when the user press submit
    const listInsurance = (e) => {
        e.preventDefault();

        if (origin.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        // base = 2000
        let result = 2000;

        // get the year difference
        const difference = getYearDifference(year);

        // per each year subtract 3%
        result -= ((difference * 3) * result) / 100;

        // american 15%
        // european 30%
        // asiatic 5%
        result = calculateOrigin(origin) * result;

        // basic plan increment 20%
        // full plan increment 50%
        const planIncrease = getPlan(plan);
        result = parseFloat(planIncrease * result).toFixed(2);

        // total
    }

    return (
        <form
            onSubmit={listInsurance}
        >
            {error ? <Error>{'All fields are required'}</Error> : null}
            <Field>
                <Label>Origin</Label>
                <Select
                    name="origin"
                    value={origin}
                    onChange={getInfo}
                >
                    <option value="">-- Select --</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asiatic">Asiatic</option>
                </Select>
            </Field>
            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInfo}
                >
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <Input
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === 'basic'}
                    onChange={getInfo}
                /> Basic
                <Input
                    type="radio"
                    name="plan"
                    value="full"
                    checked={plan === 'full'}
                    onChange={getInfo}
                /> Full
            </Field>
            <Button type="submit">List</Button>
        </form>
    );
}

export default Form;