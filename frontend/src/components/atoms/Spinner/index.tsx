import React from 'react';
import { DotLoader, PacmanLoader } from 'react-spinners';
import { Center, ErrorContainer, PacmanContainer } from './style';

export const Spinner = ({
  size,
  color,
}: {
  size: number;
  color: string;
}): JSX.Element => {
  return (
    <Center>
      <DotLoader size={size} color={color} />
    </Center>
  );
};

export const ErrorSpinner = ({
  size,
  color,
}: {
  size: number;
  color: string;
}): JSX.Element => {
  return (
    <div>
      <PacmanContainer size={size}>
        <PacmanLoader size={size} color={color} />
      </PacmanContainer>
      <ErrorContainer>
        <h1>오류가 발생했습니다. 다시 시도해주세요.</h1>
      </ErrorContainer>
    </div>
  );
};
