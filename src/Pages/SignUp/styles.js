import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: linear-gradient(135deg, #1607ad 10%, #1b1463 80%, #9708d4);
    
    img{
        margin-left: 20%;
        widht: 750px;
        height: 660px;
    }
    form{
        background: #fff;
        width: 100%;
        height: 80%;
        width: 800px;
        margin-left: 20%;
        padding: 5%;
        margin-top: 5%;
        border-radius: 5px;
        input{
            width: 100%;
            padding: 15px;
            margin: 5px;
            border: none;
            border-bottom: 1px solid #000;
        }
        button{
            height: 55px;
            padding: 5px;
            width: 100%;
            margin: 5px;
            border: none;
            background: #1b1463;
            color: #fff;
            border-radius: 5px;
            transition: all ease 0.3s;
        }
        button:hover{
            background: ${darken(0.08, '#1b1463')};
        }
    }
`;

export const Main = styled.div`
    display: flex;
    row-direction: row;
`;

export const Text = styled.div`
    width: 20% ;
    margin-left: 5%;
    margin-top: 10%;
    color: #fff;
    h1{
        font-size: 38px;
    }
    p{
        font-size: 18px;
        margin-bottom: 35px;
        cursor: pointer;
    }
    a{
        color: #fff;
        padding: 50px;
        padding-top: 8px;
        padding-bottom: 8px;
        background: green;
        border-radius: 5px;
        font-weight: bold;
        transition: all ease 0.3s;
    }
    a:hover{
        background: ${darken(0.08, 'green')};
    }
`;


export const NewTasks = styled.div`
    
`;