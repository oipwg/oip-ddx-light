import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import TemplateMap from './TemplateMap'
import RecordMap from './RecordMap'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: 10,
  }
})

const ExplorerBody = ({
  classes,
  displayRecords,
  displayTemplates,
  activeSelection
}) => {
  let records = activeSelection === 'Records'
  let templates = activeSelection === 'Templates'
  return <div className={classes.root}>
    {records && <RecordMap
      displayRecords={displayRecords}
    />}
    {templates && <TemplateMap
      displayTemplates={displayTemplates}
    />}
  </div>
}

ExplorerBody.propTypes = {
  displayRecords: PropTypes.object.isRequired,
  displayTemplates: PropTypes.object.isRequired,
  activeSelection: PropTypes.string
}

export default withStyles(styles)(ExplorerBody)
