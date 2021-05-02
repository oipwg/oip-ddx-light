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
    }
  }
})
