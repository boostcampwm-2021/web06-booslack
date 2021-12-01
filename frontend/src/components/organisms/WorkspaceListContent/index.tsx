/* eslint-disable react/no-unused-prop-types */
import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { SmallSpinner } from '@atoms/Spinner';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import AsyncBranch from '@molecules/AsyncBranch';
import API from '@global/api';
import useInfinityScroll from '@hook/useInfinityPage';
import wavingHandImage from '@global/image/wavingHandFromSlack.gif';
import userState from '@state/user';
import { Workspace } from '@global/type';
import { queryFlatMap } from '@global/util/reactQueryUtil';
import {
  HelloLabel,
  StyledLabel,
  StyledSelectWorkspace,
  StyledDiv,
  Container,
  StyledHeader,
  StyledHelloMessage,
  WorkspaceListContainer,
  StyledLabeledButton,
  LoadingSpinner,
  SpinnerContainer,
  StyledImageBox,
} from './styles';

const WorkSpaceLists = (workspaces: Workspace[]) => {
  const history = useHistory();
  return workspaces.map(
    ({ id, name, count, fileId }: Workspace & { count: number }) => {
      return (
        <StyledDiv key={`workspacelist${id}`}>
          <StyledSelectWorkspace
            firstLabelContent={name}
            content={count}
            fileId={fileId}
          />
          <StyledLabeledButton
            text="실행"
            onClick={() => {
              history.push(`client/${id}/browse-channels`);
            }}
          />
        </StyledDiv>
      );
    },
  );
};

async function getWorkspaceLists({ pageParam = 0 }) {
  const { data } = await axios.get(API.get.workspace.user, {
    params: {
      page: pageParam,
    },
  });

  return data;
}

const WorkspaceList = () => {
  const {
    isLoading,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinityScroll('workspacelists', getWorkspaceLists);

  return (
    <>
      {/* <AsyncBranch data={data} loading={isLoading} error={error}>
        {WorkSpaceLists(queryFlatMap<Workspace>(data, 'workspaces'))}
      </AsyncBranch> */}
      {WorkSpaceLists(queryFlatMap<Workspace>(data, 'workspaces'))}
      {isFetchingNextPage && (
        <SpinnerContainer>
          <LoadingSpinner />
        </SpinnerContainer>
      )}
      <LabeledDefaultButton
        text="더보기"
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      />
    </>
  );
};

const WorkSpaceListContent = (): JSX.Element => {
  const { account } = useRecoilValue(userState);
  const NameLabel = <StyledLabel text={`${account ?? ''}의 워크스페이스`} />;

  return (
    <>
      <StyledHelloMessage>
        <StyledImageBox image={wavingHandImage} />
        <HelloLabel text="안녕하세요! 만나서 반가워요" />
      </StyledHelloMessage>

      <Container>
        <StyledHeader title={NameLabel} content={<></>} rightButton={<></>} />
        <WorkspaceListContainer>
          <Suspense fallback={<SmallSpinner />}>
            <WorkspaceList />
          </Suspense>
        </WorkspaceListContainer>
      </Container>
    </>
  );
};

export default WorkSpaceListContent;
