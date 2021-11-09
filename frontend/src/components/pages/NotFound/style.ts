import styled from 'styled-components';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';

export const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  height: 30vh;
  width: 20vw;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled(LabeledDefaultButton)`
  background-color: #5c8dcf;
`;
