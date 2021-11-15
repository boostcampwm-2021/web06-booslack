import React, { Dispatch, SetStateAction } from 'react';
import Container, {
  StyledInputContainer,
  StyledInput,
  StyledDiv,
} from './styles';

interface Props {
  setCode: Dispatch<SetStateAction<string>>;
  readOnly?: boolean;
}

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

const SubmitCodeForm = ({ readOnly, setCode }: Props): JSX.Element => {
  const OnChangeLotateForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.stopPropagation();
    const { currentTarget } = e;

    // eslint-disable-next-line operator-linebreak
    const inputs: NodeListOf<HTMLInputElement> =
      currentTarget.querySelectorAll('input');

    const values = Array.from(inputs)?.map((inputTag: HTMLInputElement) => {
      const inputValue = inputTag.value as string | undefined;

      // eslint-disable-next-line no-param-reassign
      if (inputValue) inputTag.value = inputValue[inputValue.length - 1];
      return inputTag.value as string;
    });

    setCode(values.join(''));
  };

  return (
    <Container onChange={OnChangeLotateForm}>
      <StyledInputContainer>
        <InputTag name="codeInput1" readOnly={readOnly} />
        <InputTag name="codeInput2" readOnly={readOnly} />
        <InputTag name="codeInput3" readOnly={readOnly} />
      </StyledInputContainer>
      <StyledDiv>-</StyledDiv>
      <StyledInputContainer>
        <InputTag name="codeInput4" readOnly={readOnly} />
        <InputTag name="codeInput5" readOnly={readOnly} />
        <InputTag name="codeInput6" readOnly={readOnly} />
      </StyledInputContainer>
    </Container>
  );
};

SubmitCodeForm.defaultProps = {
  readOnly: false,
};

export default SubmitCodeForm;
