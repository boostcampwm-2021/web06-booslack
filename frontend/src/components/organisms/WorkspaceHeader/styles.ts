import styled from 'styled-components';
import { theme } from 'styled-tools';
import Input from '@atoms/Input';
import NoOverlayModal from '@molecules/NoOverlayModal';
import { defaultTheme } from '@global/theme';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 58px;
  min-height: 58px;

  padding: 1vh 20px 1vh 20px;

  background-color: ${theme('bigHeaderColor', defaultTheme.bigHeaderColor)};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  border-bottom: 50px soild #fff;
`;

export const StyledInput = styled(Input)`
  width: 40vw;
  min-width: 400px;
  height: 50px;
  border-radius: 6px;

  color: ${theme('titleText', defaultTheme.titleText)};
  background-color: ${theme('searchBar', defaultTheme.searchBar)};

  &::placeholder {
    color: ${theme('titleText', defaultTheme.titleText)};
  }
  &:focus {
    border: 1px solid ${theme('searchBar', defaultTheme.searchBar)};
  }
`;

export const StyledNoOverlayModal = styled(NoOverlayModal)`
  width: 200px;
  height: 250px;
  border: none;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
  border-radius: 6px;
  padding: 0.1px 0;
`;

export default Container;
