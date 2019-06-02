import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { RecordTemplate } from 'oip-react'

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
  extendTemplateIds
}) => {
  function handleOnSuccess (txid) {
    console.log('Success: ', txid)
  }

  function handleOnError (err) {
    console.error(err)
  }

  return <div className={classes.root}>
    <RecordTemplateJSS
      onSuccess={handleOnSuccess}
      onError={handleOnError}
      _extends={extendTemplateIds}
    />
  </div>
}

TemplatePublisher.propTypes = {
  classes: PropTypes.object.isRequired,
  extendTemplateIds: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ])
}

export default withStyles(styles)(TemplatePublisher)
