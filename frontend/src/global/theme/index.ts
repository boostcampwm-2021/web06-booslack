export interface Itheme {
  index: number;
  backgroundColor: string;
  bigHeaderColor: string;
  smallHeaderColor: string;
  titleText: string;
  smallText: string;
  searchBar: string;
  focusedMenu: string;
}

function setIndexClosure() {
  let index = 1;

  return () => {
    // eslint-disable-next-line no-plusplus
    return index++;
  };
}

const setIndex = setIndexClosure();

export const defaultTheme: Itheme = {
  index: setIndex(),
  backgroundColor: '#3F0E40',
  bigHeaderColor: '#350D36',
  smallHeaderColor: '#ecdeec',
  titleText: '#fff',
  smallText: '#BDABBC',
  searchBar: '#644565',
  focusedMenu: '#1164A3',
};

export const yellowTheme: Itheme = {
  index: setIndex(),
  backgroundColor: '#FFF8D4',
  bigHeaderColor: '#D99E10',
  smallHeaderColor: '#D99E10',
  titleText: '#591035',
  smallText: '#935D51',
  searchBar: '#A3810F',
  focusedMenu: '#FFEB84',
};

export const mintChocoTheme: Itheme = {
  index: setIndex(),
  backgroundColor: '#534538',
  bigHeaderColor: '#42362B',
  smallHeaderColor: '#D99E10',
  titleText: '#fff',
  smallText: '#8e7f70',
  searchBar: '#6E655C',
  focusedMenu: '#5CB09D',
};

export const royalBlueTheme: Itheme = {
  index: setIndex(),
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
    case 1:
      return defaultTheme;
    case 2:
      return yellowTheme;
    case 3:
      return mintChocoTheme;
    case 4:
      return royalBlueTheme;
    default:
      return defaultTheme;
  }
};

export const getIndexByTheme = (theme: Itheme): number => {
  if (defaultTheme.index === theme?.index) return 1;
  if (yellowTheme.index === theme?.index) return 2;
  if (mintChocoTheme.index === theme?.index) return 3;
  if (royalBlueTheme.index === theme?.index) return 4;
  return 1;
};

export default THEME;
