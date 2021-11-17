import React, { Dispatch, SetStateAction } from 'react';
import Container, {
  StyledInputContainer,
  StyledInput,
  StyledDiv,
} from './styles';

const InputTag = ({
  name,
  readOnly,
  value,
}: {
  name: string;
  readOnly?: boolean;
  value?: string;
}): JSX.Element => {
  if (readOnly) {
    return (
      <StyledInput
        autoComplete="new-password"
        name={name}
        value={value}
        readOnly
        onChange={(e) => {
          e.stopPropagation();
        }}
      />
    );
  }

  return <StyledInput autoComplete="new-password" name={name} />;
};

InputTag.defaultProps = {
  readOnly: false,
  value: '',
};

interface Props {
  highOrderFunction: (inputTag: HTMLInputElement, index: number) => string;
  setCode: Dispatch<SetStateAction<string>>;
  readOnly?: boolean;
  code?: string;
}

const SubmitCodeForm = ({
  readOnly,
  setCode,
  code,
  highOrderFunction,
}: Props): JSX.Element => {
  const OnChangeLotateForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.stopPropagation();
    const { currentTarget, target } = e;
    const myIndex: number | typeof NaN = parseInt(
      target?.name[target.name.length - 1],
      10,
    );

    if (Number.isNaN(myIndex)) return;

    // eslint-disable-next-line operator-linebreak
    const inputList: NodeListOf<HTMLInputElement> =
      currentTarget.querySelectorAll('input');

    const values = Array.from(inputList)?.map(highOrderFunction);

    setCode(values.join(''));
    if (inputList[myIndex - 1]?.value) {
      inputList[myIndex > 5 ? 5 : myIndex].focus();
    }
  };

  return (
    <Container autoComplete="off" onChange={OnChangeLotateForm}>
      <StyledInputContainer>
        <InputTag value={code[0]} name="codeInput1" readOnly={readOnly} />
        <InputTag value={code[1]} name="codeInput2" readOnly={readOnly} />
        <InputTag value={code[2]} name="codeInput3" readOnly={readOnly} />
      </StyledInputContainer>
      <StyledDiv>-</StyledDiv>
      <StyledInputContainer>
        <InputTag value={code[3]} name="codeInput4" readOnly={readOnly} />
        <InputTag value={code[4]} name="codeInput5" readOnly={readOnly} />
        <InputTag value={code[5]} name="codeInput6" readOnly={readOnly} />
      </StyledInputContainer>
    </Container>
  );
};

SubmitCodeForm.defaultProps = {
  readOnly: false,
  code: '',
};

export default SubmitCodeForm;
