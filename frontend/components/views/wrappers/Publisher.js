import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import TemplatePublisher from '../dumb/templatePublisher/TemplatePublisher'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: 1,
    marginTop: 52,
    overflowY: 'auto'
  }
})

const Publisher = ({
  classes
}) => {
  return <div className={classes.root}>
    <TemplatePublisher />
  </div>
}

Publisher.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Publisher)
