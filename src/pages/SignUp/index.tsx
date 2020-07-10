import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="go barber" />

      <form>
        <h1>Faça seu cadastro</h1>
        <Input icon={FiUser} name="name" placeholder="Nome" />
        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Button>Cadastrar</Button>
      </form>

      <a href="asd">
        <FiArrowLeft />
        Voltar para o logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
