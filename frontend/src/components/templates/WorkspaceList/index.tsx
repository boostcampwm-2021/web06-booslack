import React from 'react';
import { useSetRecoilState } from 'recoil';
import WorkSpaceListContent from '@organisms/WorkspaceListContent';
import themeState from '@state/Theme';
import { Itheme, yellowTheme } from '@global/theme';
import { Container, StyledLabeledButton, StyledHeader } from './styles';

const WorkspaceListTemplate = (): JSX.Element => {
  const Title: JSX.Element = <div>122</div>;

  const setTheme = useSetRecoilState<Itheme>(themeState);

  const RightButtonDiv: JSX.Element = (
    <div>
      <StyledLabeledButton text="1" onClick={() => setTheme(yellowTheme)} />
      <StyledLabeledButton text="1" />
      <StyledLabeledButton text="1" />
      <StyledLabeledButton text="1" />
    </div>
  );

  return (
    <Container>
      <StyledHeader title={Title} rightButton={RightButtonDiv} />
      <WorkSpaceListContent />
      <footer>footer</footer>
    </Container>
  );
};

export default WorkspaceListTemplate;
