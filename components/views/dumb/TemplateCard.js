import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    height: '275px',
    width: '200px',
    margin: [5, 10],
    boxShadow: theme.shadows[1],
    borderRadius: '3px',
    boxSizing: 'border-box'
  }
})

const TemplateCard = ({ classes, record, meta }) => {
  return <div className={classes.root}>

  </div>
}

TemplateCard.propTypes = {
  classes: PropTypes.object.isRequired,
  template: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default withStyles(styles)(TemplateCard)
