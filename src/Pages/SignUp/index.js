import React, { useState } from 'react'
import Header from '../../Components/Header/index'
import { Container, Main, Text } from './styles'
import img from '../../assets/imagem.png'
import { Form, Input } from '@rocketseat/unform';
import cep from 'cep-promise'

function SignUp() {
  const [rua, setRua] = useState()
  const [cpf, setCpf] = useState()
  async function handleChange(data){
     const busca = await cep(data)
      setRua(busca.street)
  }

  async function handleSubmit(data){
    const today = new Date();
    
    const birthDate = new Date(data.data_nascimento)
    
    let age = today.getFullYear() - birthDate.getFullYear(birthDate);

    let month = today.getMonth() - birthDate.getMonth(birthDate);

    if(month < 0 || month == 0 && today.get() < birthDate.getDate()){
      age = age - 1;
    }

    if(age < 12) {
      alert('Você precisa ter mais de 12 anos para se cadastrar')
      return  
    }   
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(data.cpf) == true)	{ 
      console.log("CPF Válido");	
      } else	{	 
      alert('O cpf digitado é invalido')
      return
      }
      


     
      localStorage.setItem("nome", data.name);
      localStorage.setItem("email", data.email);
      localStorage.setItem("senha", data.senha);
      window.location.href="http://localhost:3000/SignIn";
  }

  async function MascaraCpf(data) {
    const cpfMascarado =  data.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    setCpf(cpfMascarado);
  }
  

  return (
    <> 
     <Container>
      <Header/>
      <Main>
        <Text>
          <h1>Where the world builds software</h1>
          <p>Millions of developers and companies build, ship, and maintain 
            their software on GitHub—the largest and most advanced 
            development platform in the world.</p>
            <a href="#cadastre"> Cadastre-se</a>
        </Text>
        <img src={img} />
        </Main>
      <Form id="cadastre" onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome" required/>
        <Input name="email" type="text" placeholder="Email"  required/>
        <Input name="data_nascimento" type="date" required/>
        <Input name="cpf" type="text" placeholder="Cpf" onBlur={e => MascaraCpf(e.target.value)} value={cpf} />
        <Input name="cep" type="text" placeholder="Cep" onBlur={e => handleChange(e.target.value)} />
        <Input name="endereco" type="text" placeholder="Endereço" value={rua} disabled/>
        <Input name="numero" type="text" placeholder="Número de Telefone" />
        <Input name="senha" type="password" placeholder="Senha" required/>
        <button type="submit">Cadastrar</button>
      </Form>
      
     </Container>
    </>
  );
}

export default SignUp;
