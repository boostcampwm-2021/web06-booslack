import React from 'react';
import { useHistory } from 'react-router-dom';
import CodeTemplate from '@templates/Code';
import { Container } from './style';

const InvitedCode = (): JSX.Element => {
  const history = useHistory();

  return (
    <CodeTemplate
      text="코드을 입력해주세요!"
      onClick={() => history.push('workspacelist')}
    >
      <Container>invite</Container>
    </CodeTemplate>
  );
};

export default InvitedCode;
