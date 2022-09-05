import styled from "styled-components"

export const Container = styled.div`
max-width: 480px;
min-height: calc(100vh - 72px);
height: 1px;
padding: 30px;
width: 100%;
margin: 0 auto;
@media screen and (min-width: 768px){
    max-width: 768px;
}
@media screen and (min-width: 1200px){
    max-width: 1200px;
}
`