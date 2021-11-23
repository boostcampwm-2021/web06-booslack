import React from 'react';

import { Container } from './styles';

const PreferenceMenuContent = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return <Container>{children}</Container>;
};

export default PreferenceMenuContent;
