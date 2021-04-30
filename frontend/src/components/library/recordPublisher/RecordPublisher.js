import React, {useState} from 'react'
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
  publishTemplates,
  hidePrivateKeyInput,
  wif
}) => {

  const [feedback, setFeedback] = useState(null)


  function handleOnSuccess (txid) {
    console.log('Success: ', txid)
    setFeedback(`Success: ${txid}`)

  }

  function handleOnError (err) {
    console.error({err})
    setFeedback(`Error: ${err.message}`)

  }

  // console.log('pub temps', publishTemplates)

  return <div className={classes.root}>
    <RecordProtoJSS
      templates={publishTemplates}
      onSuccess={handleOnSuccess}
      onError={handleOnError}
      feedback={feedback}
      hidePrivateKeyInput={hidePrivateKeyInput}
      wif={wif}
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
