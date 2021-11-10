import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import themeState from '@state/Theme';
import { Itheme, yellowTheme } from '@global/theme';
import {
  StyledLabel,
  Container,
  StyledLabeledButton,
  StyledHeader,
} from './styles';

interface Props {
  children: JSX.Element;
}

const WorkspaceListTemplate = ({ children }: Props): JSX.Element => {
  const history = useHistory();
  const setTheme = useSetRecoilState<Itheme>(themeState);

  const Title: JSX.Element = <StyledLabel text="booslack" />;

  const RightButtonDiv: JSX.Element = (
    <div>
      <StyledLabeledButton text="코드 입력 " />
      <StyledLabeledButton
        text="워크스페이스 생성"
        onClick={() => history.push('/setupteam')}
      />
      <StyledLabeledButton text="로그아웃" />
      <StyledLabeledButton text="환경설정" />
      <StyledLabeledButton
        text="색깔변경"
        onClick={() => setTheme(yellowTheme)}
      />
    </div>
  );

  return (
    <Container>
      <StyledHeader title={Title} rightButton={RightButtonDiv} />
      {children}
    </Container>
  );
};

export default WorkspaceListTemplate;
