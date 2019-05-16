import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {}
})

const Publisher = ({
  classes
}) => {
  return <div className={classes.root}>
  </div>
}

Publisher.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Publisher)
