import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 20px;
  background-color: #10408447;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
`;

const ButtonSearch = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <CiSearch size={30} color="#D9D9D9" />
    </StyledButton>
  );
};

export default ButtonSearch;
