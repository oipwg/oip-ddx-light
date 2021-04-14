import React, { useState } from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const styles = (theme) => ({
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
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    left: 30,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
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
    marginLeft: '30px'
  },
  transactionLink: {
    cursor: 'pointer',
    borderBottom: 'none',
    color: theme.palette.primary.main
  }
});

const PaymentRow = ({ classes, paymentTemplate, paymentAddress, tip }) => {
  const user = useSelector(state => state.User.user);
  const [txid, setTxid] = useState(undefined);
  const [showTxid, setShowTxid] = useState(false);
  async function sendTip(tV) {
    let tx = await tip({
      paymentAddr: paymentAddress,
      paymentTemplate,
      tV
    });
    console.log('tip txid: ', tx);
    if (tx) {
      setTxid(tx);
      setShowTxid(true);
    }
    setTimeout(() => {
      setShowTxid(false);
    }, 20000);
  }

  /**Storing sugTip amounts in suggestedTips */
  let suggestedTips = paymentTemplate.sugTip;
  // console.log(suggestedTips);

  /**Mapping over suggestedTips and returning a button for each with the suggested tip, if no suggestedTip return default button */
  if (suggestedTips) {
    return (
      <div className={classes.root}>
        {suggestedTips.map((tipValue) => {
          return (
            <button
              //! sendTip takes the tipvalue and passes it back to the thunk. That vaule is used to calculate tip based on what is clicked
              onClick={() => sendTip(tipValue)}
              className={classes.tipButton}
              key={tipValue}
            >
              <h4>${tipValue}</h4>
              <img src={'/static/assets/icons/tip.png'} alt={'tip'} />
            </button>
          );
        })}
        <div className={classes.transactionContainer}>
          {showTxid && (
            <a
              target='_blank'
              href={`https://livenet.flocha.in/tx/${txid}`}
              className={classes.transactionLink}
            >
              See payment here
            </a>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <button onClick={() => sendTip(0.2)} className={classes.tipButton}>
          <h4>.20𝇍</h4>
          <img src={'/static/assets/icons/tip.png'} alt={'tip'} />
        </button>
        <div className={classes.transactionContainer}>
          {showTxid && (
            <a
              target='_blank'
              href={`https://livenet.flocha.in/tx/${txid}`}
              className={classes.transactionLink}
            >
              See payment here
            </a>
          )}
        </div>
      </div>
    );
  }
};

PaymentRow.propTypes = {
  classes: PropTypes.object.isRequired,
  paymentTemplate: PropTypes.object.isRequired,
  paymentAddress: PropTypes.string.isRequired,
  tip: PropTypes.func.isRequired
};

export default withStyles(styles)(PaymentRow);
