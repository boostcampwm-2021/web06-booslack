import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 20px;

  #input-bar {
    padding: 8px 8px;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: text;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  ul{
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

  #input-bar>.ql-code-block:first-child, #input-bar>:not(.ql-code-block)+.ql-code-block {
    margin-top: 4px;
    padding-top: 8px;
    border-top: 1px solid #dddddd;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

export default Container;
