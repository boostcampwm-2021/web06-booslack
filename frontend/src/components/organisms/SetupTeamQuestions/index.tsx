import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import QuestionForm from '@molecules/QuestionForm';
import { codeModalState } from '@state/modal';
import { submitInput, getCode } from '@global/util';
import API from '@global/api';
import { useDropzone } from 'react-dropzone';
import { StyledLabeledDefaultButton } from '@molecules/QuestionForm/styles';
import Container, {
  StyledLabel,
  StyledButton,
  DropZoneContainer,
} from './style';

const SetupTeamQuestions = (): JSX.Element => {
  const history = useHistory();
  const setModalState = useSetRecoilState(codeModalState);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<string>();
  const [file, setFile] = useState<File>();
  const [fileId, setFileId] = useState<number>(0);
  const onDrop = useCallback((acceptedFile) => {
    setFile(acceptedFile);
    setSelectedFile(acceptedFile[0].path);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const InputProps = {
    ...getInputProps(),
    multiple: false,
    accept: '.gif, .jpeg, .png, .jpg',
  };

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

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  const PostImage = async () => {
    const formData = new FormData();
    formData.append('file', file[0]);
    const response = await axios.post('/api/files/upload', formData, config);
    const fileList: Array<File> = response.data.files;
    setFileId(fileList[0]?.id);
  };

  const OnClickImage = async () => {
    try {
      if (selectedFile) {
        await PostImage();
      } else {
        setFileId(1);
      }
    } catch (e) {
      setFileId(0);
    }
  };

  const askImage = (
    <Container>
      <StyledLabel text="3/3" />
      <StyledLabel text="초기 워크스페이스 사진을 설정합니다." />
      <StyledLabel text="초기 워크스페이스의 프로필이 될 이미지 파일을 넣어주세요." />
      <StyledLabel text="프로필 사진으론 jpg, png만 가능합니다." />
      <StyledLabel
        text={`파일 정보 : ${
          selectedFile || '제출하지 않으면 기본 이미지로 설정됩니다.'
        }`}
      />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DropZoneContainer {...getRootProps()}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...InputProps} type="file" />
        {isDragActive ? (
          <span>Drop the Image here...</span>
        ) : (
          <span>Drop the Image file or click to select files</span>
        )}
      </DropZoneContainer>

      <StyledLabeledDefaultButton text="다음" onClick={OnClickImage} />
    </Container>
  );

  if (!name) return askName;
  if (!description) return askChannel;
  if (fileId === 0) return askImage;

  const postAxiostest = async () => {
    return axios({
      method: 'post',
      url: API.post.workspace.addOne,
      data: {
        name,
        description,
        fileId,
      },
    });
  };

  const PostWorkspace = async () => {
    const code = await getCode(postAxiostest, setModalState);
    if (code) {
      history.push({
        pathname: '/generatecode',
        state: { data: { code, nextPage: 'workspacelist' } },
      });
    }
  };

  return (
    <Container>
      <StyledLabel text="이 정보가 맞습니까?" />

      <StyledLabel text={`workspace Name : ${name}`} />
      <StyledLabel text={`workspace description : ${description}`} />
      <StyledLabel text={`파일 정보 : ${selectedFile || '제출하지 않음.'}`} />

      <StyledButton
        text="제출"
        onClick={async () => {
          await PostWorkspace();
        }}
      />
    </Container>
  );
};

export default SetupTeamQuestions;
