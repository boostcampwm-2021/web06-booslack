import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #868686;
  border-radius: 5px;
  margin: 0 20px;
  background: #ffffff;
`;

export const NotificationBar = styled.div`
  height: 24px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
`;

export const WysiwygColumn = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const WysiwygContainer = styled.div`
  width: 100%;
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
