import React from 'react';
import { Data } from '@hook/useAsync';

interface Props {
  data: Data;
  loading: boolean;
  error: Error;
  success: JSX.Element;
  children?: undefined | JSX.Element;
}

const AsyncBranch = ({
  loading,
  error,
  data,
  success,
  children,
}: Props): JSX.Element => {
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return <></>;
  return children || success;
};

AsyncBranch.defaultProps = {
  children: undefined,
};

export default AsyncBranch;
