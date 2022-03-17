import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { preferenceModalState } from '@state/modal';
import { PREFERENCE_MODAL_STATUS } from '@enum/index';
import PreferenceMenuContent from './PreferenceMenuContent';
import AboutUs from './AboutUs/AboutUs';
import ThemeSelect from './ThemeSelect';
import WorkspaceOut from './WorkspaceOut';
import {
  Container,
  StyledTitleLabel,
  StyledModal,
  MenuContainer,
  StyledDivLists,
  RowDiv,
} from './styles';

const { ABOUT, THEME, OUT } = PREFERENCE_MODAL_STATUS;

const selectedContent = ({
  currentPreferenceStatus,
}: {
  currentPreferenceStatus: number;
}): JSX.Element => {
  switch (currentPreferenceStatus) {
    case ABOUT:
      return <AboutUs />;
    case THEME:
      return <ThemeSelect />;
    case OUT:
    default:
      return <WorkspaceOut />;
  }
};

const PreferenceModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(preferenceModalState);
  const [currentPreferenceStatus, setClick] = useState<number>(ABOUT);

  return (
    <StyledModal isOpen={isOpen} onClose={() => setIsOpen(false)} zIndex={100}>
      <Container>
        <StyledTitleLabel text=" 환경 설정 " />
        <RowDiv>
          <MenuContainer>
            <StyledDivLists
              isClicked={currentPreferenceStatus}
              index={ABOUT}
              onClick={() => setClick(ABOUT)}
              text="About us"
            />
            <StyledDivLists
              isClicked={currentPreferenceStatus}
              index={THEME}
              onClick={() => setClick(THEME)}
              text="테마 설정"
            />
            <StyledDivLists
              isClicked={currentPreferenceStatus}
              index={OUT}
              color="red"
              onClick={() => setClick(OUT)}
              text="워크스페이스 탈퇴"
            />
          </MenuContainer>
          <PreferenceMenuContent>
            {selectedContent({ currentPreferenceStatus })}
          </PreferenceMenuContent>
        </RowDiv>
      </Container>
    </StyledModal>
  );
};

export default PreferenceModal;
