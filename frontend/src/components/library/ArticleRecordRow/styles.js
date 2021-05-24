import { createUseStyles } from 'react-jss'

export default createUseStyles(theme => {
  return {
    root: {
      position: 'relative',
      width: 600
    },
    image: {
      width: '100%',
      zIndex: -1,
      borderRadius: 6
    },
    titleContainer: {
      width: 400
    },
    title: {
      position: 'absolute',
      color: 'white',
      zIndex: 100,
      whiteSpace: 'normal',
      width: '65%',
      marginTop: 30,
      backgroundColor: 'rgba(50, 50, 50, 0.85)',
      borderRadius: 5,
      padding: 10,
      margin: 10
    },
    summaryContainer: {
      width: 400
    },
    summary: {
      position: 'absolute',
      color: 'white',
      zIndex: 100,
      whiteSpace: 'normal',
      marginTop: 150,
      width: '80%',
      backgroundColor: 'rgba(50, 50, 50, 0.85)',
      borderRadius: 6,
      padding: 10,
      margin: 10
    }
  }
})
