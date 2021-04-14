import useWindowSize from './useWindowSize'

const DEFAULT_BREAKPOINTS = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const xs = 'xs'
const sm = 'sm'
const md = 'md'
const lg = 'lg'
const xl = 'xl'

const getBP = (innerWidth, bp) => {
  if (innerWidth < bp[sm]) {
    return xs
  } else if (innerWidth < bp[md]) {
    return sm
  } else if (innerWidth < bp[lg]) {
    return md
  } else if (innerWidth < bp[xl]) {
    return lg
  } else {
    return xl
  }
}

export default function useBreakPoints (breakpoints) {
  const bp = breakpoints || DEFAULT_BREAKPOINTS

  const windowSize = useWindowSize()
  if (windowSize) {
    const { innerWidth } = windowSize
    return getBP(innerWidth, bp)
  }
}
