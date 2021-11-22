/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import AsyncBranch from '@molecules/AsyncBranch';
import API from '@global/api';
import useInfinityScroll from '@hook/useInfinityPage';
import userState from '@state/user';
import { selectedWorkspaceState } from '@state/workspace';
import { Workspace } from '@global/type';
import { queryFlatMap } from '@global/util/reactQueryUtil';
import {
  StyledLabel,
  StyledSelectWorkspace,
  StyledDiv,
  Container,
  StyledHeader,
  WorkspaceListContainer,
  StyledLabeledButton,
  LoadingSpinner,
  SpinnerContainer,
} from './styles';

const WorkSpaceLists = (workspaces: Workspace[]) => {
  const history = useHistory();
  const setWorkspace = useSetRecoilState(selectedWorkspaceState);

  return workspaces.map(
    ({ id, name, count }: Workspace & { count: number }) => {
      return (
        <StyledDiv key={`workspacelist${id}`}>
          <StyledSelectWorkspace firstLabelContent={name} content={count} />
          <StyledLabeledButton
            text="실행"
            onClick={() => {
              setWorkspace(name);
              history.push(`client/${id}/1`);
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

const WorkSpaceListContent = (): JSX.Element => {
  const { account } = useRecoilValue(userState);
  const NameLabel = <StyledLabel text={`${account ?? ''}의 워크스페이스`} />;

  const {
    isLoading,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinityScroll('workspacelists', getWorkspaceLists);

  return (
    <Container>
      <StyledHeader title={NameLabel} content={<></>} rightButton={<></>} />
      <WorkspaceListContainer>
        <AsyncBranch data={data} loading={isLoading} error={error}>
          {WorkSpaceLists(queryFlatMap<Workspace>(data, 'workspaces'))}
        </AsyncBranch>
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
      </WorkspaceListContainer>
    </Container>
  );
};

export default WorkSpaceListContent;
