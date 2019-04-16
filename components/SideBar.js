import React from 'react'
import withStyles from 'react-jss'
import toPascalCase from 'to-pascal-case'
import { Explore, AccountBalanceWalletOutlined, Publish } from '@material-ui/icons'
import classNames from 'classnames'

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
      paddingLeft: '15px',
      flex: '0 0 auto'
    },
    titleHeader: {},
    sideBarNavContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '40px',
      flex: '1 0 auto',
      backgroundColor: theme.palette.primary.darken(2.5)
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
      flex: '1 0 30px',
      alignItems: 'center',
      paddingLeft: '70px',
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      },
      '&:active': {
        backgroundColor: theme.palette.primary.darken(1.5)
      }
    },
    navLink: {
      cursor: 'pointer',
      '& svg': {
        marginLeft: 15
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      }
    },
    navItemSingle: {
      paddingLeft: '30px',
      color: theme.palette.background.main,
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: [7, 0]
    },
    seperator: {
      margin: [30, 25, 10],
      borderBottom: '1px solid white'
    }
  }
}

const SideBar = ({ classes, publishTypes, handlePublishPageChange }) => {
  return <div id='sidebar' className={classes.root}>
    <div className={classes.title}>
      <h1 className={classes.titleHeader}>OIP Publisher</h1>
    </div>
    <div className={classes.sideBarNavContainer}>
      <h2
        id='explorer-icon'
        className={classNames(classes.navLink, classes.navItemSingle)}
      >
        Explorer <Explore />
      </h2>
      <h2
        className={classNames(classes.navLink, classes.navItemSingle)}
        id='publish-icon'
      >
        Publish <Publish />
      </h2>
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
      <div className={classes.seperator} />
      <h2
        className={classNames(classes.navLink, classes.navItemSingle)}
        id={'wallet-icon'}
      >
        Wallet <AccountBalanceWalletOutlined />
      </h2>
    </div>
  </div>
}

export default withStyles(styles)(SideBar)
