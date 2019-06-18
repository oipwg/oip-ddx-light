import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { GoRepoForked, GoCloudUpload } from 'react-icons/go'
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md'

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
    boxSizing: 'border-box',
    position: 'relative'
  },
  templateSelector: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 100,
    '& > span': {
      cursor: 'pointer'
    }
  },
  templateField: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden'
  },
  fieldName: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 12,
    color: 'grey'
  },
  fieldData: {
    margin: 0,
    fontSize: 12,
    whiteSpace: 'pre',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  templateActions: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > span': {
      cursor: 'pointer'
    }
  }
})

const TemplateCard = ({
  classes,
  template,
  publishRecord,
  publishTemplate,
  extendTemplates,
  key,
  handleSelectTemplate,
  selectedTemplates = {}
}) => {
  function handleTemplateExtend () {
    publishTemplate()
    extendTemplates(template.identifier)
  }

  function handleRecordPublish () {
    publishRecord(template)
  }
  function onSelectTemplate () {
    handleSelectTemplate({ id: template.name, template })
  }

  const selected = Object.keys(selectedTemplates).includes(template.name)
  return <div className={classes.root} key={key}>
    <div className={classes.templateSelector}>
      <Selector
        onTemplateSelect={onSelectTemplate}
        selected={selected}
      />
    </div>
    <div className={classes.templateField}>
      <span className={classes.fieldName}>
        Friendly Name
      </span>
      <p className={classes.fieldData}>{template.friendly_name}</p>
    </div>

    <div className={classes.templateField}>
      <span className={classes.fieldName}>
        Name
      </span>
      <p className={classes.fieldData}>{template.name}</p>
    </div>

    <div className={classes.templateField}>
      <span className={classes.fieldName}>
        Identifier
      </span>
      <p className={classes.fieldData}>{template.identifier}</p>
    </div>

    <div className={classes.templateField}>
      <span className={classes.fieldName}>
        Description
      </span>
      <p className={classes.fieldData}>{template.description}</p>
    </div>

    <div className={classes.templateActions}>
      <span onClick={handleTemplateExtend}><GoRepoForked /></span>
      <span onClick={handleRecordPublish}><GoCloudUpload /></span>
    </div>
  </div>
}

const Selector = ({
  selected,
  onTemplateSelect
}) => {
  return <>
    {selected ? <span onClick={onTemplateSelect}> <MdRadioButtonChecked /></span> : <span
      onClick={onTemplateSelect}
    >
      <MdRadioButtonUnchecked />
    </span>}
    </>
}

TemplateCard.propTypes = {
  classes: PropTypes.object.isRequired,
  template: PropTypes.object.isRequired,
  meta: PropTypes.object,
  publishRecord: PropTypes.func.isRequired,
  publishTemplate: PropTypes.func.isRequired,
  extendTemplates: PropTypes.func.isRequired
}

export default withStyles(styles)(TemplateCard)
