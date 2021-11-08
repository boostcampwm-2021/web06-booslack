import styled from 'styled-components';

interface Props {
  width?: number;
}

export const Container = styled.div<Props>`
  display: flex;
  min-height: 48.99px;
  width: ${({ width }) => {
    if (width) return `${width}vw`;
    else return 'inherit';
  }};
  justify-content: space-between;
  align-items: center;
  }
  background-color: #fff;
  & > * {
    margin: 0 1vw 0 1vw;
    
`;

export default Container;
