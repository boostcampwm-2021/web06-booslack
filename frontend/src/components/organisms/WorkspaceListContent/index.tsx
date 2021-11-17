/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import AsyncBranch from '@molecules/AsyncBranch';
import API from '@global/api';
import useInfinityScroll from '@hook/useInfinityScroll';
import userState from '@state/user';
import { Workspace } from '@global/type';
import {
  StyledLabel,
  StyledSelectWorkspace,
  StyledDiv,
  Container,
  StyledHeader,
  WorkspaceListContainer,
  StyledLabeledButton,
} from './styles';

const WorkSpaceLists = ({
  workspaces,
}: {
  workspaces: Workspace[];
}): JSX.Element => {
  const history = useHistory();

  return (
    <>
      {workspaces?.map(({ id, name, count }: Workspace & { count: number }) => {
        return (
          <StyledDiv key={`workspacelist${id}`}>
            <StyledSelectWorkspace firstLabelContent={name} content={count} />
            <StyledLabeledButton
              text="실행"
              onClick={() => history.push(`client/${id}/1`)}
            />
          </StyledDiv>
        );
      })}
    </>
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
  const { nickname } = useRecoilValue(userState);
  const NameLabel = <StyledLabel text={`${nickname ?? ''}의 워크스페이스`} />;

  const {
    isLoading,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinityScroll('workspacelists', getWorkspaceLists);

  const workspacesList = data?.pages
    ?.map(({ workspaces }) => workspaces)
    .flat();

  return (
    <Container>
      <StyledHeader title={NameLabel} content={<></>} rightButton={<></>} />
      <WorkspaceListContainer>
        <AsyncBranch data={data} loading={isLoading} error={error}>
          <WorkSpaceLists workspaces={workspacesList as Workspace[]} />
        </AsyncBranch>
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
