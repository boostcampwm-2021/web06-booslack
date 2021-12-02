import IconButton from '@atoms/IconButton';
import Label from '@atoms/Label';
import React, { useContext } from 'react';
import { Container, StyledLabel, StyledIconButton } from './styles';
import { MdAdd } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { channelCreateModalState } from '@state/modal';
import { ThemeContext } from 'styled-components';

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

  const themeContext = useContext(ThemeContext);
  const { smallText } = themeContext;

  return (
    <Container>
      <StyledLabel color={smallText}>
        <Label text={label} />
      </StyledLabel>
      <StyledIconButton>
        <IconButton
          icon={MdAdd}
          onClick={() => setIsOpen(true)}
          color={smallText}
        />
      </StyledIconButton>
    </Container>
  );
};

export default SidebarDivision;
