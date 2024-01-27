import styled from "styled-components";
import Sun from '../../assets/icones/sun.png'

const TituloEstilizado = styled.h1`
    font-family: 'MontserratBold';
    font-size: 25px;
    color: #FFFFFF;
    padding-top: 30px;
    align-items: center;
    justify-content: center;
    display: flex;

`


const Title = ({text}) => {
    return (
        <TituloEstilizado>{text}</TituloEstilizado>
    )
}

export default Title;