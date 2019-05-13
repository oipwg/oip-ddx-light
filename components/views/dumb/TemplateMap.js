import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import TemplateCard from './TemplateCard'
import isObjEmpty from '../../../util/isObjEmpty'

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
  forkTemplate
}) => {
  let templateData = []
  if (!isObjEmpty(templates)) {
    templateData = [...templates.results]
  }
  return <div className={classes.root}>
    {templateData.map((payload, i) => {
      return <TemplateCard
        template={payload.template}
        meta={payload.meta}
        fileDescriptor={payload.file_descriptor_set}
        key={i}
        publishRecord={publishRecord}
        publishTemplate={publishTemplate}
        forkTemplate={forkTemplate}
      />
    })}
  </div>
}

TemplateMap.propTypes = {
  classes: PropTypes.object.isRequired,
  templates: PropTypes.object,
  publishRecord: PropTypes.func.isRequired,
  publishTemplate: PropTypes.func.isRequired,
  forkTemplate: PropTypes.func.isRequired
}

export default withStyles(styles)(TemplateMap)
