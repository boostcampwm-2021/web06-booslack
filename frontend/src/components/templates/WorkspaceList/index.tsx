import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '@global/util/auth';
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

  const Title: JSX.Element = <StyledLabel text="booslack" />;

  const RightButtonDiv: JSX.Element = (
    <div>
      <StyledLabeledButton
        text="코드 입력 "
        onClick={() => history.push('/invitecode')}
      />
      <StyledLabeledButton
        text="워크스페이스 생성"
        onClick={() => history.push('/setupteam')}
      />
      <StyledLabeledButton text="로그아웃" onClick={logout} />
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
