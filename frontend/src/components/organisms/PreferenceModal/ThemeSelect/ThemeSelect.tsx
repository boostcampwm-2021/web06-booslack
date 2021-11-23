import React, { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import axios from 'axios';

import RadioButton from '@atoms/RadioButton';
import userState from '@state/user';
import API from '@global/api';
import violetImage from '@global/image/violet.png';
import yellowImage from '@global/image/yellow.png';
import mintImage from '@global/image/mintChoco.png';
import blueImage from '@global/image/blue.png';
import { preferenceModalState } from '@state/modal';
import { StyledBigImageBox, AlignCenterDiv } from './styles';
import { StyledLabel, RowSpaceAroundDiv, StyledButton } from '../styles';

const textList = ['violet', 'flower', 'mintChoco', 'royalBlue'];
const imageList = [violetImage, yellowImage, mintImage, blueImage];

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
  const closeModal = useSetRecoilState(preferenceModalState);
  const [user, setUser] = useRecoilState(userState);
  const { theme } = user;

  const [currentTheme, setTheme] = useState(theme ?? 0);
  const { workspaceId }: { workspaceId: string } = useParams();

  const ChangeThemeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(parseInt(e.target.value, 10));
    setUser({ ...user, theme: parseInt(e.target.value, 10) });
    axios.put(`${API.update.userHasWorkspace}/${workspaceId}`, {
      theme: currentTheme,
    });
  };

  return (
    <>
      <ShowExampleImageBox
        onClick={() => {}}
        image={imageList[currentTheme]}
        text={textList[currentTheme]}
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
          name="royalBlue"
          value={3}
          onChange={ChangeThemeValue}
        />
      </RowSpaceAroundDiv>
      <RowSpaceAroundDiv>
        <StyledButton
          text="확인"
          onClick={() => {
            closeModal(false);
          }}
        />
      </RowSpaceAroundDiv>
    </>
  );
};

export default ThemeSelect;
