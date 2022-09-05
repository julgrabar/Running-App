
import { Header, HeaderContainer, HeaderLink, UserBlock } from "./AppBar.styled"

export const AppBar = () => {
    return <Header>
        <HeaderContainer>
            <nav>
                <HeaderLink to="/trainings">Trainings</HeaderLink>   
            </nav>
            <UserBlock>
                <HeaderLink to="/login">Log in</HeaderLink>
                <HeaderLink to="/signup">Sign up</HeaderLink>
            </UserBlock>
        </HeaderContainer>
    </Header>
}