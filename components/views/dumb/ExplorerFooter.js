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
  classes,
  records,
  templates,
  activeSelection

}) => {
  return <div className={classes.root}>

  </div>
}

ExplorerFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  records: PropTypes.object,
  activeSelection: PropTypes.string,
  templates: PropTypes.object
}

export default withStyles(styles)(ExplorerFooter)
