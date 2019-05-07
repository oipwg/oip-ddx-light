import React from 'react'
import withStyles from 'react-jss'
import toPascalCase from 'to-pascal-case'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 60px',
    backgroundColor: 'white',
    boxShadow: theme.shadows[1],
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottom: '1px solid lightgrey',
    padding: [0, 30],
    color: theme.palette.text.main,
    overflowX: 'auto',
    '& span': {
      cursor: 'pointer'
    },
    '&::-webkit-scrollbar': {
      display: 'none',
      height: '4px',
      borderRadius: '10px',
      color: 'red',
      backgroundColor: 'white'
    },
    '&::-webkit-scrollbar-thumb': `
      background-color: darkgrey;
      outline: 1px solid slategrey;
    `
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 120px',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
  }
})

const RecordNav = ({ classes, recordTypes, activeRecordType, handleRecordTypeChange }) => {
  function activeStyle (type) {
    if (type === activeRecordType) {
      return {
        fontWeight: 'bold'
      }
    }
  }
  return <div className={classes.root}>
    {recordTypes.map((type, i) => {
      return <div
        className={classes.itemContainer}
        key={i}
      >
        <span
          onClick={() => handleRecordTypeChange(type)}
          style={activeStyle(type)}
        >{toPascalCase(type)}</span>
      </div>
    })}
  </div>
}

export default withStyles(styles)(RecordNav)
