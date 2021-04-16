import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: linear-gradient(135deg, #1607ad 10%, #1b1463 80%, #9708d4);
    min-height: 100vh;
    height: 100%;
`;

export const Main = styled.div`
    background: #fff;
    height: 50%;
    width: 60%;
    margin-left: 20%;
    margin-top: 10%;
    border-radius: 5px;
    h1{
        margin-left: 10%;
        padding-top: 25px; 
        font-weight: 100;
    }
    input{
        width: 80%;
        margin-left: 10%;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #000;
    }
    input#email{
        margin-top: 5%;
    }
    button{
        margin-top: 35px;
        width: 80%;
        margin-left: 10%;
        padding: 15px;
        border: none;
        background: #1b1463;
        color: #fff;
        border-radius: 5px;
        transition: all ease 0.3s;
    }
    button:hover{
        background: ${darken(0.08, '#1b1463')};
    }
`;