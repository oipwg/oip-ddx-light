import { createUseStyles } from 'react-jss'

export default createUseStyles(theme => {
  return {
    root: {
      height: '100%',
      width: '100%'
    },
    article: {
      padding: '20px 80px',
      overflow: 'auto'
    },
    title: {
      fontWeight: 500,
      marginBottom: 8
    },
    body: {
      position: 'relative'
    },
    preview: {
      pointerEvent: 'none',
      userSelect: 'none',
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundImage: 'linear-gradient(' +
        'to bottom, ' +
        'rgba(255,255,255, 0), ' +
        'rgba(255,255,255, 1) 90%)'
    }
  }
})
