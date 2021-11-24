/* eslint-disable react/jsx-wrap-multilines */
import React, { useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import ImageButton from '@atoms/ImageButton';
import Label from '@atoms/Label';
import { replyToggleState, replyWorkspaceState } from '@state/workspace';
import { useChannelQuery } from '@hook/useChannels';
import { CHANNELTYPE } from '@enum/index';
import xMarkImage from '@global/image/xMark.svg';
import Container, {
  StyledBrowseChannelHeader,
  StyledLabel,
  XImageButton,
} from './styles';

const ReplyHeader = (): JSX.Element => {
  const LeftSizeLabel = () => useMemo(() => <StyledLabel text="쓰레드" />, []);

  const { channelId }: { channelId: string } = useParams();
  const { isError, data } = useChannelQuery(channelId);

  if (isError) return <div>Error</div>;

  const channelName = data?.name?.substr(0, 10);
  const channelType = CHANNELTYPE[data?.private];

  return (
    <StyledBrowseChannelHeader
      title={
        <div>
          <LeftSizeLabel />
          <span> </span>
          <Label color="grey" text={channelType} />
          <span> </span>
          <Label color="grey" text={channelName} />
        </div>
      }
      content={<></>}
      rightButton={<XImageButton image={xMarkImage} />}
    />
  );
};

const ReplyBar = (): JSX.Element => {
  const SIZEVW = useRecoilValue(replyWorkspaceState);
  const isOpened = useRecoilValue(replyToggleState);

  return (
    <Container widthVW={SIZEVW} isOpened={isOpened}>
      <ReplyHeader />
    </Container>
  );
};

export default ReplyBar;
