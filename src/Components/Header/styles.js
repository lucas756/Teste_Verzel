import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    color: #fff;
    a{
        margin-right: 5%;
        background: none;
        color: #fff;
        height: 25px;
        margin-top: 20px;
        padding: 5px;
        border: solid #fff 2px;
        border-radius: 5px;
    }
    
`;

export const Links = styled.div`
    display: flex;
    p{
        row-direction: row;
        padding: 15px;
        font-size: 18px;
        margin-left: 20px;
        margin-top: 10px;
        justify-content: center;
    }
`;