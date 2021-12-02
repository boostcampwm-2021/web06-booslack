import React, { RefObject, useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { useParams, useHistory } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import AsyncBranch from '@molecules/AsyncBranch';
import { useChannelsQuery } from '@hook/useChannels';
import { useUsersQuery } from '@hook/useUsers';
import { useWorkspaceQuery } from '@hook/useWorkspace';
import { userProfileModalState } from '@state/modal';
import { shouldScrollDownState } from '@state/thread';
import SearchResultTemplate from '..';
import {
  StyledSearchModal,
  StyledInput,
  Container,
  StyledIconButton,
  StyledLabeledButton,
} from './styles';

const Content = ({
  input,
  clear,
  close,
}: {
  input: string;
  clear: () => void;
  close: () => void;
}) => {
  const { workspaceId }: { workspaceId: string } = useParams();
  const history = useHistory();
  const setIsUserProfileModalOpen = useSetRecoilState(userProfileModalState);
  const setShouldScrollDownState = useSetRecoilState(shouldScrollDownState);

  const channelListQuery = useChannelsQuery(workspaceId);
  const userListQuery = useUsersQuery(workspaceId);

  const setValue = (e) => {
    // if user
    if (e.nickname) {
      setIsUserProfileModalOpen({
        isOpen: true,
        userHasWorkspace: e,
        x: null,
        y: null,
      });
    } else {
      setShouldScrollDownState(true);
      history.push(`/client/${e.workspaceId}/${e.id}`);
    }
    clear();
    close();
  };

  return (
    <SearchResultTemplate
      matches={[...channelListQuery.data, ...userListQuery.data].filter(
        (datum) =>
          datum.name?.includes(input) || datum.nickname?.includes(input),
      )}
      setValue={setValue}
    />
  );
};

const SearchModal = ({
  xWidth,
  yHeight,
  isOpened,
  input,
  onChange,
  close,
  clear,
  customRef,
}: {
  xWidth: number;
  yHeight: number;
  isOpened: boolean;
  input: string;
  onChange: () => void;
  close: () => void;
  clear: () => void;
  customRef: RefObject<HTMLElement>;
}): JSX.Element => {
  const ref = useRef(null);

  const { workspaceId }: { workspaceId: string } = useParams();

  const workspaceQuery = useWorkspaceQuery(workspaceId);

  useEffect(() => {
    ref?.current.focus();
  }, [workspaceQuery.isLoading]);

  if (workspaceQuery.isLoading) return <div>Loading</div>;
  if (workspaceQuery.isError) return <div>Error</div>;

  return (
    <StyledSearchModal
      xWidth={xWidth}
      yHeight={yHeight}
      isOpened={isOpened}
      onClose={close}
      customRef={customRef}
    >
      <Container>
        <StyledIconButton icon={BsSearch} />
        <StyledInput
          ref={ref}
          placeholder={`Search in ${workspaceQuery.data?.name ?? 'workspace'}`}
          onChange={onChange}
          name="input"
          value={input}
        />
        {input !== '' && <StyledLabeledButton text="Clear" onClick={clear} />}
        <StyledIconButton icon={MdClose} onClick={close} />
      </Container>
      <AsyncBranch size={50}>
        <Content input={input} clear={clear} close={close} />
      </AsyncBranch>
    </StyledSearchModal>
  );
};

export default SearchModal;
