import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
    background: linear-gradient(135deg, #1607ad 10%, #1b1463 80%, #9708d4); 
    min-height: 100%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    color: #fff;
`;

export const Info = styled.div`
    display: flex;
    row-direction: row;
    p{
        padding: 15px;
        color: #fff;
    }
    button{
        margin: 6px;
        background: none;
        border: solid 1px #fff;
        border-radius: 5px;
        padding: 5px;
        color: #fff;
    }
`;

export const NewTasks = styled.div`
    display: flex;
    row-direction: row;
    form{
        width: 550px;
        background: #fff;
        height: 450px;
        padding: 10px;
        margin: 5% 5%;
        margin-left: 10%;
        border-radius: 5px;
        margin-top: 5%;
        h1{
            margin-left: 10%;
            font-size: 22px;
            margin-top: 5%;
        }
        hr{
            margin-top: 5%;
            margin-bottom: 3%;
        }
        
        input{
            width: 80%;
            margin-left: 10%;
            margin-top: 25px;
            padding: 2%;
            background: none;
            border: none;
            border-bottom: 1px solid #000;
        }
        
        button{
            width: 80%;
            margin-left: 10%;
            margin-top: 45px;
            height: 45px;
            border: none;
            background: #1b1463;
            color: #fff;
            border-radius: 5px;
            transition: all ease 0.3s;
        }
        input.name{
            width: 50%;
        }
        input.id{
            width: 20%;
        }
        input.data{
            width: 40%;
            margin-left: 30%;
        }
        input.dataC{
            width: 40%;
            margin-left: 27%;
        }
        button:hover{
            background: ${darken(0.08, '#1b1463')};
        }
        label{
            margin-left: 10%;
            width: 20%;
        }
    }

`;

export const GetTasks = styled.div`

h1{
    font-weight: 100;
    margin-top: 14%;
    color: #fff;
}
`;

export const Task = styled.div`
    background: #fff;
    display: flex;
    row-direction: row;
    border-radius: 5px;
    margin-top: 15px;
    width: 550px;
    font-size: 15px;
    min-height: 55px;
    h2{
        padding: 15px;
        text-transform: uppercase;
        text-decoration:  ${props => (props.conclusao ? `line-through` : `none`)};
    }
    h4{
        padding: 10px;
        text-transform: uppercase;
        text-decoration:  ${props => (props.conclusao ? `line-through` : `none`)};
    }
    hr{
        height: 80%;
        margin-top: 5.5px;
    }
    button{
        height: 40px;
        width: 40px;
        margin-top: 10px;
        margin-left: 10px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        color: #fff;
        font-size: 20px;
        transition: all ease 0.7s;
    }

    button.edit{
        background: #0fbd3d;
        &:hover{
            background: ${darken(0.08, '#0fbd3d')};
        }
    }
    button.delete{
        background: #c70808;
        &:hover{
            background: ${darken(0.08, '#c70808')};
        }
    }
    button.check{
        background: #1b1463;
        &:hover{
            background: ${darken(0.08, '#1b1463')};
        }
    }
`;

export const ContainerTask = styled.div`
    h3.titleModal{
        font-size: 25px;
        padding: 10px;
    }
    button{
        border: none;
        height: 35px;
        width: 85px;
        padding: 5px;
        border-radius: 5px;
        margin-right: 15px;
        color: #fff;
        margin-left: 12px;
        transition: all ease 0.3s;
    }
    button.modalButtonCancelar{
        background: #4d4d4d;
        &:hover{
            background: ${darken(0.08, '#4d4d4d')};
        }
    }

    button.modalButton{
        background: #1b1463;
        &:hover{
            background: ${darken(0.08, '#1b1463')};
        }
    }
    button.modalButtonExcluir{
        background: #c70808;
        &:hover{
            background: ${darken(0.08, '#c70808')};
        }
    }
`;