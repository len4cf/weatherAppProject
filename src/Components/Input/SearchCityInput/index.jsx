import styled from "styled-components";

const StyledSearchCityInput = styled.input`
  padding: 20px;
  border-radius: 20px;
  border: none;
  background-color: #10408447;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  color: #d9d9d9;
  font-family: "MontserratRegular";
  text-align: center;
  font-size: 20px;
  margin: 30px 0;
  

  &::placeholder {
    color: #d9d9d9;
    font-family: "MontserratThin";
    font-size: 18px;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 60vw;
  }
`;


const SearchCityInput = ({...props}) => {

  return (
    <StyledSearchCityInput {...props}/>
  );
};

export default SearchCityInput;
