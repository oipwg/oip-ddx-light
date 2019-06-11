import React, { useState } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 50px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: [0, 30],
    position: 'relative'
  },
  tipButton: {
    position: 'absolute',
    left: 30,
    backgroundColor: 'transparent',
    border: 'none',
    '&:hover': {
      cursor: 'pointer'
    },
    '& > img': {
      height: 40,
      '&:hover': {
        height: 42
      }
    }
  },
  transactionContainer: {
  },
  transactionLink: {
    cursor: 'pointer',
    borderBottom: 'none',
    color: theme.palette.primary.main
  }
})

const PaymentRow = ({
  classes,
  paymentTemplate,
  paymentAddress,
  tip
}) => {
  const [txid, setTxid] = useState(undefined)
  const [showTxid, setShowTxid] = useState(false)
  async function sendTip () {
    let tx = await tip({
      paymentAddr: paymentAddress,
      paymentTemplate
    })
    console.log('tip txid: ', tx)
    if (tx) {
      setTxid(tx)
      setShowTxid(true)
    }
    setTimeout(() => {
      setShowTxid(false)
    }, 20000)
  }

  return <div className={classes.root}>
    <button onClick={sendTip} className={classes.tipButton}>
      <img src={'/static/assets/icons/tip.png'} alt={'tip'} />
    </button>
    <div className={classes.transactionContainer}>
      {showTxid && <a target='_blank' href={`https://livenet.flocha.in/tx/${txid}`} className={classes.transactionLink}>See payment here</a>}
    </div>
  </div>
}

PaymentRow.propTypes = {
  classes: PropTypes.object.isRequired,
  paymentTemplate: PropTypes.object.isRequired,
  paymentAddress: PropTypes.string.isRequired,
  tip: PropTypes.func.isRequired
}

export default withStyles(styles)(PaymentRow)
