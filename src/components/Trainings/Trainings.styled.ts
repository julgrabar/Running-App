import styled, { css } from "styled-components";
import arrow from "images/arrow.svg"

export const List = styled.ul<{adaptive?: boolean}>`
width: 100%;
margin: 0 auto;
${({adaptive})=> adaptive && css`
@media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}
@media screen and (min-width: 1200px){
    grid-template-columns: 1fr 1fr 1fr;
}
`}
${({adaptive})=> !adaptive && css`
max-width: 480px;
`}
`

export const WeekItem = styled.li`

display: flex;
align-items: center;
flex-direction: column;
min-height: 480px;
background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
box-shadow: 0px 10px 22px rgba(197, 139, 242, 0.3);
border-radius: 22px;
padding: 30px;
&:not(:last-child){
    margin-bottom: 30px;
}
img{
    margin: auto;
    max-width: 100%;
    max-height: 250px;
    flex-grow: 2;
}
button{
    margin-top: 30px;
}

@media screen and (min-width: 768px){
    &:not(:last-child){
    margin-bottom: 0;
}
}
`

export const Heading = styled.span<{dark?: boolean}>`
display: inline-block;
color: ${({theme,dark})=>dark ? theme.colors.secondaryFontColor : theme.colors.mainFontColor};
font-weight: 700;
font-size: 32px;
margin-bottom: 30px;
`

export const TrainingItem = styled.li`
border-radius: 20px;
padding: 20px;
cursor: pointer;
text-align: left;
background: url(${arrow}) center right/50px 50px no-repeat,
 linear-gradient(274.42deg, rgba(146,163,253,20%) 0%, rgba(157, 206, 255, 20%) 124.45%);

&:not(:last-child){
    margin-bottom: 15px;
}
span{
    color: ${({theme})=>theme.colors.secondaryFontColor};
    font-weight: 500;
    
}
p{
    font-size: 14px;
    color: gray
}
` 