import React, { useState } from 'react';
import ViewportInput from '@atoms/ViewPortInput';
import MentionPopup from '@molecules/MentionPopup';
import useInputs from '@hook/useInputs';
import { Container } from './styles';
import Input from '@atoms/Input';
import Label from '@atoms/Label';

interface Props {
  width: number;
  height: number;
}

const WorkspaceChatInput = ({ width, height }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState(null);
  const [{ input }, onChange, clear] = useInputs({ input: '' });

  return (
    <Container width={width} height={height}>
      <MentionPopup
        input={input}
        isOpen={isOpen}
        value={value}
        setValue={setValue}
        setIsOpen={() => setIsOpen(false)}
      />
      {/* <ViewportInput
        width={width}
        height={height}
        placeholder="메세지 보내기"
        onSubmit={(e) => {
          e.preventDefault();
          setIsOpen((prevState) => !prevState);
        }}
      /> */}
      {/* <span>{input}</span> */}
      <Input
        placeholder="멘션 테스트"
        name="input"
        onChange={onChange}
        value={input}
      />
    </Container>
  );
};

export default WorkspaceChatInput;
