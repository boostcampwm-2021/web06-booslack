import React from 'react';
import { DotLoader } from 'react-spinners';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const SmallSpinner = (): JSX.Element => {
  return (
    <Center>
      <DotLoader />
    </Center>
  );
};

export const MediumSpinner = (): JSX.Element => {
  return <DotLoader size={150} />;
};

export const LargeSpinner = (): JSX.Element => {
  return <DotLoader size={300} />;
};
