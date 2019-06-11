import config from '../config.js'

export const themeOptions = {
  palettes: {
    'light': {
      'primary': config.primaryColor,
      'secondary': config.secondaryColor,
      'tertiary': '#7a89ac',
      'background': '#ffffff',
      'text': '#000000',
      'success': '#339757',
      'warning': '#fcaa32',
      'danger': '#FF0000',
      'info': '#5d5d66'
    },
    'dark': {
      'primary': '#3688aa',
      'secondary': '#c45249',
      'tertiary': '#4f6391',
      'background': '#000000',
      'text': '#ffffff',
      'success': '#339757',
      'warning': '#ee9a26',
      'danger': '#FF0000',
      'info': '#74748d'
    }
  }
}
