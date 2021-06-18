const customSpacing = {}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) customSpacing[`${i}px`] = `${i}px`
}

module.exports = {
  prefix: 'tw-',
  theme: {
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1700px',
    },
    extend: {
      width: {
        ...customSpacing,
        '3/8': '37.5%',
        '5/8': '62.5%',
        '49%': '49%',
        '560px': '560px',
      },
      height: {
        ...customSpacing,
      },
      margin: {
        ...customSpacing,
        '5%': '5%',
      },
      fontSize: {
        ...customSpacing,
        '13px': '13px',
      },
      zIndex: {
        10000: 10000,
      },
      padding: {
        ...customSpacing,
      },
      inset: {
        ...customSpacing,
      },
      flexGrow: {
        2: '2',
      },
      minWidth: {
        ...customSpacing,
        '200px': '200px',
      },
      borderRadius: {
        '20px': '20px',
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'responsive'],
    justifyContent: ['responsive'],
    borderStyle: ['responsive'],
    borderColor: ['hover'],
    display: ['responsive'],
    fontSize: ['responsive'],
    fontWeight: ['responsive'],
    letterSpacing: ['responsive'],
    margin: ['responsive'],
    padding: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    position: ['responsive'],
    width: ['responsive'],
    alignItems: ['responsive'],
    inset: ['responsive'],
    pointerEvents: ['responsive'],
    height: ['responsive'],
    borderWidth: ['responsive', 'hover', 'focus'],
    flexDirection: ['responsive'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    boxShadow: ['responsive'],
    wordBreak: ['responsive'],
    overflow: ['responsive'],
    whitespace: ['responsive'],
  },
  corePlugins: {
    float: false,
    container: false,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  exposeConfig: true,
}
