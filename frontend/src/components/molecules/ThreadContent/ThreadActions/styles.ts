import IconButton from '@atoms/IconButton';
import LabeledButton from '@atoms/LabeledButton';
import NoOverlayModal from '@molecules/NoOverlayModal';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: -16px;
  right: 17px;
  z-index: 1;
  display: 'inline-flex';
`;

export const ThreadActionsGroup = styled.div`
  background: #ffffff;
  line-height: 1;
  margin-left: 8px;
  padding: 2px;
  border-radius: 0.375em;
  display: flex;
  border: unset;
  box-shadow: 0 0 0 1px #1d1c1d, 0 1px 3px 0 #000000;
`;

export const ActionButton = styled(IconButton)`
  color: #1d1c1d;
  height: 32px;
  width: 32px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border 0;
  cursor: pointer;
`;

export const ActionsMenu = styled(NoOverlayModal)`
  width: 250px;
  height: inherit;
  border: none;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
  border-radius: 6px;
  padding: 0.1px 0;
`;

export const MenuItems = styled.div`
  padding: 12px 0;
`;

export const MenuItem = styled.div`
  line-height: 28px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MenuSeparator = styled.div`
  padding: 8px 0;
  margin: 0;
`;

export const MenuSeparatorHr = styled.hr`
  margin: 0px;
  border-top: 1px solid rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  border-bottom: 0;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  font-size: 0;
`;

export const MenuItemButton = styled(LabeledButton)`
  line-height: 28px;
  padding: 0 24px;
  width: 100%;
  font-size: 15px;
  text-align: left;

  :hover {
    background: #1263a3;
    color: #ffffff;
  }
`;
