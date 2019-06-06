import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {}
})

const Record = ({
  classes
}) => {
  return <div className={classes.root}>
    
  </div>
}

Record.getInitialProps = async ({ query }) => {
  console.log('TXID', query.txid)
  return {}
}

Record.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Record)
