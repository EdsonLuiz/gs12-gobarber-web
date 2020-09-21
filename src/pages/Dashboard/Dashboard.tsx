import React from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import {
  Calendar,
  Container,
  Content,
  Header,
  HeaderContent,
  NextAppointment,
  Profile,
  Schedule,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../context/AuthContext';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Gobarber" />

          <Profile>
            <img
              src={
                user.avatar_url ||
                `https://api.adorable.io/avatars/56/${user.name}.png`
              }
              alt={user.name}
            />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="submit" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 6</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://api.adorable.io/avatars/285/abott@adorable.png"
                alt="avatars"
              />
              <strong>UserName</strong>
              <span>
                <FiClock />
                09:00
              </span>
            </div>
          </NextAppointment>
        </Schedule>

        <Calendar>asdf</Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
