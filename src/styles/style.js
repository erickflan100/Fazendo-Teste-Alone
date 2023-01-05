import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    height: 75px;
    background-Color: #000000;
`

export const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 75px;
    background-Color: #242124;
`

export const Button = styled.button`
    font-size: 20px;
    width: 100px;
    height: 35px;
    background-Color: #7A4115;
    border: 1px solid #fff;
    border-radius: 5px;
    margin: 0 10px 0 0;
    color: #A47A40;
    cursor: pointer;
    transition: 0.2s;

    :hover{
        border-radius: 8px;
    }
`
export const Main = styled.main`
    display: flex;
    justify-content: center;
    alifn-items: center;
    width: 80%;
    height: 700px;
    margin: 0 auto;
    background-Color: #000000;
    color: #FFF;
`