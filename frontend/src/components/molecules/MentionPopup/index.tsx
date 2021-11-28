import Autocomplete from '@atoms/Autocomplete';
import { useUserListWithChannelInfoQuery } from '@hook/useUsers';
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
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();

  useEffect(() => {
    if (value) {
      close();
    }
  }, [value]);

  const { isLoading, isError, data } = useUserListWithChannelInfoQuery(
    workspaceId,
    channelId,
  );

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <StyledPopup isOpen={isOpen} onClose={close}>
      <Autocomplete
        input={input}
        filterList={data}
        filter={(user) => user.nickname.includes(input)}
        setValue={setValue}
        ResultTemplate={MentionPopupTemplate}
      />
    </StyledPopup>
  );
};

export default MentionPopup;
