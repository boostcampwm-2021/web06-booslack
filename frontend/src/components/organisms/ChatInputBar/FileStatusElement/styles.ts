import styled from 'styled-components';
import ImageBox from '@atoms/ImageBox';

export const FileStatusElementImg = styled(ImageBox)`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid rgba(221, 221, 221, 1);
`;

export const FileStatusElementButton = styled.div`
  position: absolute;
  top: -4px;
  right: 0;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: rgba(221, 221, 221, 1);
  color: white;
  font-size: 5px;
`;

export const FileStatusElementContainer = styled.div`
  padding-right: 8px;
`;
