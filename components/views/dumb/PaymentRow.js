import React, { useRef } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { OIP } from 'js-oip'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 50px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: [0, 30]
  },
  tipButton: {
    backgroundColor: 'transparent',
    border: 'none',
    '&:hover': {
      cursor: 'pointer'
    },
    '& > img': {
      height: '40px',
      '&:hover': {
        height: 42
      }
    }
  }
})

const PaymentRow = ({
  classes,
  paymentInfo
}) => {
  const oipRef = useRef(null)

  function sendTip = () => {

  }
  return <div className={classes.root}>
    <button className={classes.tipButton}>
      <img src={'/static/assets/icons/tip.png'} alt={'tip'} />
    </button>
  </div>
}

PaymentRow.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PaymentRow)
