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

export const mintChocoTheme: Itheme = {
  backgroundColor: '#534538',
  bigHeaderColor: '#42362B',
  smallHeaderColor: '#D99E10',
  titleText: '#fff',
  smallText: '#8e7f70',
  searchBar: '#42362B',
  focusedMenu: '#5CB09D',
};

export const royalBlueTheme: Itheme = {
  backgroundColor: '#3B4F83',
  bigHeaderColor: '#001A5E',
  smallHeaderColor: '#7D89AC',
  titleText: '#77C6E5',
  smallText: '#F8F8FA',
  searchBar: '#3B4F83',
  focusedMenu: '#001A5E',
};

export const THEME = {
  defaultTheme,
  yellowTheme,
  royalBlueTheme,
  mintChocoTheme,
};

export const getThemeByIndex = (index: number): Itheme => {
  switch (index) {
    case 0:
      return defaultTheme;
    case 1:
      return yellowTheme;
    case 2:
      return mintChocoTheme;
    case 3:
      return royalBlueTheme;
    default:
      return defaultTheme;
  }
};

export default THEME;
