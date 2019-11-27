import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: [1, 0],
    position: 'relative'
  },
  selectActionsContainer: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
    right: 0,
    padding: 30,
    zIndex: 200
  },
  buttonBase: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: [12, 12],
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 10,
    cursor: 'pointer',
    boxShadow: theme.shadows[1],
    '&:focus': {
      outline: 0
    }
  },
  extendTemplateButton: {
    extend: 'buttonBase',
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.secondary.main
    }
  },
  publishRecordButton: {
    extend: 'buttonBase',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.primary.main
    }
  }
})

const ExplorerFooter = ({
  classes,
  selectedTemplates,
  handlePublishRecordWithTemplates,
  handleExtendTemplates
}) => {
  const displaySelectActions = Object.keys(selectedTemplates).length > 0
  return <div className={classes.root}>
    {displaySelectActions ? <SelectActions
      classes={classes}
      handlePublishRecordWithTemplates={handlePublishRecordWithTemplates}
      handleExtendTemplates={handleExtendTemplates}
    /> : null}
  </div>
}

const SelectActions = ({
  classes,
  handlePublishRecordWithTemplates,
  handleExtendTemplates
}) => {
  return <div className={classes.selectActionsContainer}>
    <button
      className={classes.extendTemplateButton}
      onClick={handleExtendTemplates}
    >Extend Templates
    </button>
    <button
      className={classes.publishRecordButton}
      onClick={handlePublishRecordWithTemplates}
    >Publish Record
    </button>
  </div>
}

ExplorerFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  records: PropTypes.object,
  activeSelection: PropTypes.string,
  templates: PropTypes.object
}

export default withStyles(styles)(ExplorerFooter)
