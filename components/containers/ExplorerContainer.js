import React from 'react'
import { connect } from 'react-redux'
import Explorer from '../views/wrappers/Explorer'

const ExplorerContainer = ({
  latestRecords,
  latestTemplates
}) => {
  return <Explorer
    latestRecords={latestRecords}
    latestTemplates={latestTemplates}
  />
}

function mapStateToProps (state) {
  return {
    latestRecords: state.Explorer.latestRecords,
    latestTemplates: state.Explorer.latestTemplates
  }
}
export default connect(mapStateToProps)(ExplorerContainer)
