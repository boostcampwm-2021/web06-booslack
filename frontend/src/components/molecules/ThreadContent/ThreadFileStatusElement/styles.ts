import styled from 'styled-components';
import ImageBox from '@atoms/ImageBox';
import { MdTextSnippet } from 'react-icons/md';

export const ThreadFileStatusLayOut = styled.div`
  max-width: calc(100% - 5px);
  width: 100%;
  height: auto;
  border: 1px solid #989898;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const ThreadFileStatusElementImage = styled(ImageBox)`
  object-fit: contain;
  box-sizing: content-box;
  width: 95%;
  border-radius: 5px;
`;

export const ThreadMdTextSnippet = styled(MdTextSnippet)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
