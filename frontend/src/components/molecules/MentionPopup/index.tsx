import Autocomplete from '@atoms/Autocomplete';
import axios from 'axios';
import React, { Dispatch, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MentionPopupTemplate from './MentionPopupTemplate';
import { StyledPopup } from './styles';

interface Props {
  input: string;
  isOpen: boolean;
  value: any;
  setValue: Dispatch<any>;
  close: () => void;
}

const MentionPopup = ({
  input,
  isOpen,
  value,
  setValue,
  close,
}: Props): JSX.Element => {
  const [users, setUsers] = useState([]);
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();

  // refactor to react-query
  // rules of hooks?
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios({
        method: 'GET',
        url: `/api/users/workspaces?workspaceId=${workspaceId}&channelId=${channelId}`, // workspaceId that this channel belongs to
        baseURL: '/',
      });
      setUsers(data.users);
    };
    getUsers();
  }, []);

  // Close when value is selected
  useEffect(() => {
    if (value) {
      close();
    }
  }, [value]);

  return (
    <StyledPopup isOpen={isOpen} onClose={close}>
      {isOpen && (
        <Autocomplete
          input={input}
          filterList={users}
          filter={(user) => user.name.includes(input)}
          setValue={setValue}
          ResultTemplate={MentionPopupTemplate}
        />
      )}
    </StyledPopup>
  );
};

export default MentionPopup;
