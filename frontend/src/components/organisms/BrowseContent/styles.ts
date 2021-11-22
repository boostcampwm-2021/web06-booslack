import BrowseChannelHeader from '@molecules/BrowseChannelHeader';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 82vw;
  height: 95vh;
`;

export const StyledBrowseChannelHeader = styled(BrowseChannelHeader)`
  font-weight: bold;
`;

export default Container;
