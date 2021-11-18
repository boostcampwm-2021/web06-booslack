import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { InfiniteData } from 'react-query';
import { Data } from '@hook/useAsync';
import Container, { LoadingSpinner, MarginDiv } from './styles';

interface Props {
  data: Data | unknown[] | InfiniteData<unknown>;
  loading: boolean;
  error: Error | unknown;
  children: JSX.Element | JSX.Element[];
}

const AsyncBranch = ({
  loading,
  error,
  data,
  children,
}: Props): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const color = themeContext.backgroundColor;

  if (loading) return <div>로딩중..</div>;
  if (error) {
    return (
      <Container>
        에러가 발생했습니다.
        <MarginDiv />
        <LoadingSpinner color={color} />
      </Container>
    );
  }
  if (!data) return <></>;
  return <>{children}</>;
};

AsyncBranch.defaultProps = {};

export default AsyncBranch;
