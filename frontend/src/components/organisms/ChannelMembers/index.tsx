import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useInputs from '@hook/useInputs';
import Autocomplete from '@atoms/Autocomplete';
import MemberElement from './MemberElement';
import { Container, ScrollContainer, StyledInput } from './styles';
import MemberTemplate from './MemberTemplate';

const Unfiltered = ({ users }: { users: any[] }): JSX.Element => {
  return (
    <>
      <MemberElement key={0} nickname="Add people" email="" />
      {users.map((user) => (
        <MemberElement
          key={user.id}
          nickname={user.name}
          email={user.profile}
        />
      ))}
    </>
  );
};

const ChannelMembers = (): JSX.Element => {
  const [users, setUsers] = useState([]);
  const [{ input }, onChange, clear] = useInputs({ input: '' });

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios({
        method: 'GET',
        url: `api/users/workspaces?workspaceId=${1}`, // workspaceId that this channel belongs to
        baseURL: '/',
      });
      setUsers(data.users);
    };
    getUsers();
  }, []);
  console.log(users);
  return (
    <Container>
      <StyledInput
        placeholder="Find members"
        onChange={onChange}
        name="input"
        value={input}
      />
      <ScrollContainer>
        {input ? (
          <Autocomplete
            input={input}
            filter={(user) => user.name.includes(input)}
            filterList={users}
            setValue={() => {}} // open user profile
            ResultTemplate={MemberTemplate}
          />
        ) : (
          <Unfiltered users={users} />
        )}
      </ScrollContainer>
    </Container>
  );
};

export default ChannelMembers;
