import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import React from 'react'

const LinkRow = ({ classes, verified, txid, terms, commercialContent, mediaType, autoPay, amount, handleClick, purchasedData }) => {
  const { twitter, gab } = verified

  if (mediaType === undefined) {
    mediaType = 'other'
  }
  if (autoPay === undefined) {
    autoPay = null
  }

  if (amount === undefined) {
    amount = 0
  }

  const RenderAutoPay = ({ mediaType, amount, autoPay, handleClick, purchasedData }) => {
    if (!purchasedData) {
      console.log({ purchasedData })
      return null
    }

    if (!(mediaType && autoPay)) {
      return
    }

    if (purchasedData.paid) {
      return (
        <>
          <Link passHref href={`/record?txid=${txid}`}>
            <button className={classes.actionIconButton}>
              <a className={classes.searchLink}>
                {/* <img src={'/static/assets/icons/expand.png'} alt={'expand'} /> */}
                paid
              </a>
            </button>
          </Link>
        </>
      )
    }

    if (mediaType in autoPay) {
      return (
        <>
          {/* passHref href={`/record?txid=${txid}`} */}
          <div>
            <button className={classes.actionIconButton} style={purchasedData.paid ? {} : { color: 'red' }}
              onClick={() => handleClick(txid, terms)}>
              <a className={classes.searchLink}>
                {/* <img src={'/static/assets/icons/expand.png'} alt={'expand'} /> */}
                {purchasedData.paid
                  ? 'paid'
                  : autoPay[mediaType] >= amount ? 'autopay' : `Pay ${amount} FLO`
                }
              </a>
            </button>
          </div>
        </>
      )
    }
  }

  return (
    <div className={classes.linkRowRoot}>
      {gab && (
        <button className={classes.gabButton}>
          <a
            className={classes.gabLink}
            href={`https://gab.com/OpenIndexProtocol/posts/${verified.gabId}`}
            target='_blank'>
            <img src={'/static/assets/icons/gabSvg.svg'} alt={'gab'}/>
          </a>
        </button>
      )}
      {twitter && (
        <button className={classes.twitterButton}>
          <a
            className={classes.twitterLink}
            href={`https://twitter.com/oip/status/${verified.twitterId}`}
            target='_blank'>
            <FaTwitter/>
          </a>
        </button>
      )}
      {commercialContent ? (
        <RenderAutoPay
          mediaType={mediaType}
          amount={amount}
          autoPay={autoPay}
          handleClick={handleClick}
          purchasedData={purchasedData}
        />
      )
        : <Link passHref href={`/record?txid=${txid}`}>
          <button className={classes.actionIconButton}>
            <a className={classes.searchLink}>
              {/* <img src={'/static/assets/icons/expand.png'} alt={'expand'} /> */}
              view
            </a>
          </button>
        </Link>
      }

    </div>
  )
}

export default LinkRow
