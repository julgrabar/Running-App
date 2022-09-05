import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "styles/Container";

export const Header = styled.header`
    background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
    box-shadow: 0 0 3px darkgrey;
`

export const HeaderContainer = styled(Container)`
    height: 72px;
    min-height: 72px;
    padding: 0 30px;
    display: flex;
    nav{
        a{
            padding: 24px 0;
            font-weight: 600; 
        }
    }
`

export const HeaderLink = styled(NavLink)`
    display: block;
    cursor: pointer;
    color: #ffffff;
    &:not(:last-child){
        margin-right: 16px;
    }
`

export const UserBlock = styled.div`
margin: auto 0 auto auto;
display: flex;
a{
    background-color: #fff;
    color: #92A3FD;
    padding: 6px 15px;
    border-radius: 50px;

    @media screen and (max-width: 360px){
        padding: 4px 10px;
        &:not(:last-child){
            margin-right: 8px;
        }
    }
}
`