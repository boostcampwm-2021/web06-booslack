export interface Itheme {
  backgroundColor: string;
  bigHeaderColor: string;
  smallHeaderColor: string;
  titleText: string;
  smallText: string;
}

/*
    주의점 : 글자 말고 코드로 써주세요.
    https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=ko
    추천
*/
export const defaultTheme: Itheme = {
  backgroundColor: '#350D36',
  bigHeaderColor: '#350D36',
  smallHeaderColor: '#ecdeec',
  titleText: '#fff',
  smallText: '#BDABBC',
};

export const yellowTheme: Itheme = {
  backgroundColor: '#FFF8D4',
  bigHeaderColor: '#D99E10',
  smallHeaderColor: '#D99E10',
  titleText: '#591035',
  smallText: '#935D51',
};

export const THEME = {
  defaultTheme,
  yellowTheme,
};

export default THEME;
