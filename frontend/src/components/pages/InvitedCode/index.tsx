import React, { useState, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

import CodeModal from '@molecules/CodeModal';
import CodeTemplate from '@templates/Code';
import SubmitCodeForm from '@organisms/SubmitCodeForm';
import { checkInputValues } from '@global/util';
import API from '@global/api';
import { codeModalState } from '@state/modal';
import { StatusCodes } from '@enum/index';
import { Container, Dropzone, FileNameContainer } from './style';

const InvitedCode = (): JSX.Element => {
  const history = useHistory();
  const setModalState = useSetRecoilState(codeModalState);
  const [code, setCode] = useState<string>('');
  const [filename, setFilename] = useState<string>('default');
  const [fileId, setFileId] = useState<number>(1);
  const enterWorkspace = async () => {
    try {
      const { data } = await axios({
        method: 'post',
        url: API.post.workspace.code,
        data: { code, fileId },
      });

      history.push({
        pathname: '/workspacelist',
        state: { data },
      });
    } catch (error) {
      if (error.response.status === StatusCodes.CONFLICT) {
        setModalState({
          status: true,
          text: '이미 들어간 워크스페이스는 참여 불가능합니다.',
        });
      } else {
        setModalState({
          status: true,
          text: undefined,
        });
      }
    }
  };
  const onDrop = useCallback(async (acceptedFile) => {
    const formData = new FormData();
    const config = {
      header: {
        'content-type': 'multipart/form-data',
      },
      multiple: false,
    };
    formData.append('file', acceptedFile[0]);
    setFilename(acceptedFile[0].name);
    const response = await axios.post('/api/files/upload', formData, config);
    setFileId(response.data.files[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <CodeTemplate
        text="코드를 입력해주세요! 영/숫자만 가능합니다."
        onClick={enterWorkspace}
        code={code}
      >
        <Container>
          <SubmitCodeForm
            setCode={setCode}
            highOrderFunction={checkInputValues}
          />
          <FileNameContainer>
            <div>
              <span>프로필 사진을 업로드하세요.</span>
            </div>
            <div>
              <span>(프로필을 추가 안하면 기본 이미지로 설정됩니다.)</span>
            </div>
            <div>
              <span>프로필 사진 파일 이름 : {filename}</span>
            </div>
          </FileNameContainer>
          <Dropzone {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <span>Drop the profile file here...</span>
            ) : (
              <span>Drop the files or select Drop zone</span>
            )}
          </Dropzone>
        </Container>
      </CodeTemplate>
      <CodeModal Content="잘못된 코드입니다." />
    </>
  );
};

export default InvitedCode;
