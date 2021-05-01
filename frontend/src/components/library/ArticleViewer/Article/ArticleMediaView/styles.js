import { createUseStyles } from 'react-jss'

export default createUseStyles(theme => {
  return {
    root: {
      margin: '20px 0'
    },
    body: {

    },
    caption: {
      color: '#ACACAC',
      paddingLeft: 2,
      fontSize: 12,
      fontWeight: 'bold',
      letterSpacing: '0.02em'
    }
  }
}, { name: 'ArticleMediaView' })
