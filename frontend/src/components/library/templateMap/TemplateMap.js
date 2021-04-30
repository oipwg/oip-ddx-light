import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import TemplateCard from '../templateCard/TemplateCard'
import isObjEmpty from '../../../../util/isObjEmpty'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: [0, 20],
    flex: 1
  },
  [`@media (max-width: ${theme.breakpoints['sm']}px)`]: {
    root: {
      justifyContent: 'center'
    }
  }
})

const TemplateMap = ({
  classes,
  templates,
  publishRecord,
  publishTemplate,
  extendTemplates,
  handleSelectTemplate,
  selectedTemplates
}) => {
  let templateData = []
  if (!isObjEmpty(templates)) {
    templateData = [...templates.results]
  }
  return <div className={classes.root}>
    {templateData.map(payload => {
      if (!payload.template) {
        console.error(`missing template data for following payload: `, payload)
        return null
      }
      return <TemplateCard
        template={payload.template}
        meta={payload.meta}
        fileDescriptor={payload.file_descriptor_set}
        key={payload.template.name}
        publishRecord={publishRecord}
        publishTemplate={publishTemplate}
        extendTemplates={extendTemplates}
        handleSelectTemplate={handleSelectTemplate}
        selectedTemplates={selectedTemplates}
      />
    })}
  </div>
}

TemplateMap.propTypes = {
  classes: PropTypes.object.isRequired,
  templates: PropTypes.object,
  publishRecord: PropTypes.func.isRequired,
  publishTemplate: PropTypes.func.isRequired,
  extendTemplates: PropTypes.func.isRequired
}

export default withStyles(styles)(TemplateMap)
