import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
body{
margin: 0;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
line-height: 1.5;
min-height: 100vh;
}
    
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

#root{
  min-height: 100hv;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
img{
  display: inline-block;
  max-width: 100%;
}

button{
  outline: none;
}
`;
