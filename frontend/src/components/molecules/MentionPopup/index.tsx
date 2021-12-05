import React, { Dispatch, RefObject, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AsyncBranch from '@molecules/AsyncBranch';
import { useUserListWithChannelInfoQuery } from '@hook/useUsers';
import MentionPopupTemplate from './MentionPopupTemplate';
import { StyledPopup } from './styles';

interface Props {
  input: string;
  isOpen: boolean;
  value: any;
  setValue: Dispatch<any>;
  close: () => void;
  customRef: RefObject<HTMLElement>;
  xWidth: number;
  yHeight: number;
}

const Content = ({
  input,
  setValue,
}: {
  input: string;
  setValue: Dispatch<any>;
}) => {
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();
  const { data } = useUserListWithChannelInfoQuery(workspaceId, channelId);

  return (
    <MentionPopupTemplate
      matches={data.filter((datum) => datum.nickname.includes(input))}
      setValue={setValue}
    />
  );
};

const MentionPopup = ({
  input,
  isOpen,
  value,
  setValue,
  close,
  customRef,
  xWidth,
  yHeight,
}: Props): JSX.Element => {
  useEffect(() => {
    if (value) {
      close();
    }
  }, [value]);

  return (
    <StyledPopup
      xWidth={xWidth}
      yHeight={yHeight - 300}
      customRef={customRef}
      isOpened={isOpen}
      onClose={close}
    >
      <AsyncBranch size={25}>
        <Content input={input} setValue={setValue} />
      </AsyncBranch>
    </StyledPopup>
  );
};

export default MentionPopup;
