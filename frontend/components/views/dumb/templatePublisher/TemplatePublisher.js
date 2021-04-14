import React, { useState } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { RecordTemplate } from 'oip-react'
import { useSelector } from 'react-redux'
import getFloWif from '../../../../helpers-functions/getWif'

const styles = {
  root: {
    display: 'flex',
    flex: 1
  }
}

const RecordTemplateStyles = ({
  recordTemplateRoot: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px'

  }
})
const RecordTemplateJSS = withStyles(RecordTemplateStyles)(RecordTemplate)

const TemplatePublisher = ({
  classes,
  extendTemplateIds,
  withPublisher = true
}) => {

  const hdmwWallet = useSelector(state => state.Wallet.hdmwWallet)
  const wif = getFloWif(hdmwWallet)

  const user = useSelector(state => state.User.user)
  console.log("user: ", user);
  console.log("wif: ", wif);

  const [feedback, setFeedback] = useState(null)

  function handleOnSuccess (txid) {
    console.log('Success: ', txid)
    setFeedback(`Success: ${txid}`)
  }

  function handleOnError (err) {
    setFeedback(`Error: ${err.message}`)
    console.error(err)
  }

  return <div className={classes.root}>
    <RecordTemplateJSS
      onSuccess={handleOnSuccess}
      onError={handleOnError}
      _extends={extendTemplateIds}
      withPublisher={withPublisher}
      feedback={feedback}
      hidePrivateKeyInput={!!wif}
      wif={wif}
    />
  </div>
}

TemplatePublisher.propTypes = {
  classes: PropTypes.object.isRequired,
  withPublisher: PropTypes.bool,
  extendTemplateIds: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ])
}

export default withStyles(styles)(TemplatePublisher)
