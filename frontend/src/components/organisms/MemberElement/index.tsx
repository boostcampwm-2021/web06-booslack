import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { UserHasWorkspace } from '@global/type';
import { userProfileModalState } from '@state/modal';
import defaultProfile from '@global/image/default_account.png';
import axios from 'axios';
import {
  BackgroundContainer,
  Container,
  StyledImageBox,
  StyledLabel,
} from './styles';

interface Props {
  userHasWorkspace: UserHasWorkspace;
  selected?: boolean;
}

const MemberElement = ({ userHasWorkspace, selected }: Props): JSX.Element => {
  const setIsUserProfileModalOpen = useSetRecoilState(userProfileModalState);
  const [fileUrl, setFileUrl] = useState(defaultProfile);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(async () => {
    const file = await axios.get(
      `/api/files/userhasworkspace/${userHasWorkspace.id}`,
    );
    if (file?.data.files && file?.data.files.url) {
      setFileUrl(file?.data.files.url);
    }
  }, []);

  return (
    <BackgroundContainer>
      <Container
        selected={selected}
        onClick={(e) => {
          if (!userHasWorkspace) return;
          setIsUserProfileModalOpen({
            isOpen: true,
            userHasWorkspace,
            x: e.clientX,
            y: e.clientY,
          });
        }}
      >
        <StyledImageBox image={fileUrl} />
        <StyledLabel text={userHasWorkspace.nickname} />
        {userHasWorkspace.description && (
          <StyledLabel text={userHasWorkspace.description} />
        )}
      </Container>
    </BackgroundContainer>
  );
};

MemberElement.defaultProps = {
  selected: false,
};

export default MemberElement;
