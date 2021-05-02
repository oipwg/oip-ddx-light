import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import config from '../../../../config'
import templates, { BASIC, COMMERICAL, PAYMENT, VIDEO } from '../../../../templates'
import getIpfsUrl from '../../../../util/get-ipfs-url'
import { connect } from 'react-redux'
import { purchaseRecord, proofOfPurchase } from '../../../redux/modules/Wallet/thunks'
import { updatePurchasedTxid } from '../../../redux/actions/Autopay/creators'
import styles from './styles'
import RecordRowData from './RecordRowData'

/** ***************************************** MAIN COMPONENT ******************************************/
const RecordRow = ({
  record,
  meta,
  isVerified,
  showOnlyVerifiedPublishers = false,
  autoPay,
  purchaseRecord,
  proofOfPurchase
}) => {
  const classes = styles()
  const { details } = record // tags, payment, permissions
  // eslint-disable-next-line camelcase
  const { signed_by } = meta

  const [verified, setVerified] = useState({ twitter: false, gab: false })

  const [purchasedData, setPurchasedData] = useState({
    proofTxid: '',
    data: '',
    paid: false
  })

  const handleClick = async (txid, terms) => {
    purchaseRecord({ txid, terms })
      .then(data => {
        //   console.log("DATA", data)

        Router.push(`/record?txid=${txid}`)
        //   if(data){
        //     if(data.id === txid){
        //       setPurchasedData({
        //         proofTxid: '',
        //         data: data,
        //         paid: true
        //       })
        //     }
        //   }
      })
      .catch(err => console.log(err))
  }

  const mediaTypes = {
    audio: templates.audio,
    video: templates.video,
    image: templates.image,
    pdf: templates.pdf
  }

  useEffect(() => {
    if (autoPay.purchased) {
      const { txid } = meta

      const found = autoPay.purchased.find(purchase => {
        return purchase.txid === txid
      })

      if (found) {
        // eslint-disable-next-line camelcase
        const { txid, payment_txid, terms } = found
        proofOfPurchase({ txid, payment_txid, terms })
          .then(data => {
            setPurchasedData({
              proofTxid: payment_txid,
              data: data,
              paid: true
            })
          })
          .catch(err => console.log(err))
      }
    }
  }, [autoPay.purchased, meta, proofOfPurchase])

  useEffect(() => {
    let current = true

    async function verify (pubAddr) {
      let tmplName
      let localhost = false
      if (config.network === 'testnet') {
        tmplName = 'tmpl_2A46C905' // verified pub testnet template
        localhost = true
      }
      const { success, payload } = await isVerified({
        pubAddr,
        templateName: tmplName,
        localhost
      })
      if (success && current) {
        setVerified(payload)
      }
    }

    verify(signed_by)
    return () => {
      current = false
    }
    // eslint-disable-next-line camelcase
  }, [isVerified, signed_by])

  let typeOfMedia

  // order template data to start with basic and end with payments
  const tmpDetails = [BASIC, VIDEO, ...Object.keys(details), PAYMENT]
  const orderedDetails = []
  for (const tmpl of tmpDetails) {
    if (!orderedDetails.includes(tmpl)) {
      orderedDetails.push(tmpl)
    }

    for (const media in mediaTypes) {
      mediaTypes[media].find(x => {
        if (x === tmpl) {
          // return typeOfMedia = media
        }
      })
    }
  }

  // get VIDEO and thumbnail
  let thumbnail
  let ipfsUrl
  if (Object.keys(details).includes(VIDEO)) {
    if (details[VIDEO].thumbnailFilename && details[VIDEO].addressDirectory) {
      ipfsUrl = getIpfsUrl({
        dirName: details[VIDEO].addressDirectory,
        filename: details[VIDEO].thumbnailFilename
      })
      thumbnail = true
    }
  }

  // COMMERCIAL CONTENT
  if (Object.keys(details).includes(COMMERICAL)) {
    let amount
    // const { txid } = meta
    let terms

    for (const item in details) {
      const obj = details[item]

      Object.keys(obj).map(key => {
        if (key === 'embeddedTerms') {
          terms = obj[key][0]
        }

        if (key === 'amount') {
          // return amount = obj[key]
        }
      })
    }
    return (
      <RecordRowData
        classes={classes}
        meta={meta}
        thumbnail={thumbnail}
        ipfsUrl={ipfsUrl}
        orderedDetails={orderedDetails}
        details={details}
        // eslint-disable-next-line camelcase
        signed_by={signed_by}
        verified={verified}
        commercialContent={true}
        mediaType={typeOfMedia}
        autoPay={autoPay}
        amount={Number(amount)}
        handleClick={handleClick}
        purchasedData={purchasedData}
        terms={(terms).toString()}
      />
    )
  }

  if (showOnlyVerifiedPublishers) {
    if (verified.gab || verified.twitter) {
      return (
        <RecordRowData
          classes={classes}
          meta={meta}
          thumbnail={thumbnail}
          ipfsUrl={ipfsUrl}
          orderedDetails={orderedDetails}
          details={details}
          // eslint-disable-next-line camelcase
          signed_by={signed_by}
          verified={verified}
          showExpand={true}
          commercialContent={false}

        />
      )
    } else return null
  }
  return (
    <RecordRowData
      classes={classes}
      meta={meta}
      thumbnail={thumbnail}
      ipfsUrl={ipfsUrl}
      orderedDetails={orderedDetails}
      details={details}
      // eslint-disable-next-line camelcase
      signed_by={signed_by}
      verified={verified}
      showExpand={true}
      commercialContent={false}
    />
  )
}

RecordRow.propTypes = {
  classes: PropTypes.object.isRequired,
  record: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  autoPay: PropTypes.object.isRequired
}

function mapStateToProps ({ Autopay }) {
  return {
    autoPay: Autopay
  }
}

const mapDispatchToProps = {
  purchaseRecord,
  proofOfPurchase,
  updatePurchasedTxid
}

const _connect = comp => connect(mapStateToProps, mapDispatchToProps)(comp)

export default _connect(RecordRow)
