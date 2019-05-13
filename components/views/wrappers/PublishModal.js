import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { MdClose } from 'react-icons/md'

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
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 17,
    fontSize: 20,
    flex: '0 0 50px',
    boxSizing: 'border-box',
    '& #closeModal': {
      cursor: 'pointer'
    }
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
  closePublisherModal
}) => {
  function handleCloseModal () {
    closePublisherModal()
  }
  return <div className={classes.modalBackground}>
    <div className={classes.modal}>
      <div className={classes.modalHead}>
        <span id='closeModal' onClick={handleCloseModal}><MdClose /></span>
      </div>
    </div>
  </div>
}

PublishModal.propTypes = {
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
export default withStyles(styles)(PublishModal)
