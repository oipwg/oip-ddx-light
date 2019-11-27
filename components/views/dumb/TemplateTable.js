import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1'
  },
  templateContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 50px',
    borderBottom: `1px solid lightgrey`,
    alignItems: 'center',
    fontSize: 12
  },
  friendlyNameSection: {
    display: 'flex',
    flex: 1
  },
  nameSection: {
    display: 'flex',
    flex: 1
  },
  identifierSection: {
    display: 'flex',
    flex: 1
  },
  descriptionSection: {
    display: 'flex',
    flex: 2
  },
  sectionTitle: {
    fontWeight: 'bold'
  },
  templateSection: {
    overflow: 'hidden',
    wordBreak: 'break-word'
  }
})

const TemplateTable = ({
  classes,
  latestTemplates,
  currentTemplate
}) => {
  let { results } = latestTemplates || {}
  if (!results) {
    results = []
  }
  let templates = []
  for (let result of results) {
    const { template } = result
    templates.push(template)
  }
  return <div className={classes.root}>
    <div id={'infoHeader'} className={classes.templateContainerRow}>
      <div className={classes.friendlyNameSection}>
        <span className={classes.sectionTitle}>Friendly Name</span>
      </div>
      <div className={classes.nameSection}>
        <span className={classes.sectionTitle}>Name</span>
      </div>
      <div className={classes.identifierSection}>
        <span className={classes.sectionTitle}>Identifier</span>
      </div>
      <div className={classes.descriptionSection}>
        <span className={classes.sectionTitle}>Description</span>
      </div>
    </div>
    {templates.map((template, i) => {
      const { friendly_name: friendlyName, description, name, identifier } = template
      return <div
        className={classes.templateContainerRow}
      >
        <div className={classNames(classes.friendlyNameSection, classes.templateSection)}>
          <span>{friendlyName}</span>
        </div>
        <div className={classNames(classes.nameSection, classes.templateSection)}>
          <span>{name}</span>
        </div>
        <div className={classNames(classes.identifierSection, classes.templateSection)}>
          <span>{identifier}</span>
        </div>
        <div className={classNames(classes.descriptionSection, classes.templateSection)}>
          <span>{description}</span>
        </div>
      </div>
    })}
  </div>
}

TemplateTable.propTypes = {
  latestTemplates: PropTypes.object,
  currentTemplate: PropTypes.object
}

export default withStyles(styles)(TemplateTable)
