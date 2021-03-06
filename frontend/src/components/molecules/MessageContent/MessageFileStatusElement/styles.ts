import styled from 'styled-components';
import ImageBox from '@atoms/ImageBox';
import { MdTextSnippet, MdInsertDriveFile } from 'react-icons/md';

export const MessageFileStatusLayOut = styled.div`
  position: relative;
  min-width: 100px;
  min-height: 100px;
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
  border: 1px solid #989898;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const MessageFileStatusElementImage = styled(ImageBox)`
  object-fit: contain;
  box-sizing: content-box;
  width: 95%;
  border-radius: 5px;
`;

export const MessageMdTextSnippet = styled(MdTextSnippet)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const DownloadContainer = styled.a`
  width: 100%;
  height: 100%;
`;

export const DownloadCover = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: blueviolet;
  box-sizing: content-box;
  z-index: -5;
`;

export const StyleMdInsertDriveFile = styled(MdInsertDriveFile)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  color: black;
  opacity: 0.9;
`;
