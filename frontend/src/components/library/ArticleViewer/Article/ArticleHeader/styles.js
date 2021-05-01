import { createUseStyles } from 'react-jss'

export default createUseStyles(theme => {
  return {
    title: {},
    subtitle: {
      color: '#ACACAC',
      paddingLeft: 2,
      fontSize: 12,
      fontWeight: 'bold',
      letterSpacing: '0.02em'
    }
  }
}, { name: 'ArticleHeader' })
