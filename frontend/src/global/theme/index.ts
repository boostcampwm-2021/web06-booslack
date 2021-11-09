export interface Itheme {
  backgroundColor: string;
  bigHeaderColor: string;
}

export const defaultTheme: Itheme = {
  backgroundColor: '#350D36',
  bigHeaderColor: '#ecdeec',
};

export const yellowTheme: Itheme = {
  backgroundColor: '#FFF8D4',
  bigHeaderColor: '#D99E10',
};

export const theme = {
  defaultTheme,
  yellowTheme,
};

export default theme;
