import styled, { css } from "styled-components";

export const Button = styled.button<{primary?: boolean, round?: {diameter: number}}>`
text-align: center;
width: 100%;
border-radius: 99px;
padding: 14px;
border: none;
cursor: pointer;
font-weight: 700;
font-size: 16px;
color: ${(props)=> props.primary ? "#ffffff" : "#92A3FD"};

background: ${(props)=>props.primary 
    ?"linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);"
    :"#fff"
};

${({round})=> round && css`
height: ${round.diameter}px;
width: ${round.diameter}px;
`}

&:disabled{
    background-color: lightgray;
    color: #ffffff;
}
`