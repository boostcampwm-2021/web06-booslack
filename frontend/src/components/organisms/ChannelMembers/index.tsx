import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MemberElement from './MemberElement';
import { Container, ScrollContainer, StyledInput } from './styles';

const ChannelMembers = (): JSX.Element => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios({
        method: 'GET',
        url: 'api/users/all',
      });
      setUsers(data.users);
    };
    getUsers();
  }, []);

  return (
    <Container>
      <StyledInput placeholder="Find members" />
      <ScrollContainer>
        {users.map((user) => (
          <MemberElement
            key={user.id}
            nickname={user.nickname}
            email={user.email}
          />
        ))}
      </ScrollContainer>
    </Container>
  );
};

export default ChannelMembers;
