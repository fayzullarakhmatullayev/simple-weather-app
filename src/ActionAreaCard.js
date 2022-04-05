import * as React from "react";
import styled from "styled-components";

export default function ActionAreaCard({ name, weather, sys, main }) {
  return (
    <Card>
      <Name>
        {name} <sup>{sys.country}</sup>
      </Name>
      <Temp>
        {Math.floor(main.temp)}
        <sup>°C</sup>
      </Temp>
      <Feels>
        Feels Like {Math.floor(main.feels_like)}
        <sup>°C</sup>
      </Feels>
      <Img
        src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`}
        alt={name}
      />
      <Desc>{weather[0].description}</Desc>
    </Card>
  );
}

const Card = styled.div`
  max-width: 100%;
  border-radius: 2rem;
  background-color: #fff;
  min-height: 350px;
  padding: 2rem;
  text-align: center;
`;
const Name = styled.h2`
  color: #53627c;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  sup {
    top: 0;
    right: -2rem;
    font-size: 0.8rem;
    padding: 0rem 0.3rem;
    background-color: #ff8c00;
    border-radius: 0.4rem;
    color: #fff;
    font-weight: 300;
  }
`;

const Temp = styled.h1`
  color: #1e2432;
  font-size: 5rem;
  line-height: 1.1;
  sup {
    font-size: 0.5em;
  }
`;

const Desc = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #53627c;
`;
const Feels = styled.p`
  margin: 0.5rem 0;
  line-height: 1.1;
  color: #1e2432;
`;
const Img = styled.img`
  display: block;
  margin: 0 auto;
`;
