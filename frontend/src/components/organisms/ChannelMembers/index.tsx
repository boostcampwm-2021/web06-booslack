import React, { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import useInputs from '@hook/useInputs';
import { useUserListWithChannelInfoQuery } from '@hook/useUsers';
import { userProfileModalState } from '@state/modal';
import { AllMemberTemplate, ChannelMemberTemplate } from './MemberTemplate';
import {
  Container,
  ScrollContainer,
  SearchBarContainer,
  StyledIconButton,
  StyledInput,
} from './styles';

const ChannelMembers = (): JSX.Element => {
  const { workspaceId, channelId }: { workspaceId: string; channelId: string } =
    useParams();
  const [{ input }, onChange, clear] = useInputs({ input: '' });
  const setIsUserProfileModalOpen = useSetRecoilState(userProfileModalState);
  const ref = useRef(null);

  const { isLoading, isError, data } = useUserListWithChannelInfoQuery(
    workspaceId,
    channelId,
  );

  useEffect(() => {
    if (isLoading) return;
    ref.current.focus();
  }, [isLoading]);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  const setValue = (e) => {
    setIsUserProfileModalOpen({
      isOpen: true,
      userHasWorkspace: e,
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <Container>
      <SearchBarContainer>
        <StyledIconButton />
        <StyledInput
          ref={ref}
          placeholder="Find members"
          onChange={onChange}
          name="input"
          value={input}
        />
      </SearchBarContainer>
      <ScrollContainer>
        {input ? (
          <AllMemberTemplate
            matches={data.filter((datum) => datum.nickname.includes(input))}
            setValue={setValue}
          />
        ) : (
          <ChannelMemberTemplate
            matches={data.filter((datum) => datum.inChannel === '1')}
            setValue={setValue}
          />
        )}
      </ScrollContainer>
    </Container>
  );
};

export default ChannelMembers;
