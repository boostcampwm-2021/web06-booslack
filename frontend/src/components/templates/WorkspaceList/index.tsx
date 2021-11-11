import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import AsyncBranch from '@molecules/AsyncBranch';
import themeState from '@state/Theme';
import useAsync from '@hook/useAsync';
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

  window.sessionStorage.setItem('id', '1');
  window.sessionStorage.setItem('workspaceId', '1');

  const Title: JSX.Element = <StyledLabel text="booslack" />;

  const { data, loading, error } = useAsync(null, 'api/login/info', [], 'POST');

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
      <StyledLabeledButton text="로그아웃" />
      <StyledLabeledButton text="환경설정" />
      <StyledLabeledButton
        text="색깔변경"
        onClick={() => setTheme(yellowTheme)}
      />
    </div>
  );

  console.log(data);

  return (
    <AsyncBranch data={data} loading={loading} error={error} success={<></>}>
      <Container>
        <StyledHeader title={Title} rightButton={RightButtonDiv} />
        {children}
      </Container>
    </AsyncBranch>
  );
};

export default WorkspaceListTemplate;
