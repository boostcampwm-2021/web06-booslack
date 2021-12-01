export interface Itheme {
  index: number;
  backgroundColor: string;
  bigHeaderColor: string;
  smallHeaderColor: string;
  titleText: string;
  smallText: string;
  searchBar: string;
  focusedMenu: string;
  workspaceListTitle: string;
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
  workspaceListTitle: '#000',
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
  workspaceListTitle: '#000',
};

export const blackAndWhiteTheme: Itheme = {
  index: setIndex(),
  backgroundColor: '#0B0A0B',
  bigHeaderColor: '#000000',
  smallHeaderColor: '#1A1D21',
  titleText: '#fff',
  smallText: '#f8f8f8',
  searchBar: '#3B3B3B',
  focusedMenu: '#1164A3',
  workspaceListTitle: '#fff',
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
  workspaceListTitle: '#000',
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
  workspaceListTitle: '#000',
};

export const THEME = {
  defaultTheme,
  yellowTheme,
  royalBlueTheme,
  blackAndWhiteTheme,
};

export const getThemeByIndex = (index: number): Itheme => {
  switch (index) {
    case 1:
      return defaultTheme;
    case 2:
      return yellowTheme;
    case 3:
      return blackAndWhiteTheme;
    case 4:
      return royalBlueTheme;
    default:
      return defaultTheme;
  }
};

export const getIndexByTheme = (theme: Itheme): number => {
  if (defaultTheme.index === theme?.index) return 1;
  if (yellowTheme.index === theme?.index) return 2;
  if (blackAndWhiteTheme.index === theme?.index) return 3;
  if (royalBlueTheme.index === theme?.index) return 4;
  return 1;
};

export default THEME;
