import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  :hover {
    background: #f8f8f8;
  }
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

  .c-member_slug--link {
    background: rgba(var(--sk_highlight_accent, 29, 155, 209), 0.1);
    color: rgba(var(--sk_highlight, 18, 100, 163), 1);
    padding: 0 2px 1px 2px;
    border-radius: 3px;
  }

  .emoji {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 22px;
    vertical-align: bottom;
    width: 22px;
  }

  em {
    font-style: italic;
  }

  s {
    text-decoration: line-through;
  }

  code {
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    font-family: Monaco, Menlo, Consolas, Courier New, monospace !important;
    font-size: 12px;
    line-height: 1.50001;
    font-variant-ligatures: none;
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: normal;
    -webkit-tab-size: 4;
    -moz-tab-size: 4;
    tab-size: 4;

    padding: 2px 3px 1px;
    border: 1px solid var(--saf-0);
    border-radius: 3px;
    background-color: rgba(var(--sk_foreground_min, 29, 28, 29), 0.04);
    color: #e01e5a;
  }

  ul {
    list-style: disc;
    padding-inline-start: 26px;
  }

  ol {
    list-style: auto;
    padding-inline-start: 26px;
  }

  blockquote {
    position: relative;
    display: block;

    padding-left: 16px;
    margin-bottom: 4px;
    margin-left: 4px;
  }

  blockquote + blockquote {
    margin-top: -6px;
    padding-top: 3px;
  }

  blockquote::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 4px;
    content: '';
    border-radius: 8px;
    background-color: #dddddd;
  }

  .ql-code-block + .ql-code-block {
    margin-top: -14px;
  }

  .ql-code-block {
    position: relative;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 14px;
    background: #f8f8f8;
    font-family: Monaco, Menlo, Consolas, Courier New, monospace !important;
    font-size: 12px;
    line-height: 1.50001;
    font-variant-ligatures: none;
    white-space: pre;
    word-wrap: break-word;
    word-break: normal;
    tab-size: 4;
  }

  .ql-code-block::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -18px;
    left: -1px;
    width: 100%;
    height: 8px;
    margin-bottom: 9px;
    background: #f8f8f8;
    border-bottom: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-bottom: 10px;
    width: calc(100% + 2px);
  }

  .ql-code-block:first-child,
  *:not(.ql-code-block) + .ql-code-block {
    margin-top: 4px;
    padding-top: 8px;
    border-top: 1px solid #dddddd;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;
