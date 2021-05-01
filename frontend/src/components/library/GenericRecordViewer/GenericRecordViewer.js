import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '& h1': {
      textAlign: 'center'
    }
  }
})

const GenericRecordViewer = ({
  classes
}) => {
  return <div className={classes.root}>
    <h1>No known data templates founds</h1>
  </div>
}

GenericRecordViewer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GenericRecordViewer)
