export interface Itheme {
  backgroundColor: string;
  bigHeaderColor: string;
  smallHeaderColor: string;
  titleText: string;
  smallText: string;
  searchBar: string;
  focusedMenu: string;
}

/*
    주의점 : 글자 말고 코드로 써주세요.
    https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=ko
    추천
*/
export const defaultTheme: Itheme = {
  backgroundColor: '#3F0E40',
  bigHeaderColor: '#350D36',
  smallHeaderColor: '#ecdeec',
  titleText: '#fff',
  smallText: '#BDABBC',
  searchBar: '#644565',
  focusedMenu: '#1164A3',
};

export const yellowTheme: Itheme = {
  backgroundColor: '#FFF8D4',
  bigHeaderColor: '#D99E10',
  smallHeaderColor: '#D99E10',
  titleText: '#591035',
  smallText: '#935D51',
  searchBar: '#D99E10',
  focusedMenu: '#FFEB84',
};

export const THEME = {
  defaultTheme,
  yellowTheme,
};

export default THEME;
