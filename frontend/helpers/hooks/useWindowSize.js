import { useEffect, useState } from 'react'

const useWindowSize = ({ breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}, initialWidth = Infinity, initialHeight = Infinity }) => {
  const isClient = typeof window === 'object'
  const [state, setState] = useState({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight
  })

  useEffect(() => {
    if (isClient) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
      window.addEventListener('resize', handler)
      return () => window.removeEventListener('resize', handler)
    } else {
      return undefined
    }
  }, [])
  const { height, width } = state

  let breakpoint
  if (width < breakpoints['sm']) {
    breakpoint = 'xs'
  } else if (width < breakpoints['md'] && width >= breakpoints['sm']) {
    breakpoint = 'sm'
  } else if (width < breakpoints['lg'] && width >= breakpoints['md']) {
    breakpoint = 'md'
  } else if (width < breakpoints['xl'] && width >= breakpoints['lg']) {
    breakpoint = 'lg'
  } else breakpoint = 'xl'

  return { height, width, breakpoint }
}

export default useWindowSize
