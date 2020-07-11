import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  function handleSubmit(data: Object): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="go barber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button>Entrar</Button>

          <a href="asdf">Esqueci minha senha</a>
        </Form>

        <a href="asd">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
