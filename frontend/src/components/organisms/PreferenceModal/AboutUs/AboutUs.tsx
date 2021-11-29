import React from 'react';

import {
  StyledLabel,
  RowSpaceAroundDiv,
  ColDiv,
  StyledImageBox,
  MiddleDiv,
} from '../styles';

const NameBox = ({
  code,
  image,
  text,
  onClick,
}: {
  code: string;
  text: string;
  image: string;
  onClick: () => void;
}): JSX.Element => {
  return (
    <ColDiv onClick={onClick}>
      <StyledImageBox image={image} />
      <StyledLabel text={code} />
      <StyledLabel text={text} />
    </ColDiv>
  );
};

const openFunction = (url: string) => {
  window.open(url, 'Github Repository');
};

const AboutUs = (): JSX.Element => {
  return (
    <>
      <RowSpaceAroundDiv>
        <NameBox
          image="https://github.com/lodado.png"
          code="J166"
          text="이충헌"
          onClick={() => {
            openFunction('https://github.com/lodado');
          }}
        />
        <NameBox
          image="https://github.com/loin3.png"
          code="J197"
          text="조진성"
          onClick={() => {
            openFunction('https://github.com/loin3');
          }}
        />
      </RowSpaceAroundDiv>
      <MiddleDiv>
        <a
          href="https://github.com/boostcampwm-2021/web06-booslack"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            openFunction('https://github.com/boostcampwm-2021/web06-booslack');
          }}
        >
          Github Repository
        </a>
      </MiddleDiv>

      <RowSpaceAroundDiv>
        <NameBox
          code="J091"
          image="https://github.com/laz.png"
          text="박주원"
          onClick={() => {
            openFunction('https://github.com/laz');
          }}
        />

        <NameBox
          code="J102"
          image="https://github.com/blogSoul.png"
          text="설민욱"
          onClick={() => {
            openFunction('https://github.com/blogSoul');
          }}
        />
      </RowSpaceAroundDiv>
    </>
  );
};

export default AboutUs;
