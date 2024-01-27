import styled from "styled-components";
import humidityIcon from "../../assets/icones/humidity.png";
import windIcon from "../../assets/icones/wind.png";

const StyledCard = styled.div`
  width: 100%;
  color: #fff;
  background-color: #10408447;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 7.5px 0;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledP = styled.p`
  font-size: 14px;
  font-weight: 700;
  font-family: "MontserratBold";
  display: flex;
  align-items: center;
`;

const Cards = ({ data }) => {

    const windSpeed = ((data.wind.speed) * 3.6).toFixed(0);

  return (
    <StyledCard>
      <StyledP><img src={humidityIcon}/>{data.main.humidity}%</StyledP>
      <StyledP><img src={windIcon}/>{windSpeed} km/h</StyledP>
    </StyledCard>
  );
};

export default Cards;
