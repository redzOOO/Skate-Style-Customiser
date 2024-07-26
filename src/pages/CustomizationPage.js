
import React, { useState } from 'react';
import styled from 'styled-components';

const CustomizationPage = () => {
  const [boot, setBoot] = useState(null);
  const [frame, setFrame] = useState(null);
  const [wheels, setWheels] = useState(null);

  const boots = [
    { name: "Pink Boot", img: require('../assets/THEM SKATES X BACEMINT 909 Pink BOOT ONLY.png').default },
    { name: "Black Boot", img: require('../assets/Them-909-Skates-SHELL-ONLY-Black.png').default },
    { name: "White Boot", img: require('../assets/USD Aeon Basic Team 60 Skates.png').default }
  ];

  const frames = [
    { name: "Black Frame", img: require('../assets/Oysi Medium Chassis Black.png').default }
  ];

  const wheels = [
    { name: "56mm Wheels", img: require('../assets/Dead 56mm - 92A Wheels.png').default }
  ];

  return (
    <Container>
      <Title>Customize Your Skates</Title>
      <Section>
        <h3>Boots</h3>
        {boots.map((item, index) => (
          <Option key={index} onClick={() => setBoot(item)}>
            <img src={item.img} alt={item.name} />
            {item.name}
          </Option>
        ))}
      </Section>
      <Section>
        <h3>Frames</h3>
        {frames.map((item, index) => (
          <Option key={index} onClick={() => setFrame(item)}>
            <img src={item.img} alt={item.name} />
            {item.name}
          </Option>
        ))}
      </Section>
      <Section>
        <h3>Wheels</h3>
        {wheels.map((item, index) => (
          <Option key={index} onClick={() => setWheels(item)}>
            <img src={item.img} alt={item.name} />
            {item.name}
          </Option>
        ))}
      </Section>
      <Summary>
        <h3>Your Selection</h3>
        <p>Boot: {boot ? boot.name : 'None'}</p>
        <p>Frame: {frame ? frame.name : 'None'}</p>
        <p>Wheels: {wheels ? wheels.name : 'None'}</p>
      </Summary>
    </Container>
  );
};

const Container = styled.div\`
  padding: 20px;
\`;

const Title = styled.h1\`
  text-align: center;
\`;

const Section = styled.div\`
  margin: 20px 0;
\`;

const Option = styled.div\`
  cursor: pointer;
  padding: 10px;
  background-color: #eee;
  margin: 5px 0;

  img {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }

  &:hover {
    background-color: #ddd;
  }
\`;

const Summary = styled.div\`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
\`;

export default CustomizationPage;
