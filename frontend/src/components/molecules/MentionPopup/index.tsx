import Autocomplete from '@atoms/Autocomplete';
import Popup from '@atoms/Popup';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledPopup, UserContainer } from './styles';

const channelId = 1;

const MentionPopup = ({
  input,
  isOpen,
  value,
  setValue,
  setIsOpen,
}): JSX.Element => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

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
    // console.log(input, filteredUsers);
    setFilteredUsers(users.filter((user) => user.name.includes(input)));
  }, [input]);

  useEffect(() => {
    if (value) {
      setIsOpen(); // close
    }
  }, [value]);

  return (
    <StyledPopup isOpen={isOpen}>
      <Autocomplete
        input={input}
        filterList={filteredUsers}
        filter={(user) => user.channelId === channelId}
        setValue={setValue}
        // filterList={state.filteredUsers}
        ResultTemplate={FilteredInChannel}
      />
      {/* <Autocomplete
        input={input}
        filterList={filteredUsers}
        filter={(user) => user.channelId !== channelId}
        setValue={setValue}
        // filterList={state.filteredUsers}
        ResultTemplate={FilteredNotInChannel}
      /> */}
    </StyledPopup>
  );
};

interface Props {
  matches: never[];
  index: number;
  selected: boolean;
}

const FilteredInChannel = ({ matches, index }: Props) => {
  return (
    <div>
      {matches.map((user, idx) => (
        <UserContainer key={user.id}>
          {idx === index && '💎'}
          {idx + '  '}
          {user.id + '   '}
          {user.name}
        </UserContainer>
      ))}
    </div>
  );
};

const FilteredNotInChannel = ({ matches, index }) => {
  return (
    <div>
      {matches.map((user, idx) => (
        <UserContainer key={user.id}>
          {idx === index && '💎'}
          {user.id}
          {user.name}
          <span> Not in channel</span>
        </UserContainer>
      ))}
    </div>
  );
};

export default MentionPopup;
