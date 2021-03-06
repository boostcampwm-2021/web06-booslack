/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useMemo } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import Label from '@atoms/Label';
import ReplyContent from '@organisms/ReplyContent';
import { replyToggleState, replyWorkspaceState } from '@state/workspace';
import { CHANNELTYPE } from '@enum/index';
import xMarkImage from '@global/image/xMark.svg';
import Container, {
  StyledBrowseChannelHeader,
  StyledLabel,
  XImageButton,
} from './styles';

interface HeaderProps {
  channelName: string[];
  onClickX: () => void;
}

const ReplyHeader = ({ channelName, onClickX }: HeaderProps): JSX.Element => {
  const LeftSizeLabel = () => useMemo(() => <StyledLabel text="쓰레드" />, []);
  const XmarkImage = () =>
    useMemo(() => <XImageButton image={xMarkImage} onClick={onClickX} />, []);

  const channelType = CHANNELTYPE[channelName[0]];

  return (
    <StyledBrowseChannelHeader
      title={
        <div>
          <LeftSizeLabel />
          <span> </span>
          <Label color="grey" text={channelType} />
          <span> </span>
          <Label color="grey" text={channelName[1]} />
        </div>
      }
      content={<></>}
      rightButton={<XmarkImage />}
    />
  );
};

const ReplyBar = (): JSX.Element => {
  const SIZEVW = useRecoilValue(replyWorkspaceState);
  const [{ isOpened, message, channelName }, setReplyToggle] =
    useRecoilState(replyToggleState);

  return (
    <Container widthVW={SIZEVW} isOpened={isOpened}>
      <ReplyHeader
        channelName={channelName}
        onClickX={() =>
          setReplyToggle({
            isOpened: false,
            message: undefined,
            channelName: undefined,
          })
        }
      />
      <ReplyContent messageObject={message} />
    </Container>
  );
};

export default ReplyBar;
