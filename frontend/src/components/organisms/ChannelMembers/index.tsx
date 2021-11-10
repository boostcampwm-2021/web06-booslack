import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useInputs from '@hook/useInputs';
import Autocomplete from '@atoms/Autocomplete';
import MemberElement from './MemberElement';
import {
  Container,
  FilteredContainer,
  GreyContainer,
  NoResultLabel,
  ScrollContainer,
  StyledAutocomplete,
  StyledInput,
  StyledLabel,
} from './styles';

const channelId = 1;

const Unfiltered = ({ users }): JSX.Element => {
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

const FilteredInChannel = ({ matches }) => {
  return (
    <FilteredContainer>
      <StyledLabel text="In this channel" />
      {matches.map((user) => (
        <MemberElement
          key={user.id}
          nickname={user.name}
          email={user.profile}
        />
      ))}
    </FilteredContainer>
  );
};

const FilteredNotInChannel = ({ matches }) => {
  return (
    <GreyContainer>
      <FilteredContainer>
        <StyledLabel text="Not in this channel" />
        {matches.map((user) => (
          <MemberElement
            key={user.id}
            nickname={user.name}
            email={user.profile}
          />
        ))}
      </FilteredContainer>
    </GreyContainer>
  );
};

const ChannelMembers = (): JSX.Element => {
  const [users, setUsers] = useState([]);
  const [{ input }, onChange, clear] = useInputs({ input: '' });
  const [filteredUsers, setFilteredUsers] = useState([]);

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

  useEffect(() => {
    if (input) {
      setFilteredUsers(users.filter((user) => user.name.includes(input)));
    } else {
      setFilteredUsers([]);
    }
  }, [input]);

  return (
    <Container>
      <StyledInput
        placeholder="Find members"
        onChange={onChange}
        name="input"
        value={input}
      />
      <ScrollContainer>
        {!filteredUsers.length && input && (
          <NoResultLabel text={`No result for ${input}...`} />
        )}
        {filteredUsers.length || input ? (
          <>
            <Autocomplete
              input={input}
              filter={(user) => user.channelId === channelId}
              filterList={filteredUsers}
              ResultTemplate={FilteredInChannel}
            />
            <StyledAutocomplete
              input={input}
              filter={(user) => user.channelId !== channelId}
              filterList={filteredUsers}
              ResultTemplate={FilteredNotInChannel}
            />
          </>
        ) : (
          <Unfiltered users={users} />
        )}
      </ScrollContainer>
    </Container>
  );
};

export default ChannelMembers;
