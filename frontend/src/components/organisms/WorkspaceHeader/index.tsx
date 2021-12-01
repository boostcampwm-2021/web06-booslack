import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import useInputs from '@hook/useInputs';
import useRefLocate from '@hook/useRefLocate';
import { searchModalState } from '@state/modal';
import { useWorkspaceQuery } from '@hook/useWorkspace';
import { BsSearch } from 'react-icons/bs';
import defaultProfile from '@global/image/default_account.png';
import WorkspaceHeaderMenuList from './WorkspaceHeaderMenuList';
import SearchModal from './SearchResultTemplate/SearchResultModal';
import {
  Container,
  StyledNoOverlayModal,
  StyledImageButton,
  StyledIconButton,
  StyledDiv,
} from './styles';

const WorkspaceHeader = (fileUrl: JSON): JSX.Element => {
  const ButtonRef = useRef(null);
  const SearchModalRef = useRef(null);
  const [modalState, setModalState] = useState(false);

  const [searchModal, setSearchModal] = useRecoilState(searchModalState);
  const [{ input }, onChange, clear] = useInputs({ input: '' });

  const [xWidth, yHeight] = useRefLocate(ButtonRef, 50);
  const [x, y] = useRefLocate(SearchModalRef, 50);

  const { workspaceId }: { workspaceId: string } = useParams();

  const workspaceQuery = useWorkspaceQuery(workspaceId);

  // eslint-disable-next-line react/destructuring-assignment
  const imageUrl = fileUrl?.fileUrl ?? defaultProfile;

  return (
    <Container>
      <StyledDiv onClick={() => setSearchModal(true)} ref={SearchModalRef}>
        <StyledIconButton icon={BsSearch}>
          {`Search${
            input === '' ? ` ${workspaceQuery.data?.name ?? ''}` : `: ${input}`
          }`}
        </StyledIconButton>
      </StyledDiv>
      {searchModal && (
        <SearchModal
          xWidth={x}
          yHeight={y}
          isOpened={searchModal}
          input={input}
          onChange={onChange}
          close={() => setSearchModal(false)}
          clear={clear}
          customRef={SearchModalRef}
        />
      )}
      <StyledImageButton
        customRef={ButtonRef}
        width={38}
        height={38}
        image={imageUrl}
        onClick={() => setModalState(true)}
      />
      <StyledNoOverlayModal
        xWidth={xWidth - 160}
        yHeight={yHeight + 50}
        isOpened={modalState}
        onClose={() => setModalState(false)}
        customRef={ButtonRef}
      >
        <WorkspaceHeaderMenuList />
      </StyledNoOverlayModal>
    </Container>
  );
};

export default WorkspaceHeader;
