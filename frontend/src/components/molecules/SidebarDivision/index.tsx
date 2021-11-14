import IconButton from '@atoms/IconButton';
import Label from '@atoms/Label';
import React from 'react';
import { Container, StyledLabel, StyledIconButton } from './styles';
import { MdAdd } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { channelCreateModalState } from '@state/modal';

type SidebarDivisionTypes = 'Starred' | 'Channels' | 'Direct Messages';

interface Props {
  label: string;
  options?: boolean;
  type: SidebarDivisionTypes;
}

const SidebarDivision = ({
  label,
  options = true,
  type,
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(channelCreateModalState);

  return (
    <Container>
      <Label text=">" />
      <StyledLabel>
        <Label text={label} />
      </StyledLabel>
      <StyledIconButton>
        <IconButton icon={MdAdd} onClick={() => setIsOpen(true)} />
      </StyledIconButton>
    </Container>
  );
};

export default SidebarDivision;
