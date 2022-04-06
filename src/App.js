import { useEffect, useState } from "react";
import axios from "axios";
import CustomizedInputBase from "./CustomizedInputBase";
import ActionAreaCard from "./ActionAreaCard";
import styled from "styled-components";
import TransitionAlerts from "./TransitionAlerts";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [query, setQuery] = useState("");
  const [alert, setAlert] = useState(false);

  const fetchData = async (query) => {
    const { data } = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=ab8c46e5a35a12f758d5f1e0b7d1f1a3&units=metric`
    );
    setWeatherData((weatherData) => [data, ...weatherData]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData(query).catch((err) => {
      console.error(err.message);
      setAlert(true);
    });
    setQuery("");
  };

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query) fetchData();
  }, []);

  return (
    <div className="App">
      <Container>
        {alert && <TransitionAlerts setAlert={setAlert} />}
        <Title>Simple Weather App</Title>
        <CustomizedInputBase
          submitHandler={submitHandler}
          onChangeHandler={onChangeHandler}
          query={query}
        />
        <Wrapper>
          {weatherData[0] &&
            weatherData.map((item) => (
              <ActionAreaCard key={item.id} {...item} />
            ))}
        </Wrapper>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
`;

const Title = styled.h1`
  padding: 20px 0;
  color: white;
  font-size: 3rem;
  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }
  @media (max-width: 523px) {
    font-size: 2.1rem;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: space-between;
  margin: 50px 0;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 270px);
    justify-content: center;
  }
  @media (max-width: 766px) {
    grid-template-columns: repeat(2, 270px);
  }
  @media (max-width: 523px) {
    grid-template-columns: repeat(1, 220px);
  }
`;

export default App;
