import React from 'react';
import LabeledButton from '@atoms/LabeledButton';
import Modal from '@atoms/Modal';
import { useRecoilState } from 'recoil';
import { sidebarChannelInfoModalState } from 'src/state/modal';
import axios from 'axios';
import { Container } from './styles';

const SidebarChannelInfoModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(sidebarChannelInfoModalState);

  const exitChannel = async () => {
    // await axios({
    //   method: 'POST',
    //   url: 'api/channel/deleteUserFromChannel',
    //   data: {
    //     userId: sessionStorage.getItem('id'),
    //     channelId: '채널이름',
    //   },
    // });
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
        <LabeledButton text="채널에서 나가기" onClick={exitChannel} />
        <div>
          <hr />
        </div>
        <LabeledButton text="새 섹션 생성" onClick={() => {}} />
        <LabeledButton text="사이드바 편집" onClick={() => {}} />
      </Container>
    </Modal>
  );
};

export default SidebarChannelInfoModal;
