import React from 'react';
import { useHistory } from 'react-router-dom';
import CodeTemplate from '@templates/Code';
import { Container } from './style';

const GeneratedCode = (): JSX.Element => {
  const history = useHistory();

  return (
    <CodeTemplate
      text="코드을 입력해주세요!"
      onClick={() => history.push('workspacelist')}
    >
      <Container>generate</Container>
    </CodeTemplate>
  );
};

export default GeneratedCode;
