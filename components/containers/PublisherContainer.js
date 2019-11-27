import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { closePublisherModal } from '../../redux/actions/Publisher/creators'

const PublisherContainer = (props) => {
  return props.render(props)
}

function mapStateToProps (state) {
  return {
    extendTemplateIds: state.Publisher.extendTemplateIds,
    publishSuccess: state.Publisher.publishSuccess,
    publishError: state.Publisher.publishError,
    publishPending: state.Publisher.publishPending,
    publishErrorMessage: state.Publisher.publishErrorMessage,
    publishType: state.Publisher.publishType,
    publishTemplates: state.Publisher.publishTemplates
  }
}

const mapDispatchToProps = {
  closePublisherModal
}

PublisherContainer.propTypes = {
  extendTemplateIds: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  publishTemplates: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]),
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
