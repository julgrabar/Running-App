import { Outlet } from "react-router-dom"
import { Container } from "styles/Container"
import { Global } from "styles/globalStyles"
import { AppBar } from "./AppBar/AppBar"

export const Layout = () => {
    return <>
        <Global/>
        <AppBar/>
        <Container>
            <Outlet/>
        </Container>
    </>
}