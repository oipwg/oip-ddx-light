import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: [1, 0]
  }
})

const ExplorerFooter = ({
  classes
}) => {
  return <div className={classes.root}>

  </div>
}

ExplorerFooter.propTypes = {
  displayRecords: PropTypes.object,
  displayTemplates: PropTypes.object
}

export default withStyles(styles)(ExplorerFooter)
