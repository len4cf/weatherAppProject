import styled from "styled-components";
import EstilosGlobais from "./styles/EstilosGlobais";
import Title from "./Components/Title";
import SearchCityInput from "./Components/Input/SearchCityInput";
import axios from "axios";
import { useState } from "react";
import TempBoard from "./Components/TempBoard";
import ButtonSearch from "./Components/Button/SearchButton";
import { Box, Alert, Collapse, Button, IconButton } from "@mui/material";
import { IoClose } from "react-icons/io5";

const Fundo = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(167deg, #29b2dd 0%, #3ad 47.38%, #2dc8ea 100%);
`;

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AppContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Footer = styled.footer`
  bottom: 0;
  position: fixed;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  font-size: 11px;
  line-height: 1.5;
  color: #fff;
  font-family: "MontserratRegular";
`;

const Alerta = ({ open, setOpen }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          style={{ backgroundColor: "#36f70f34" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <IoClose fontSize="inherit" />
            </IconButton>
          }
        >
          Cidade não encontrada. Tente novamente.
        </Alert>
      </Collapse>
    </Box>
  );
};

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=82c5f3c147bb5b5d9cb11d5cb2b3fa7d`;

  const searchLocation = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setErrorAlert(false);
      })
      .catch((err) => {
        setErrorAlert(true);
        setData({})
      });
  };

  const Today = new Date();
  return (
    <>
      <Fundo>
        <EstilosGlobais />
        <AppContainer>
          <Alerta open={errorAlert} setOpen={setErrorAlert} />
          <Title text="Weather App" />
          <ContainerInput>
            <SearchCityInput
              type="text"
              placeholder="Qual é a sua cidade?"
              value={location}
              onChange={(event) => {
                const inputValue = event.target.value;
                const nonNumericValue = inputValue.replace(/[0-9]/g, "");
                setLocation(nonNumericValue);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  searchLocation();
                }
              }}
            />
            <ButtonSearch onClick={searchLocation}>Buscar</ButtonSearch>
          </ContainerInput>
          <TempBoard
            today={Today}
            icone={
              data.weather && data.weather[0]
                ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                : null
            }
            data={data.main && data}
          />
        </AppContainer>
        <Footer>
          © 2024 Helena Carvalho. 
          <br/>
          Todos os direitos reservados.
          </Footer>
      </Fundo>
    </>
  );
}

export default App;
