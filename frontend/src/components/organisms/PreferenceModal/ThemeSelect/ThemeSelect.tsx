import React, { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import RadioButton from '@atoms/RadioButton';
import userState from '@state/user';
import { StyledBigImageBox, AlignCenterDiv } from './styles';
import { StyledLabel, RowSpaceAroundDiv, StyledButton } from '../styles';
import API from '@global/api';

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
  const [user, setUser] = useRecoilState(userState);
  const { theme } = user;

  const [currentTheme, setTheme] = useState(theme ?? 0);
  const { workspaceId }: { workspaceId: string } = useParams();

  const ChangeThemeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(parseInt(e.target.value, 10));
  };

  console.log(user);

  return (
    <>
      <ShowExampleImageBox
        onClick={() => {}}
        image="https://github.com/lodado.png"
        text="violet"
      />

      <RowSpaceAroundDiv>
        <RadioButton
          isChecked={currentTheme}
          name="violet"
          value={0}
          onChange={ChangeThemeValue}
        />
        <RadioButton
          isChecked={currentTheme}
          name="flower"
          value={1}
          onChange={ChangeThemeValue}
        />
        <RadioButton
          isChecked={currentTheme}
          name="mintChoco"
          value={2}
          onChange={ChangeThemeValue}
        />
        <RadioButton
          isChecked={currentTheme}
          name="Rose"
          value={3}
          onChange={ChangeThemeValue}
        />
      </RowSpaceAroundDiv>
      <RowSpaceAroundDiv>
        <StyledButton
          text="확인"
          onClick={() => {
            axios
              .put(`${API.update.userHasWorkspace}/${workspaceId}`, {
                theme: currentTheme,
              })
              .then(() => {
                setUser({ ...user, theme: currentTheme });
              });
          }}
        />
      </RowSpaceAroundDiv>
    </>
  );
};

export default ThemeSelect;
