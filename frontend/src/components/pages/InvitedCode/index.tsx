import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import CodeModal from '@organisms/CodeModal';
import CodeTemplate from '@templates/Code';
import SubmitCodeForm from '@organisms/SubmitCodeForm';
import { checkInputValues } from '@global/util';
import API from '@global/api';
import { codeModalState } from '@state/modal';
import { Container } from './style';

const InvitedCode = (): JSX.Element => {
  const history = useHistory();
  const setModalState = useSetRecoilState(codeModalState);
  const [code, setCode] = useState<string>('');

  const enterWorkspace = async () => {
    try {
      const { data } = await axios({
        method: 'post',
        url: API.post.workspace.code,
        data: { code },
      });

      history.push({
        pathname: '/workspacelist',
        state: { data },
      });
    } catch (error) {
      setModalState(true);
    }
  };

  return (
    <>
      <CodeTemplate
        text="코드를 입력해주세요!"
        onClick={enterWorkspace}
        code={code}
      >
        <Container>
          <SubmitCodeForm
            setCode={setCode}
            highOrderFunction={checkInputValues}
          />
        </Container>
      </CodeTemplate>
      <CodeModal Content="잘못된 코드입니다." />
    </>
  );
};

export default InvitedCode;
