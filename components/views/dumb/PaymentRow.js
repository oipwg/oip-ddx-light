import React  from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 50px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: [0, 30]
  },
  tipButton: {
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
  }
})

const PaymentRow = ({
  classes,
  paymentTemplate,
  paymentAddress,
  tip
}) => {
  function sendTip () {
    tip({
      paymentAddr: paymentAddress,
      paymentTemplate
    })
  }

  return <div className={classes.root}>
    <button onClick={sendTip} className={classes.tipButton}>
      <img src={'/static/assets/icons/tip.png'} alt={'tip'} />
    </button>
  </div>
}

PaymentRow.propTypes = {
  classes: PropTypes.object.isRequired,
  paymentTemplate: PropTypes.object.isRequired,
  paymentAddress: PropTypes.string.isRequired,
  tip: PropTypes.func.isRequired
}

export default withStyles(styles)(PaymentRow)
