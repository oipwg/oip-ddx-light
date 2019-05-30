import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Interface from '../views/wrappers/Interface'
import { setActivePage } from '../../redux/actions/Interface/creators'

const InterfaceContainer = ({
  pages,
  activePage,
  setActivePage,
  name,
  openPublisherModal,
  publishData
}) => {
  return <Interface
    pages={pages}
    activePage={activePage}
    setActivePage={setActivePage}
    name={name}
    openPublisherModal={openPublisherModal}
    publishData={publishData}
  />
}
InterfaceContainer.propTypes = {
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  openPublisherModal: PropTypes.bool.isRequired,
  publishData: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    pages: state.Interface.pages,
    activePage: state.Interface.activePage,
    openPublisherModal: state.Publisher.openPublisherModal,
    publishData: state.Publisher.publishData
  }
}
const mapDispatchToProps = {
  setActivePage
}
export default connect(mapStateToProps, mapDispatchToProps)(InterfaceContainer)
