import React from 'react';
import { InfiniteData } from 'react-query';
import { Data } from '@hook/useAsync';

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
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return <></>;
  return <>{children}</>;
};

AsyncBranch.defaultProps = {};

export default AsyncBranch;
