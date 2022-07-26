import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
    --primary-color: #0444AC;
    --primary-color-light: #0444AC;    
    --secondary-color: #ff7675;
    --background-dark-color: #e3fdfafa;
    --background-dark-grey: #9aefe4fa;
    --border-color: #0444AC;
    --background-light-color: #d3d5d5fa;
    --background-light-color-2: #03ffdbfa;
    --white-color: #141414fa;
    --font-light-color: #2a2a2afa;
    --font-dark-color: #414242fa;
    --font-dark-color-2: #535454fa;
    --sidebar-dark-color: #3ABFFB;
    --scrollbar-bg-color: #d5fdf7fa;
    --scrollbar-thump-color: #84dfd2fa;
    --scrollbar-track-color: #e6ebeafa;
    --glass-color: #47d6c34a;
    --glass-color-2: #89b3aa40;
    --glass-color-3: #091a1829;
    --span-color:#02c9af57;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    font-family: calibri;
    font-size: 1.15rem;
}
body{
    background-color: #FFFFFF;
    color:var(--font-light-color)
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #3ABFFB;
}
body::-webkit-scrollbar-thumb{
    border-radius:10px;    
    background-color: #0444AC;
}
body::-webkit-scrollbar-track{
    border-radius:10px;    
    background-color: #3ABFFB;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: 1rem;
    text-decoration: none;
}
h1{
    font-size: 2rem;
    color: var(--white-color);
    span{
        font-size: 3rem;
    }
}
span{
    color: var(--primary-color);
}
.ham-burger-menu{
    display: none;
position: absolute;
right: 2%;
top: 2%;
z-index: 15;
svg{
    font-size:3rem;
}
}
.nav-toggle{
    transform: translateX(0);
    z-index: 20;
}
@media screen and (max-width: 1200px) {
    .ham-burger-menu{
        display: block;
    }

  }

`;
export default GlobalStyled;
