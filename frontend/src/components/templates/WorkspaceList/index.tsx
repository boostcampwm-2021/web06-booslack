import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import WorkSpaceListContent from '@organisms/WorkspaceListContent';
import themeState from '@state/Theme';
import { Itheme, yellowTheme } from '@global/theme';
import {
  StyledLabel,
  Container,
  StyledLabeledButton,
  StyledHeader,
} from './styles';

const WorkspaceListTemplate = (): JSX.Element => {
  const setTheme = useSetRecoilState<Itheme>(themeState);
  const Title: JSX.Element = <StyledLabel text="booslack" />;

  const history = useHistory();

  const RightButtonDiv: JSX.Element = (
    <div>
      <StyledLabeledButton
        text="색깔변경"
        onClick={() => setTheme(yellowTheme)}
      />
      <StyledLabeledButton
        text="채널1로 라우팅"
        onClick={() => history.push('client/1')}
      />
      <StyledLabeledButton text="1" />
      <StyledLabeledButton text="1" />
    </div>
  );

  return (
    <Container>
      <StyledHeader title={Title} rightButton={RightButtonDiv} />
      <WorkSpaceListContent />
    </Container>
  );
};

export default WorkspaceListTemplate;
