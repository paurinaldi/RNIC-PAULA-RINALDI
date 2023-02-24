import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof myTheme.colors;
  }
}

const myTheme = {
  colors: {
    white: '#FFF',
    black: '#000',
    greyishGreen: '#56746e',
    grey: '#becbc9',
    pink: '#ebdef0',
    greyishPink: '#b0acac',
    darkerGreen: '#4e6661',
    darkerGrey: '#7A7A7A',
    green: '#88b478',
  },
};

export {myTheme};
