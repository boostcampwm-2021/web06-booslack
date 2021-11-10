import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import useInputs from '@hook/useInputs';
import MemberElement from './MemberElement';
import { Container, ScrollContainer, StyledInput, StyledLabel } from './styles';
import LabeledButton from '@atoms/LabeledButton';

const channelId = 1;

const Unfiltered = ({ users }): JSX.Element => {
  return (
    <>
      {/* <LabeledButton text="Add people" onClick={() => {}} /> */}
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

const Filtered = ({
  filteredUserInChannel,
  filteredUserNotInChannel,
  filter,
}): JSX.Element => {
  return (
    <>
      <StyledLabel text="In this channel" />
      {filteredUserInChannel
        .filter((user) => user.name.includes(filter))
        .map((user) => (
          <MemberElement
            key={user.id}
            nickname={user.name}
            email={user.profile}
          />
        ))}
      <StyledLabel text="Not in this channel" />
      {filteredUserNotInChannel
        .filter((user) => user.name.includes(filter))
        .map((user) => (
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
  const [filteredUserInChannel, setFilteredUserInChannel] = useState([]);
  const [filteredUserNotInChannel, setFilteredUserNotInChannel] = useState([]);

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
    const [usersInChannel, usersNotInChannel] = _.partition(
      users,
      (user) => user.channelId === channelId,
    );
    setFilteredUserInChannel(usersInChannel);
    setFilteredUserNotInChannel(usersNotInChannel);
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
        {input ? (
          <Filtered
            filter={input}
            filteredUserInChannel={filteredUserInChannel}
            filteredUserNotInChannel={filteredUserNotInChannel}
          />
        ) : (
          <Unfiltered users={users} />
        )}
      </ScrollContainer>
    </Container>
  );
};

export default ChannelMembers;
