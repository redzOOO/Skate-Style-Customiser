
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to Skate Style Selector</Title>
      <Link to="/customize">
        <Button>Start Customizing</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
\`;

const Title = styled.h1\`
  font-size: 2rem;
  margin-bottom: 20px;
\`;

const Button = styled.button\`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
\`;

export default HomePage;
