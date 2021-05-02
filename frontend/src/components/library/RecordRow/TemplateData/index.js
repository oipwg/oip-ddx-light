import templates, { BASIC, COMMERICAL, PAYMENT, SIMPCOINSALE, VIDEO } from '../../../../../templates'
import React from 'react'
import RecordField from '../RecordField'

const TemplateData = ({ classes, tmpl, details, purchasedData }) => {
  let templateName

  if (templates[tmpl]) {
    templateName = templates[tmpl].friendly_name
  } else if (templates.testnet[tmpl]) {
    templateName = templates.testnet[tmpl].friendly_name
  } else {
    templateName = 'Unknown Template'
  }
  if (tmpl === BASIC) {
    details = {
      title: details.title,
      description: details.description,
      year: details.year
    }
  }
  if (tmpl === VIDEO) {
    details = {
      displayName: details.displayName,
      addressDirectory: details.addressDirectory,
      filename: details.filename,
      thumbnailFilename: details.thumbnailFilename,
      publishDate: details.publishDate
    }
  }
  if (tmpl === PAYMENT) {
    details = {
      platformCut: details.platformCut,
      influencerCut: details.influencerCut,
      ...details
    }
  }
  if (tmpl === COMMERICAL) {
    if (purchasedData.paid && purchasedData.data) {
      details = {
        location: purchasedData.data.location,
        network: purchasedData.data.network,
        embeddedTerms: purchasedData.data.term,
        valid_until: purchasedData.data.valid_until
      }
    } else {
      details = {
        embeddedTerms: details.embeddedTerms
      }
    }
  }
  if (tmpl === SIMPCOINSALE) {
    const coin = details.coin
    const flo = 'f9964d1e840608b68a3795fd2597e9b232dfce1029251d481b2110c83a68adf7'
    const btc = '058bf55be2639673228e1904e2326e13184de08837983cf03cc7fef73ad13d5f'

    switch (coin) {
      case flo:
        details.coin = ' FLO'
        break
      case btc:
        details.coin = ' BTC'
        break
    }
  }
  return (
    <div className={classes.templateDataRow}>
      <span className={classes.templateName}>{templateName}:</span>
      <span> {tmpl}</span>
      {Object.keys(details).map(recordField => {
        return (
          <RecordField
            classes={classes}
            key={recordField}
            recordField={recordField}
            recordFieldData={details[recordField]}
          />
        )
      })}
    </div>
  )
}

export default TemplateData
