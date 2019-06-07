import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {}
})

const VideoViewer = ({
  classes,
  recordPayload
}) => {
  return <div className={classes.root}>

  </div>
}

VideoViewer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VideoViewer)
