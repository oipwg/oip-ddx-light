import { useState, useEffect } from 'react'

function getSize () {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  }
}

export default function useWindowSize () {
  let [windowSize, setWindowSize] = useState(undefined)

  function handleResize () {
    if (process.browser) {
      setWindowSize(getSize())
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
