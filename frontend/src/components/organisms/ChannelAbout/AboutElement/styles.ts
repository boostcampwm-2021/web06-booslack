import Label from '@atoms/Label';
import styled from 'styled-components';

interface Props {
  border: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px 20px;
  font-size: 15px;
  line-height: 22px;
  border-bottom: ${(props) => props.border && '1px solid #dddddd'};

  &: hover {
    cursor: pointer;
    background-color: #f6f6f6;
  }

  &: first-child {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  &: last-child {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export const StyledBoldLabel = styled(Label)`
  font-weight: bold;
`;

export const StyledLightLabel = styled(Label)`
  color: grey;
`;

export const StyledRedLabel = styled(Label)`
  font-weight: bold;
  color: red;
`;

export const StyledEditLabel = styled(Label)`
  position: absolute;
  top: 16px;
  right: 20px;
  color: #2c649e;
  font-weight: bold;
  font-size: 100%;
`;
