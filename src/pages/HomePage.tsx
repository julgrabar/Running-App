import styled from "styled-components"
import homePageImg from "images/homepage.svg"
import { Link } from "react-router-dom"
import { Heading } from "components/Trainings/Trainings.styled"

export const HomePage = () => {
    return <HomePageWrapper>
    <img src={homePageImg} alt="Register, log in or do a workout"/>
    <UserNav>
        <Heading dark>Welcome!</Heading>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/trainings">Do a workout as a guest</Link>
    </UserNav>
    </HomePageWrapper>
}

const HomePageWrapper = styled.div`
    min-height: 100%;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    
    img{
        display: block;
        margin: 0 0 24px 0;
    }
    
    @media screen and (min-width: 768px) {
        max-width: none;
        flex-direction: row;
        align-items: center;
        img{
            width: 50%;
            margin: 0 24px 0 0;
            max-width: 500px;
        }
    }
`

const UserNav = styled.div`
    margin-top: auto;
    
    text-align: center;
    a{
        display: block;
        background: ${({theme})=>theme.colors.gradient};
        padding: 8px;
        border-radius: 24px;
        color: #fff;

        &:not(:last-child){
            margin-bottom: 8px;
        }
    }
    
    @media screen and (min-width: 768px) {
        flex-grow: 1;
        margin: auto;
        max-width: 400px;
    }
`