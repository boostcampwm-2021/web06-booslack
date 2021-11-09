export interface Itheme {
  backgroundColor: string;
  bigHeaderColor: string;
  smallHeaderColor: string;
}

export const defaultTheme: Itheme = {
  backgroundColor: '#350D36',
  bigHeaderColor: '#350D36',
  smallHeaderColor: '#ecdeec',
};

export const yellowTheme: Itheme = {
  backgroundColor: '#FFF8D4',
  bigHeaderColor: '#D99E10',
  smallHeaderColor: '#D99E10',
};

export const theme = {
  defaultTheme,
  yellowTheme,
};

export default theme;
