import { createUseStyles } from 'react-jss'

export default createUseStyles(theme => {
  return {
    root: {
      position: 'relative'
    },
    image: {
      width: 800,
      zIndex: -1,
    },
    titleContainer: {
      backgroundColor: 'black'
    },
    title: {
      position: 'absolute',
      color: 'white',
      zIndex: 100,
      whiteSpace: 'normal',
      width: 600,
      marginTop: 50,
      backgroundColor: 'black'
    },
    summaryContainer: {
      backgroundColor: 'black'
    },
    summary: {
      position: 'absolute',
      backgroundColor: 'black',
      color: 'white',
      zIndex: 100,
      whiteSpace: 'normal',
      marginTop: 150,
      width: 600
    }
  }
})
