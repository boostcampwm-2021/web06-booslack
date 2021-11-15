import React from 'react';
import Container, {
  StyledInputContainer,
  StyledInput,
  StyledDiv,
} from './styles';

const InputTag = ({
  name,
  readOnly,
}: {
  name: string;
  readOnly?: boolean;
}): JSX.Element => {
  if (readOnly) {
    return <StyledInput name={name} value="" onChange={() => {}} readOnly />;
  }

  return <StyledInput name={name} onChange={() => {}} />;
};

InputTag.defaultProps = {
  readOnly: false,
};

const SubmitCodeForm = (): JSX.Element => {
  return (
    <Container>
      <StyledInputContainer>
        <InputTag name="codeInput1" />
        <InputTag name="codeInput2" />
        <InputTag name="codeInput3" />
      </StyledInputContainer>
      <StyledDiv>-</StyledDiv>
      <StyledInputContainer>
        <InputTag name="codeInput4" />
        <InputTag name="codeInput5" />
        <InputTag name="codeInput6" />
      </StyledInputContainer>
    </Container>
  );
};

export default SubmitCodeForm;
