import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { RecordProtoContainer } from 'oip-react'

const styles = {
  root: {
    display: 'flex',
    flex: 1
  }
}

const RecordProtoStyles = ({
  rpcRoot: {
    marginTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})
const RecordProtoJSS = withStyles(RecordProtoStyles)(RecordProtoContainer)

const RecordPublisher = ({
  classes,
  publishTemplates
}) => {
  function handleOnSuccess (txid) {
    console.log('Success: ', txid)
  }

  function handleOnError (err) {
    console.error(err)
  }

  console.log('pub temps', publishTemplates)

  return <div className={classes.root}>
    <RecordProtoJSS
      templates={publishTemplates}
      onSuccess={handleOnSuccess}
      onError={handleOnError}
    />
  </div>
}

RecordPublisher.propTypes = {
  classes: PropTypes.object.isRequired,
  publishTemplates: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.arrayOf(PropTypes.object).isRequired
  ])
}

export default withStyles(styles)(RecordPublisher)
