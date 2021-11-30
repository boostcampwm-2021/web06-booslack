import React from 'react';
import { useRecoilState } from 'recoil';
import LabeledButton from '@atoms/LabeledButton';
import { sidebarChannelInfoModalState } from 'src/state/modal';
import axios from 'axios';
import { Container, StyledModal } from './styles';

const SidebarChannelInfoModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(sidebarChannelInfoModalState);

  const exitChannel = async (channelId) => {
    await axios({
      method: 'DELETE',
      url: `/api/channel/userFromChannel?userId=${sessionStorage.getItem(
        'id',
      )}&channelId=${channelId}&workspaceId=${sessionStorage.getItem(
        'workspaceId',
      )}`,
    });
    setIsOpen({ status: false, channelId: isOpen.channelId });
  };

  return (
    <StyledModal
      isOpen={isOpen.status}
      onClose={() => setIsOpen({ status: false, channelId: isOpen.channelId })}
    >
      <Container>
        <LabeledButton text="분할 화면으로 열기" onClick={() => {}} />
        <div>
          <hr />
        </div>
        <LabeledButton text="알림 변경" onClick={() => {}} />
        <LabeledButton text="채널 음소거" onClick={() => {}} />
        <div>
          <hr />
        </div>
        <LabeledButton text="이름 복사" onClick={() => {}} />
        <LabeledButton text="링크 복사" onClick={() => {}} />
        <div>
          <hr />
        </div>
        <LabeledButton text="채널을 즐겨찾기에추가" onClick={() => {}} />
        <LabeledButton text="새 섹션으로 이동" onClick={() => {}} />
        <div>
          <hr />
        </div>
        <LabeledButton text="채널 세부정보 열기" onClick={() => {}} />
        <LabeledButton
          text="채널에서 나가기"
          onClick={() => exitChannel(isOpen.channelId)}
        />
        <div>
          <hr />
        </div>
        <LabeledButton text="새 섹션 생성" onClick={() => {}} />
        <LabeledButton text="사이드바 편집" onClick={() => {}} />
      </Container>
    </StyledModal>
  );
};

export default SidebarChannelInfoModal;
