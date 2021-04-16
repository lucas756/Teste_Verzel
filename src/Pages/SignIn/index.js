import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/index'
import { Form, Input } from '@rocketseat/unform';
import { Container, Main } from './styles'

function SignIn() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  useEffect(() => {
    async function buscarEmail(){
      const buscaEmail = localStorage.getItem("email");
      setEmail(buscaEmail)
    }
    async function buscarSenha(){
      const buscaSenha = localStorage.getItem("senha");
      setSenha(buscaSenha)
    }
    buscarEmail();
    buscarSenha();
  }, [])
  async function handleSubmit(data){
    if(data.email != email || data.password != senha){
      alert('email ou senha incorretos')
      return
    }
    localStorage.setItem("autenticado", true);
    window.location.href="http://localhost:3000/dashboard";
  }
  return (
    <> 
    <Container>
    .
      <Main>
        <h1>Faça o Login</h1>
        <Form onSubmit={handleSubmit}>
          <Input type="email" name="email" id="email" placeholder="Email"/>
          <Input type="password" name="password" placeholder="Senha"/>
          <button type="submit">Entrar</button>
        </Form>
      </Main>
    </Container>
    </>
  );
}

export default SignIn;
