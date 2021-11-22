import React from 'react';
import { useResetRecoilState } from 'recoil';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import API from '@global/api';
import { useWorkspaceQuery } from '@hook/useWorkspace';
import { preferenceModalState } from '@state/modal';

import { AlignCenterDiv, StyledLabel } from './styles';
import { StyledButton, RowSpaceAroundDiv } from '../styles';

const WorkspaceOut = (): JSX.Element => {
  const resetpreferenceModal = useResetRecoilState(preferenceModalState);
  const history = useHistory();
  const { workspaceId }: { workspaceId: string } = useParams();
  const { data } = useWorkspaceQuery(workspaceId);

  return (
    <>
      <AlignCenterDiv>
        정말
        <StyledLabel text={data?.name} />
        워크 스페이스를 탈퇴하시겠어요?
      </AlignCenterDiv>

      <RowSpaceAroundDiv>
        <StyledButton
          text="확인"
          onClick={async () => {
            try {
              if (workspaceId) {
                await axios.delete(
                  `${API.delete.userHasWorkspace.id}/${workspaceId}`,
                );
                history.push({ pathname: '/workspacelist' });
              }
            } catch (error) {
              history.push({ pathname: '/error' });
            } finally {
              resetpreferenceModal();
            }
          }}
        />
      </RowSpaceAroundDiv>
    </>
  );
};

export default WorkspaceOut;
