import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form';
import Abstract from './components/Abstract';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {

  const [abstract, setAbstract] = useState({
    list: 0,
    data: {
      origin: '',
      year: '',
      plan: ''
    }
  });

  const [loading, setLoading] = useState(false);

  // extract data
  const { list, data } = abstract;

  return (
    <Container>
      <Header
        title='Car Insurance'
      />
      <FormContainer>
        <Form
          setAbstract={setAbstract}
          setLoading={setLoading}
        />
        {loading ? <Spinner /> : null}
        <Abstract
          data={data}
        />
        {!loading
          ? <Result
            list={list}
          />
          : null}

      </FormContainer>
    </Container>
  );
}

export default App;
