import styled from 'styled-components';
import { theme } from 'styled-tools';
import NoOverlayModal from '@molecules/NoOverlayModal';
import ImageButton from '@atoms/ImageButton';
import IconButton from '@atoms/IconButton';
import { defaultTheme } from '@global/style/theme';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 45px;
  padding: 1vh 20px 1vh 20px;

  background-color: ${theme('bigHeaderColor', defaultTheme.bigHeaderColor)};
  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-bottom: 50px soild #fff;
`;

export const StyledDiv = styled.div`
  width: 40vw;
  min-width: 400px;
  height: 24px;
  border-radius: 6px;
  font-size: 15px;

  color: ${theme('titleText', defaultTheme.titleText)};
  background-color: ${theme('searchBar', defaultTheme.searchBar)};

  text-align: center;
  &:hover {
    cursor: pointer;
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

export const StyledImageButton = styled(ImageButton)`
  position: absolute;
  right: 12px;
  border-radius: 5px;
`;

export const StyledIconButton = styled(IconButton)`
  display: inline-flex;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
  height: 24px;
  color: ${theme('titleText', defaultTheme.titleText)};
  font-size: 15px;
`;

export default Container;
