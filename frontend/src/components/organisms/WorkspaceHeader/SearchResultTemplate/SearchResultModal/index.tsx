import React, { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { useParams, useHistory } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { useChannelsQuery } from '@hook/useChannels';
import { useUsersQuery } from '@hook/useUsers';
import { useWorkspaceQuery } from '@hook/useWorkspace';
import { userProfileModalState } from '@state/modal';
import SearchResultTemplate from '..';
import {
  StyledSearchModal,
  StyledInput,
  Container,
  StyledIconButton,
  StyledLabeledButton,
} from './styles';

const SearchModal = ({
  xWidth,
  yHeight,
  isOpened,
  input,
  onChange,
  close,
  clear,
  customRef,
}) => {
  const history = useHistory();
  const ref = useRef(null);
  const setIsUserProfileModalOpen = useSetRecoilState(userProfileModalState);

  const { workspaceId }: { workspaceId: string } = useParams();

  const workspaceQuery = useWorkspaceQuery(workspaceId);
  const channelListQuery = useChannelsQuery(workspaceId);
  const userListQuery = useUsersQuery(workspaceId);

  useEffect(() => {
    if (
      channelListQuery.isLoading ||
      userListQuery.isLoading ||
      workspaceQuery.isLoading
    )
      return;
    ref.current.focus();
  }, [
    channelListQuery.isLoading,
    userListQuery.isLoading,
    workspaceQuery.isLoading,
  ]);

  if (
    channelListQuery.isLoading ||
    userListQuery.isLoading ||
    workspaceQuery.isLoading
  ) {
    return <div>Loading</div>;
  }
  if (
    channelListQuery.isError ||
    userListQuery.isError ||
    workspaceQuery.isError
  ) {
    return <div>Error</div>;
  }

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
      history.push(`/client/${e.workspaceId}/${e.id}`);
    }
    clear();
    close();
  };

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
      <SearchResultTemplate
        matches={[...channelListQuery.data, ...userListQuery.data].filter(
          (datum) =>
            datum.name?.includes(input) || datum.nickname?.includes(input),
        )}
        setValue={setValue}
      />
    </StyledSearchModal>
  );
};

export default SearchModal;
