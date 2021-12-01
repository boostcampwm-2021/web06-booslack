import React from 'react';
import { DotLoader, PacmanLoader } from 'react-spinners';
import { Center, ErrorContainer, PacmanContainer } from './style';

export const SmallSpinner = (): JSX.Element => {
  return (
    <Center>
      <DotLoader />
    </Center>
  );
};

export const MediumSpinner = (): JSX.Element => {
  return (
    <Center>
      <DotLoader size={150} />
    </Center>
  );
};

export const LargeSpinner = (): JSX.Element => {
  return (
    <Center>
      <DotLoader size={300} />
    </Center>
  );
};

export const SmallErrorSpinner = (): JSX.Element => {
  return (
    <div>
      <PacmanContainer>
        <PacmanLoader />
      </PacmanContainer>
      <ErrorContainer>
        <h1>오류가 발생했습니다. 다시 시도해주세요.</h1>
      </ErrorContainer>
    </div>
  );
};

export const MediumErrorSpinner = (): JSX.Element => {
  return (
    <div>
      <PacmanContainer size={50}>
        <PacmanLoader size={50} />
      </PacmanContainer>
      <ErrorContainer>
        <h1>오류가 발생했습니다. 다시 시도해주세요.</h1>
      </ErrorContainer>
    </div>
  );
};

export const LargeErrorSpinner = (): JSX.Element => {
  return (
    <div>
      <PacmanContainer size={100}>
        <PacmanLoader size={100} />
      </PacmanContainer>
      <ErrorContainer>
        <h1>오류가 발생했습니다. 다시 시도해주세요.</h1>
      </ErrorContainer>
    </div>
  );
};
