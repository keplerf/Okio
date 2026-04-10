// "light" is the themeMode for example okyo theme in light mode or dark mode or colorblind mode, ect.

// Theme is extracted from:
// https://www.figma.com/file/99IHCyqeOQ48cniXk7O7z1/PANW---OKYO-UX-Concepts?node-id=74%3A133

export const base = {
  carousel: '#D0D0E3',
  secondaryBtnPurple: '#6870F0',
  purple: '#7F87FF', // rgb(127,135,255)
  purpleContrast: '#5d64de', // high contrats
  black: '#000000', // rgb(0,0,0)
  white: '#FFF',
  grays: {
    darker: '#424242', // rgb(66,66,66)
    dark: '#464646', // rgb(70,70,70)
    contrast: '#6b6b6b',
    medium: '#A6A1A3', // rgb(166,161,163)
    mlight: '#D8D8D8', // rgb(216,216,216)
    light: '#EEEBEB' // rgb(238,235,235)
  },
  palePurple: '#E5E7FF', // rgb(229,231,255)
  almostWhite: '#F5F6FA', // rgb(245,246,250)
  darkUIPurple: '#242238', // rgb(36,34,56)
  deepPurple: '#332A57', // rgb(51,42,87)
  deepUIBlack: '#077031B', // rgb(07,03,27)
  darkUINav: '#423D5A', // rgb(66,61,90)
  fireWallYellow: '#FFA944', // rgb(255,269,68)
  grayish: {
    1: '#9896B5', // rgb(152,150,181)
    2: '#ADAABC', // rgb(173,170,188)
    3: '#D2D1E1', // rgb(210, 209, 225)
    4: '#E7E8F2', // rgb(231,232,242)
    5: '#8F8F8F',
    6: '#6f6d90',
    7: '#6269a9'
  },
  text: '#1A1919' // pulled from figma mocks https://www.figma.com/file/99IHCyqeOQ48cniXk7O7z1/PANW---OKYO-UX-Concepts?node-id=1551%3A2560
}

export const colors = {
  primaryPurple: {
    light: base.purple
  },
  primaryBlack: {
    light: base.black
  },
  darkerGray: {
    light: base.grays.darker
  },
  darkGray: {
    light: base.grays.dark
  },
  mediumGray: {
    light: base.grays.medium
  },
  lightGray: {
    light: base.grays.light
  },
  palePurple: {
    light: base.palePurple
  },
  almostWhite: {
    light: base.almostWhite
  },
  darkUIPurple: {
    light: base.darkUIPurple
  },
  deepPurple: {
    light: base.deepPurple
  },
  deepUIBlack: {
    light: base.deepUIBlack
  },
  darkUINav: {
    light: base.darkUINav
  },
  fireWallYellow: {
    light: base.fireWallYellow
  },
  // higher number = lighter gray
  gray1: {
    light: base.grayish[1]
  },
  gray2: {
    light: base.grayish[2]
  },
  gray3: {
    light: base.grayish[3]
  },
  gray4: {
    light: base.grayish[4]
  },
  // all <Text> defaults to this color https://v2.grommet.io/text#global.colors.text
  text: {
    light: base.text,
    dark: base.white
  },
  border: {
    light: base.black
  }
}
