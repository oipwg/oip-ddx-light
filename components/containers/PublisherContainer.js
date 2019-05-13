import React from 'react'
import { connect } from 'react-redux'

const PublisherContainer = () => {
  return <>
    </>
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

}

export default connect(mapStateToProps, mapDispatchToProps)(PublisherContainer)
