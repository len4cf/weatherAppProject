import styled from "styled-components";
import Cards from "../Cards";
import { GrLocation } from "react-icons/gr";


const StyledTempBoard = styled.div`
  width: 30%;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const DateContainer = styled.div`
  display: flex;
  text-align: center;
  gap: 150px;
  justify-content: center;
  padding: 10px 20px;
  font-family: "MontserratRegular";
  color: #fff;
`;

const StyledIcon = styled.img`
  width: 180px;
  height: 180px;
`;

const StyledShowTemp = styled.h1`
  font-family: "MontserratBold";
  color: #fff;
  font-size: 40px;
`;

const PrecipitationsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  & > p {
    font-family: "MontserratRegular";
    color: #fff;
    font-size: 13px;
  }
`;

const StyledLocation = styled.h5`
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: "MontserratRegular";
  color: #fff;
  font-size: 50px;
`;

const TempBoard = ({ children, today, icone, data }) => {
  const month = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  return (
    <StyledTempBoard>
      {data && (
        <>
          <StyledLocation><GrLocation size={30}/>{data.name}</StyledLocation>
          <DateContainer>
            <h6>Hoje</h6>
            <p>
              {month[today.getMonth()]}, {today.getDate()}
            </p>
          </DateContainer>
          <StyledIcon src={icone} alt="icone" />
          <StyledShowTemp>{data.main.temp.toFixed(0)}°C</StyledShowTemp>
          <PrecipitationsContainer>
            <p>Max.: {data.main.temp_max}°</p>
            <p>Min.: {data.main.temp_min}°</p>
          </PrecipitationsContainer>
          <Cards data={data} />
        </>
      )}
    </StyledTempBoard>
  );
};

export default TempBoard;
