import React, { Suspense, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ErrorBoundary from '@atoms/ErrorBoundary';
import { ErrorSpinner, Spinner } from '@atoms/Spinner';

interface Props {
  size: number;
  children: JSX.Element | JSX.Element[];
}

const AsyncBranch = ({ size, children }: Props): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const color = themeContext.bigHeaderColor;

  return (
    <ErrorBoundary fallback={<ErrorSpinner size={size} color={color} />}>
      <Suspense fallback={<Spinner size={size} color={color} />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

AsyncBranch.defaultProps = {};

export default AsyncBranch;
