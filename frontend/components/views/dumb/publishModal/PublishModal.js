import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { MdClose } from 'react-icons/md'
import { TEMPLATE, RECORD } from '../../../../redux/reducers/Publisher'
import TemplatePublisher from '../templatePublisher/TemplatePublisher'
import RecordPublisher from '../recordPublisher/RecordPublisher'
import { useSelector } from 'react-redux'
import getFloWif from '../../../../helpers-functions/getWif'

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
    flexDirection: 'column',
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
  },
  '@media (max-width: 500px)': {
    modal: {
      width: '100vw',
      height: '100vh',
      marginTop: 0
    }
  },
})

const PublishModal = ({
  classes,
  extendTemplateIds,
  publishSuccess,
  publishError,
  publishPending,
  publishErrorMessage,
  publishType,
  closePublisherModal,
  publishTemplates
}) => {
  const publishRecord = publishType === RECORD
  const publishTemplate = publishType === TEMPLATE

  const hdmwWallet = useSelector(state => state.Wallet.hdmwWallet)
  const wif = getFloWif(hdmwWallet)

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
          extendTemplateIds={extendTemplateIds}
          hidePrivateKeyInput={!!wif}
          wif={wif}
        />}
        {publishRecord && <RecordPublisher
          publishTemplates={publishTemplates}
          hidePrivateKeyInput={!!wif}
          wif={wif}
        />}
      </div>
      <div className={classes.modalFoot} />
    </div>
  </div>
}

PublishModal.propTypes = {
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
export default withStyles(styles)(PublishModal)
