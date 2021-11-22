import React from 'react';
import RadioButton from '@atoms/RadioButton';
import { StyledBigImageBox, AlignCenterDiv } from './styles';
import { StyledLabel, RowSpaceAroundDiv, StyledButton } from '../styles';

const ShowExampleImageBox = ({
  image,
  text,
  onClick,
}: {
  text: string;
  image: string;
  onClick: () => void;
}): JSX.Element => {
  return (
    <AlignCenterDiv onClick={onClick}>
      <StyledBigImageBox image={image} />
      <StyledLabel text={text} />
    </AlignCenterDiv>
  );
};

const ThemeSelect = (): JSX.Element => {
  return (
    <>
      <ShowExampleImageBox
        onClick={() => {}}
        image="https://github.com/lodado.png"
        text="violet"
      />

      <RowSpaceAroundDiv>
        <RadioButton name="violet" />
        <RadioButton name="flower" />
        <RadioButton name="mintChoco" />
        <RadioButton name="Rose" />
      </RowSpaceAroundDiv>

      <RowSpaceAroundDiv>
        <StyledButton text="확인" />
      </RowSpaceAroundDiv>
    </>
  );
};

export default ThemeSelect;
