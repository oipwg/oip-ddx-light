import config from '../../../../../config'
import React from 'react'
import LinkRow from '../LinkRow'

const ActionBar = ({ classes, verified, txid, terms, commercialContent, mediaType, autoPay, amount, handleClick, purchasedData }) => {
  let explorerLink
  if (config.network === 'testnet') {
    explorerLink = `https://testnet.flocha.in/tx/${txid}`
  } else explorerLink = `https://livenet.flocha.in/tx/${txid}`

  return (
    <div className={classes.actionBarRoot}>
      <a className={classes.txidHeader} href={explorerLink} target='_blank'>
        <img
          src='https://testnet.flocha.in/img/icons/favicon.ico'
          alt={`transaction: #${txid}`}
        />
      </a>
      <LinkRow
        classes={classes}
        verified={verified}
        txid={txid}
        commercialContent={commercialContent}
        mediaType={mediaType}
        autoPay={autoPay}
        amount={amount}
        handleClick={handleClick}
        purchasedData={purchasedData}
        terms={terms}
      />
    </div>
  )
}

export default ActionBar
