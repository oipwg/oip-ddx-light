import React from 'react'
import ActionBar from '../Actionbar'
import TableData from '../TableData'
//import ArticleMediaView from '../../ArticleViewer'

const RecordRowData = ({
  classes,
  verified,
  details,
  meta,
  thumbnail,
  ipfsUrl,
  orderedDetails,
  // eslint-disable-next-line camelcase
  signed_by,
  showExpand,
  commercialContent,
  mediaType,
  autoPay,
  amount,
  handleClick,
  purchasedData,
  terms
}) => {
  return (
    <div className={classes.root}>
      <ActionBar
        classes={classes}
        verified={verified}
        recordDetails={details}
        txid={meta.txid}
        commercialContent={commercialContent}
        mediaType={mediaType}
        autoPay={autoPay}
        amount={amount}
        handleClick={handleClick}
        purchasedData={purchasedData}
        terms={terms}
      />
      <TableData
        classes={classes}
        thumbnail={thumbnail}
        ipfsUrl={ipfsUrl}
        orderedDetails={orderedDetails}
        details={details}
        // eslint-disable-next-line camelcase
        signed_by={signed_by}
        verified={verified}
        purchasedData={purchasedData}
      />
      
    </div>
  )
}

export default RecordRowData


/*
<ArticleMediaView
        body={thumbnail}
      />
*/