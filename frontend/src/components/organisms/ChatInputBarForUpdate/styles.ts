import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 20px;
`;

export const NotificationBar = styled.div`
  height: 24px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
`;

export const WysiwygContainer = styled.div`
  border-color: #868686;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  background: #ffffff;

  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-rows: auto minmax(0, 100%) auto auto;
  grid-template-areas:
    'context context context'
    'input input input'
    'attachments attachments attachments'
    'prefix single_decker_input suffix';
  position: relative;
`;

export default Container;
