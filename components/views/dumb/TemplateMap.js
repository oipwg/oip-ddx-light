import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import TemplateCard from './TemplateCard'
import isObjEmpty from '../../../util/isObjEmpty'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  }
})

const TemplateMap = ({
  classes,
  displayTemplates
}) => {
  let templateData = []
  if (!isObjEmpty(displayTemplates)) {
    templateData = [...displayTemplates.results]
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
  displayTemplates: PropTypes.object
}

export default withStyles(styles)(TemplateMap)
