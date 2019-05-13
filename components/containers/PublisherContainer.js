import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { closePublisherModal } from '../../redux/actions/Publisher/creators'
import PublishModal from '../views/wrappers/PublishModal'

const PublisherContainer = ({
  forkedTemplate,
  publishSuccess,
  publishError,
  publishPending,
  publishErrorMessage,
  publishType,
  closePublisherModal
}) => {
  return <PublishModal
    forkedTemplate={forkedTemplate}
    publishSuccess={publishSuccess}
    publishError={publishError}
    publishPending={publishPending}
    publishErrorMessage={publishErrorMessage}
    publishType={publishType}
    closePublisherModal={closePublisherModal}
  />
}

function mapStateToProps (state) {
  return {
    forkedTemplate: state.Publisher.forkedTemplate,
    publishSuccess: state.Publisher.publishSuccess,
    publishError: state.Publisher.publishError,
    publishPending: state.Publisher.publishPending,
    publishErrorMessage: state.Publisher.publishErrorMessage,
    publishType: state.Publisher.publishType
  }
}

const mapDispatchToProps = {
  closePublisherModal
}

PublisherContainer.propTypes = {
  forkedTemplate: PropTypes.string,
  publishSuccess: PropTypes.bool.isRequired,
  publishError: PropTypes.bool.isRequired,
  publishPending: PropTypes.bool.isRequired,
  publishErrorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object // null
  ]),
  publishType: PropTypes.string.isRequired,
  closePublisherModal: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PublisherContainer)
