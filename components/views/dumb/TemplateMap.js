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
  }
})

const TemplateMap = ({
  classes,
  templates
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
        key={i}
      />
    })}
  </div>
}

TemplateMap.propTypes = {
  classes: PropTypes.object.isRequired,
  templates: PropTypes.object
}

export default withStyles(styles)(TemplateMap)
