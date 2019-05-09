import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Interface from '../views/wrappers/Interface'
import { setActivePage } from '../../redux/actions/Interface/creators'

const InterfaceContainer = ({
  pages,
  activePage,
  setActivePage,
  latestRecords,
  latestTemplates
}) => {
  return <Interface
    pages={pages}
    activePage={activePage}
    setActivePage={setActivePage}
    latestRecords={latestRecords}
    latestTemplates={latestTemplates}
  />
}
InterfaceContainer.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  latestRecords: PropTypes.object,
  latestTemplates: PropTypes.object
}

function mapStateToProps (state) {
  return {
    pages: state.Interface.pages,
    activePage: state.Interface.activePage
  }
}
const mapDispatchToProps = {
  setActivePage
}
export default connect(mapStateToProps, mapDispatchToProps)(InterfaceContainer)
