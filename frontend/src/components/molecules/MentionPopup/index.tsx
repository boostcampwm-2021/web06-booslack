import React, { Dispatch, RefObject, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    <StyledPopup
      xWidth={xWidth}
      yHeight={yHeight - 300}
      customRef={customRef}
      isOpened={isOpen}
      onClose={close}
    >
      <MentionPopupTemplate
        matches={data.filter((datum) => datum.nickname.includes(input))}
        setValue={setValue}
      />
    </StyledPopup>
  );
};

export default MentionPopup;
