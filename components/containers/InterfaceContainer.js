import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Interface from '../views/wrappers/Interface'

const InterfaceContainer = ({
  activePage,
  name,
  openPublisherModal
}) => {
  return <Interface
    activePage={activePage}
    name={name}
    openPublisherModal={openPublisherModal}
  />
}
InterfaceContainer.propTypes = {
  openPublisherModal: PropTypes.bool.isRequired
}

function mapStateToProps (state) {
  return {
    activePage: state.Interface.activePage,
    openPublisherModal: state.Publisher.openPublisherModal
  }
}

export default connect(mapStateToProps)(InterfaceContainer)
