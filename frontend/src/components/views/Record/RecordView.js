import React from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'

import SwitchViewer from '../../library/SwitchViewer/SwitchViewer'
import PaymentRow from '../../library/PaymentRow/PaymentRow'
import RecordMap from '../../library/RecordMap/RecordMap'
import { TMP_ARTICLE, TMPL_PAYMENT } from '../../../../templates'
import ArticleViewer from '../../library/ArticleViewer'

// http://localhost:3000/record?txid=8efb6e51504ff2a695024da81d798b7e68a0cfce55558f53e1a81025ce2e94a2
const RecordView = ({
  recordPayload,
  purchasedData,
  payment,
  registered,
  platformData,
  recordsByPublisher,
  isVerified,
  showOnlyVerifiedPublishers,
  autoPay,
  purchaseRecord,
  proofOfPurchase,
  tip,
  className,
  style
}) => {
  const c = styles()
  const { record } = recordPayload
  const isArticleTemplate = record?.details?.[TMP_ARTICLE]

  return <div id={'record-view'} className={clsx(c.root, className)} style={style}>
    {
      isArticleTemplate
        ? <ArticleViewer
          recordPayload={recordPayload}
          purchasedData={purchasedData}
        />
        : <>
          <div className={c.recordViewer}>
            <SwitchViewer recordPayload={recordPayload} purchasedData={purchasedData}/>
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
          <div className={c.recordsByPublisher}>
            <RecordMap
              records={recordsByPublisher}
              isVerified={isVerified}
              showOnlyVerifiedPublishers={showOnlyVerifiedPublishers}
              autoPay={autoPay}
              purchaseRecord={purchaseRecord}
              proofOfPurchase={proofOfPurchase}
            />
          </div>
        </>
    }
  </div>
}

RecordView.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default RecordView
