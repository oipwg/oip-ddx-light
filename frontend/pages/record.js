import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SwitchViewer from '../components/views/dumb/switchViewer/SwitchViewer';
import RecordMap from '../components/views/dumb/recordMap/RecordMap';
import PaymentRow from '../components/views/dumb/paymentRow/PaymentRow';
import SideBar from '../components/views/dumb/sideBar/SideBar';
import {
  getBalance,
  getExchangeRate,
  tip,
  purchaseRecord,
  proofOfPurchase
} from '../redux/modules/Wallet/thunks';

import { setActivePage } from '../redux/actions/Interface/creators';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  [`@media (max-width: ${theme.breakpoints['md']}px)`]: {
    root: {
      flexDirection: 'column'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    overflowX: 'hidden',
    flex: 1
  },
  recordViewer: {
    display: 'flex',
    flex: '1 0 700px',
    flexDirection: 'column',
    maxHeight: 850
    // height: 1000
  },
  recordsByPublisher: {
    display: 'flex',
    flex: 1,
    minHeight: '50%',
    flexDirection: 'column',
    '& h3': {
      paddingLeft: 30,
      color: theme.palette.greyscale(0.8)
    }
  }
});

const Record = ({
  classes,
  recordPayload,
  daemonApi,
  registered,
  platformData,
  tip,
  showOnlyVerifiedPublishers,
  setActivePage,
  getExchangeRate,
  getBalance,
  autoPay,
  purchaseRecord,
  proofOfPurchase
}) => {
  useEffect(() => {
    setActivePage(null);
  }, []);


  const [purchasedData, setPurchasedData] = useState({
    proofTxid: '',
    data: '',
    paid: false
})


useEffect(() => {
if(autoPay.purchased){
  let { txid } = recordPayload.meta

  let found = autoPay.purchased.find(purchase => {
     return purchase.txid === txid
  })
  
  if(found){
    let {txid, payment_txid, terms } = found
    proofOfPurchase({txid, payment_txid, terms })
    .then(data => {
      setPurchasedData({
        proofTxid: payment_txid,
        data: data,
        paid: true
      })})
    .catch(err => console.log(err))
  }
}
}, [])


  // get records by the same publisher
  const [recordsByPublisher, setRecordsByPublisher] = useState([]);
  useEffect(() => {
    let current = true;
    const getRecordsByPublisher = async () => {
      const { meta } = recordPayload;
      const q = `meta.signed_by:${meta.signed_by}`;
      let res;
      try {
        res = await daemonApi.searchOip5Records({ q, limit: 100 });
      } catch (err) {
        console.error(err);
      }
      if (!res) return;

      const { success, payload, error } = res;
      if (success) {
        const { results } = payload;
        if (results.length > 0) {
          if (current) {
            setRecordsByPublisher(results);
          }
        }
      } else {
        console.error(error);
      }
    };
    if (recordPayload) {
      try {
        getRecordsByPublisher();
      } catch (err) {
        console.error(`Failed to get records by publisher: \n ${err}`);
      }
    }

    return () => {
      current = false;
    };
  }, []);

  // get flo balance and exchange rate
  useEffect(() => {
    let current = true;
    const getXrAndBalance = async () => {
      if (current) {
        await getExchangeRate();
        await getBalance();
      }
    };
    getXrAndBalance();
    return () => {
      current = false;
    };
  }, []);

  async function isVerified({ pubAddr, templateName, apiUrl, localhost }) {
    try {
      return await daemonApi.isVerifiedPublisher({
        pubAddr,
        templateName,
        apiUrl,
        localhost
      });
    } catch (err) {
      console.error(`Failed to verify pub address: ${pubAddr}: \n ${err}`);
      return { success: false, error: err };
    }
  }
  // check if record includes a payment template
  const TMPL_PAYMENT = 'tmpl_3084380E';
  let payment = false;
  if (recordPayload.record.details[TMPL_PAYMENT]) {
    payment = true;
  }
  return (
    <div className={classes.root}>
      <SideBar reroute />
      <div className={classes.content}>
        <div className={classes.recordViewer}>
          <SwitchViewer recordPayload={recordPayload} purchasedData={purchasedData} />
          {payment && (
            <PaymentRow
              paymentTemplate={recordPayload.record.details[TMPL_PAYMENT]}
              registered={registered}
              platformData={platformData}
              paymentAddress={recordPayload.meta.signed_by}
              tip={tip}
              purchasedData={purchasedData}
            />
          )}
        </div>
        <div className={classes.recordsByPublisher}>
          <RecordMap
            records={recordsByPublisher}
            isVerified={isVerified}
            showOnlyVerifiedPublishers={showOnlyVerifiedPublishers}
            autoPay={autoPay}
            purchaseRecord={purchaseRecord}
            proofOfPurchase={proofOfPurchase}

          />
        </div>
      </div>
    </div>
  );
};

Record.getInitialProps = async (ctx) => {
  const { reduxStore, query } = ctx;
  const { getState } = reduxStore;
  // const isServer = !!req

  let state = getState();
  const { Explorer } = state;

  const txid = query.txid;

  let response = await Explorer.daemonApi.getOip5Record(txid);
  const { success, payload, error } = response;
  if (success) {
    const { results } = payload;
    if (results[0]) {
      return {
        recordPayload: results[0]
      };
    }
  } else {
    console.error(error);
  }

  return {};
};

Record.propTypes = {
  classes: PropTypes.object.isRequired,
  registered: PropTypes.bool.isRequired,
  platformData: PropTypes.object.isRequired,
  daemonApi: PropTypes.object.isRequired,
  setActivePage: PropTypes.func.isRequired,
  getExchangeRate: PropTypes.func.isRequired,
  getBalance: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    registered: state.Platform.registered,
    platformData: state.Platform.platformData,
    showOnlyVerifiedPublishers: state.Interface.showOnlyVerifiedPublishers,
    daemonApi: state.Explorer.daemonApi,
    autoPay: state.Autopay
  };
}
const mapDispatchToProps = {
  tip,
  setActivePage,
  getExchangeRate,
  getBalance,
  purchaseRecord,
  proofOfPurchase
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Record));
