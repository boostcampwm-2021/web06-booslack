import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import QuestionForm from '@molecules/QuestionForm';
import { codeModalState } from '@state/modal';
import {
  submitInput,
  axiosWithFile,
  changeFile,
  generateCodePage,
} from '@global/util';
import API from '@global/api';
import Container, { StyledLabel, StyledButton } from './style';

const SetupTeamQuestions = (): JSX.Element => {
  const history = useHistory();
  const setModalState = useSetRecoilState(codeModalState);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState(null);

  const askName = (
    <QuestionForm
      count="1/3"
      key="askName"
      title="워크스페이스를 생성합니다."
      content="회사 또는 팀 이름이 어떻게 됩니까?"
      onSubmit={(e) => setName(submitInput(e))}
      onSet={({ value }: { value: string }) => setName(value)}
    />
  );

  const askChannel = (
    <QuestionForm
      count="2/3"
      key="askChannel"
      title="워크스페이스 설명을 적어주세요."
      content="만드려는 워크스페이스에 대한 설명을 적어주세요!"
      onSubmit={(e) => setDescription(submitInput(e))}
      onSet={({ value }: { value: string }) => setDescription(value)}
    />
  );

  /* to-do
  const askFile = (
    <QuestionForm
      count="3/3"
      key="askFile"
      type="file"
      title="초기 워크스페이스 사진을 설정합니다."
      content="초기 워크스페이스의 프로필이 될 이미지 파일을 넣어주세요."
      onSubmit={(e) => setSelectedFile(changeFile(e))}
      onSet={({ files }: { files: File }) => setSelectedFile(files[0])}
    />
  );
  */

  if (!name) return askName;
  if (!description) return askChannel;
  /*
  if (!selectedfile) return askFile;
  */

  const postAxiostest = async () => {
    return axios({
      method: 'post',
      url: API.post.workspace.addOne,
      data: {
        name,
        description,
      },
    });
  };

  return (
    <Container>
      <StyledLabel text="이 정보가 맞습니까?" />

      <StyledLabel text={`workspace Name : ${name}`} />
      <StyledLabel text={`workspace description : ${description}`} />
      <StyledLabel text={`파일 정보 : ${selectedFile} (skip)`} />

      <StyledButton
        text="제출"
        onClick={() => {
          generateCodePage(history, postAxiostest, setModalState);
        }}
      />
    </Container>
  );
};

export default SetupTeamQuestions;
