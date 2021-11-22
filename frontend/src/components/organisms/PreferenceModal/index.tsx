import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { preferenceModalState } from '@state/modal';
import PreferenceMenuContent from './PreferenceMenuContent';
import AboutUs from './AboutUs/AboutUs';
import ThemeSelect from './ThemeSelect/ThemeSelect';
import {
  Container,
  StyledTitleLabel,
  StyledModal,
  MenuContainer,
  StyledDivLists,
  RowDiv,
} from './styles';

const selectedContent = ({ isClicked }: { isClicked: number }): JSX.Element => {
  switch (isClicked) {
    case 1:
      return <AboutUs />;
    case 2:
      return <ThemeSelect />;
    default:
      return <></>;
  }
};

const PreferenceModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(preferenceModalState);
  const [isClicked, setClick] = useState<number>(1);

  return (
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)} zIndex={100}>
      <Container>
        <StyledTitleLabel text=" 환경 설정 " />
        <RowDiv>
          <MenuContainer>
            <StyledDivLists
              isClicked={isClicked}
              index={1}
              onClick={() => setClick(1)}
              text="About us"
            />
            <StyledDivLists
              isClicked={isClicked}
              index={2}
              onClick={() => setClick(2)}
              text="테마 설정"
            />
            <StyledDivLists
              isClicked={isClicked}
              index={3}
              color="red"
              onClick={() => setClick(3)}
              text="워크스페이스 탈퇴"
            />
          </MenuContainer>
          <PreferenceMenuContent>
            {selectedContent({ isClicked })}
          </PreferenceMenuContent>
        </RowDiv>
      </Container>
    </StyledModal>
  );
};

export default PreferenceModal;
