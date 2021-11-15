import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import CodeTemplate from '@templates/Code';
import checkIsLogin from '@global/util/CheckIsLogin';
import { Container } from './style';

const InvitedCode = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return () => setLoading(false);
  }, []);
  if (!checkIsLogin()) {
    return <Redirect to="/notlogin" />;
  }

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
