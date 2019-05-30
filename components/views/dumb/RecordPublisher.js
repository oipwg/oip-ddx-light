import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { RecordProto } from 'oip-react'

const styles = {
  root: {
    display: 'flex',
    flex: 1
  }
}

const RecordProtoStyles = ({
  recordRecordRoot: { marginTop: '30px' }
})
const RecordProtoJSS = withStyles(RecordProtoStyles)(RecordProto)

const RecordPublisher = ({
  classes,
  publishData
}) => {
  const { descriptor, templateName } = publishData

  function handleOnSuccess (txid) {
    console.log('Success: ', txid)
  }

  function handleOnError (err) {
    console.error(err)
  }

  return <div className={classes.root}>
    <RecordProtoJSS
      descriptor={descriptor}
      templateName={templateName}
      onSuccess={handleOnSuccess}
      onError={handleOnError}
    />
  </div>
}

RecordPublisher.propTypes = {
  classes: PropTypes.object.isRequired,
  publishData: PropTypes.object
}

export default withStyles(styles)(RecordPublisher)
