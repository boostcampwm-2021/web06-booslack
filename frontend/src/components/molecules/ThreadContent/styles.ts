import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const MessageKit = styled.div`
  line-height: 1.46668;
  padding: 8px 20px;
  display: flex;
`;

export const MessageKitLeft = styled.div`
  flex-shrink: 0;
  margin-right: 8px;
  display: flex;
`;

export const MessageKitRight = styled.div`
  flex: 1 1 0;
  min-width: 0;
  padding: 8px;
  padding-left: 16px;
  margin: -12px -8px -16px -16px;
`;

export const MessageSender = styled.span`
  font-weight: 900;
  color: #1d1c1d;
`;

export const MessageTimestamp = styled.a`
  color: #616061;
  font-size: 12px;
  text-decoration: none;
`;

export const MessageText = styled.div`
  max-width: none;
  margin-bottom: 4px;
  word-wrap: break-word;
  width: 100%;
`;
