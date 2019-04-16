import React from 'react'
import withStyles from 'react-jss'
import toPascalCase from 'to-pascal-case'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 300px',
      backgroundColor: theme.palette.primary.darken(2.5)
    },
    title: {
      color: theme.palette.background.main,
      display: 'flex',
      paddingTop: '40px',
      paddingLeft: '15px'
    },
    titleHeader: {},
    publishListContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '40px'
    },
    publishList: {
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'column'
    },
    publishListItem: {
      color: theme.palette.background.main,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      flex: '1 0 50px',
      alignItems: 'center',
      paddingLeft: '30px',
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      },
      '&:active': {
        backgroundColor: theme.palette.primary.darken(1.5)
      }
    }
  }
}

const SideBar = ({ classes, publishTypes, handlePublishPageChange }) => {
  return <div id='sidebar' className={classes.root}>
    <div className={classes.title}>
      <h1 className={classes.titleHeader}>OIP Publisher</h1>
    </div>
    <div className={classes.publishListContainer}>
      <ul className={classes.publishList}>
        {publishTypes.map((type, i) => {
          return <li
            className={classes.publishListItem}
            key={i}
            onClick={() => handlePublishPageChange(type)}
          >
            <h3>{toPascalCase(type)}</h3>
          </li>
        })}
      </ul>
    </div>
  </div>
}

export default withStyles(styles)(SideBar)
