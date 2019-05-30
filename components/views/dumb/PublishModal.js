import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { MdClose } from 'react-icons/md'
import { TEMPLATE, RECORD } from '../../../redux/reducers/Publisher'
import TemplatePublisher from './TemplatePublisher'
import RecordPublisher from './RecordPublisher'

const styles = theme => ({
  modalBackground: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(000, 000, 000, 0.3)',
    zIndex: 3000
  },
  modal: {
    position: 'relative',
    width: 500,
    height: 700,
    backgroundColor: 'white',
    margin: 'auto',
    marginTop: 80,
    borderRadius: 25,
    boxShadow: theme.shadows[4],
    display: 'flex',
    flexDirection: 'column'
  },
  modalHead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
    fontSize: 20,
    flex: '0 0 90px',
    boxSizing: 'border-box',
    position: 'relative',
    '& #closeModal': {
      cursor: 'pointer',
      position: 'absolute',
      top: 25,
      right: 25
    },
    '& > h2': {
      margin: 0,
      marginLeft: 25
    }
  },
  modalFoot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: '0 0 70px',
    paddingBottom: 17,
    paddingRight: 5,
    paddingLeft: 5
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    overflowY: 'auto'
  },
  publishHeader: {
    textTransform: 'capitalize'
  }
})

const PublishModal = ({
  classes,
  forkedTemplate,
  publishSuccess,
  publishError,
  publishPending,
  publishErrorMessage,
  publishType,
  closePublisherModal,
  publishData
}) => {
  const publishRecord = publishType === RECORD
  const publishTemplate = publishType === TEMPLATE

  function handleCloseModal () {
    closePublisherModal()
  }
  return <div className={classes.modalBackground}>
    <div className={classes.modal}>
      <div className={classes.modalHead}>
        <span id='closeModal' onClick={handleCloseModal}><MdClose /></span>
        <h2 className={classes.publishHeader}>{publishType}</h2>
      </div>
      <div className={classes.modalBody}>
        {publishTemplate && <TemplatePublisher
          forkedTemplate={forkedTemplate}
        />}
        {publishRecord && <RecordPublisher
          publishData={publishData}
        />}
      </div>
      <div className={classes.modalFoot} />
    </div>
  </div>
}

PublishModal.propTypes = {
  forkedTemplate: PropTypes.array,
  publishSuccess: PropTypes.bool.isRequired,
  publishError: PropTypes.bool.isRequired,
  publishPending: PropTypes.bool.isRequired,
  publishErrorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object // null
  ]),
  publishType: PropTypes.string.isRequired,
  closePublisherModal: PropTypes.func.isRequired,
  publishData: PropTypes.object
}
export default withStyles(styles)(PublishModal)
