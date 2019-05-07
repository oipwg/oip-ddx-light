import React  from 'react'
import withStyles from 'react-jss'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 300px',
      backgroundColor: theme.palette.primary.darken(2.5),
      boxShadow: '2px -2px 4px',
      zIndex: 300
    },
    titleSpace: {
      color: theme.palette.background.main,
      margin: 30,
      alignSelf: 'center',
      flexShrink: 0
    },
    titleHeader: {
      fontSize: '3em',
      fontWeight: 'bold'
    },
    tableOfContents: {
      display: 'flex',
      flexShrink: 0,
      flexGrow: 1,
      color: '#bdc3c7',
      padding: '20px 30px',
      flexDirection: 'column'
    },
    tableHeader: {
      fontWeight: 'bold',
      padding: '5px 0px',
      cursor: 'pointer',
      fontSize: '16px',
      '&:hover': {
        color: theme.palette.background.main
      }
    },
    recordListItem: {
      marginLeft: '20px',
      marginBottom: '5px',
      '&:hover': {
        color: theme.palette.background.main,
        cursor: 'pointer'
      }
    }
  }
}

const EXPLORER = 'EXPLORER'
const PUBLISH = 'PUBLISH'
const WALLET = 'WALLET'

const SideBar = ({
  classes,
  recordTypes,
  activeRecord,
  activePage,
  handleRecordTypeChange,
  handleActivePageChange
}) => {
  function activePageStyle (page) {
    if (page === activePage) {
      return {
        color: 'white'
      }
    }
  }

  function activeRecordStyle (record) {
    if (record === activeRecord) {
      return {
        color: 'white'
      }
    }
  }

  function handlePublisherRecordChange (record) {
    if (activePage !== PUBLISH) {
      handleActivePageChange(PUBLISH)
    }
    handleRecordTypeChange(record)
  }

  return <div id='sidebar' className={classes.root}>
    <div className={classes.titleSpace}>
      <span className={classes.titleHeader}>OIP</span>
    </div>
    <nav className={classes.tableOfContents}>
      <a
        className={classes.tableHeader}
        style={activePageStyle(EXPLORER)}
        onClick={() => handleActivePageChange(EXPLORER)}
      > Explorer</a>
      <a
        className={classes.tableHeader}
        style={activePageStyle(PUBLISH)}
        onClick={() => handleActivePageChange(PUBLISH)}
      >Publisher</a>
      {recordTypes.map((record, i) => {
        return <a
          key={i}
          className={classes.recordListItem}
          style={activeRecordStyle(record)}
          onClick={() => handlePublisherRecordChange(record)}
        >
          {record}
        </a>
      })}
      <a
        className={classes.tableHeader}
        style={activePageStyle(WALLET)}
        onClick={() => handleActivePageChange(WALLET)}
      >Wallet</a>
    </nav>

  </div>
}

export default withStyles(styles)(SideBar)
