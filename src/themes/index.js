import { base, colors } from './colors'
import { radius } from './constants'

// https://v2.grommet.io/button#theme
const button = {
  default: {
    background: {
      color: {
        light: 'primaryPurple',
        dark: 'primaryPurple'
      }
    },
    color: 'white',
    text: {
      medium: {
        size: '2px'
      }
    },
    padding: {
      vertical: '12px',
      horizontal: '46px'
    },
    border: {
      radius: '10px'
    }
  },
  primary: {
    active: {
      background: {
        color: {
          light: 'primaryPurple',
          dark: 'primaryPurple'
        }
      },
      border: {
        radius: '2px'
      },
      color: 'white'
    }
  }
  // size: {  // tier sized buttons
  //   medium: {
  //     border: {
  //       radius: '6px'
  //     }
  //   }
  // }
}

const fonts = {
  // sub-subtext (0px - 16px on wireframes)
  xsmall: {
    size: '10px',
    height: '18px',
    maxWidth: '331px'
  },
  // subtext (16px - 20px on wireframes)
  small: {
    size: '12px',
    height: '19px',
    maxWidth: '432px'
  },
  // regular text (21px - 24px on wireframes)
  medium: {
    size: '14px',
    height: '21px',
    maxWidth: '634px'
  },
  // subheadings (24px - 30px on wireframes)
  large: {
    size: '16px',
    height: '25px',
    maxWidth: '634px'
  },
  // headings (30px - 40px on wireframes)
  xlarge: {
    size: '18px',
    height: '27px',
    maxWidth: '835px'
  },
  // jumbotron heading (40px + on wireframes)
  xxlarge: {
    size: '24px',
    height: '31px',
    maxWidth: '1238px'
  }
}
// sizes for gaps, margins, pad
const edgeSize = {
  none: '0px',
  hair: '1px',
  xxxsmall: '3px',
  xxsmall: '6px',
  xsmall: '12px',
  small: '24px',
  medium: '32px',
  large: '48px',
  xlarge: '96px',
  xxlarge: '144px',
  responsiveBreakpoint: 'hair'
}

const anchor = {
  color: {
    light: base.grays.dark,
    dark: base.almostWhite
  }
}

const box = {
  responsiveBreakpoint: 'small' // disable box from switching edgeSizes on certain breakopoint
}

const accordion = {
  panel: {
    border: {
      side: 'bottom',
      size: '0.8px'
    }
  },
  border: {
    style: 'hidden',
    size: '0.8px',
    side: 'bottom'
  }
}

export { base, radius, fonts }

export default {
  name: 'okyo',
  defaultMode: 'light',
  global: {
    focus: {
      border: {
        color: base.secondaryBtnPurple
      }
    },
    font: {
      family: 'Gordita', // loaded in src/typography.css
      size: '14px'
    },
    colors,
    edgeSize,
    breakpoints: {
      borderSize: 0,
      small: {
        value: 768,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '4px',
          large: '6px',
          xlarge: '12px',
          xxlarge: '15px'
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '3px',
          small: '6px',
          medium: '12px',
          large: '24px',
          xlarge: '48px',
          xxlarge: '52px'
        },
        size: {
          xxsmall: '24px',
          xsmall: '48px',
          small: '96px',
          medium: '192px',
          large: '384px',
          xlarge: '768px',
          xxlarge: '850px',
          full: '100%'
        }
      },
      medium: {
        value: 1024
      },
      large: {
        value: 10000
      }
    }
  },
  button,
  text: fonts,
  box,
  anchor,
  accordion,
  scale: 1
}
