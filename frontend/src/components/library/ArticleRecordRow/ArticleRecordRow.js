import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import * as PropTypes from 'prop-types'
//import PaymentRow from '../../'

import { TMP_ARTICLE, TMP_BASIC, TMP_IMAGE, TMP_PERSON, TMP_TEXT_IS_PREVIEW } from '../../../../templates'
import ExplorerHeader from '../../views/Explorer/ExplorerHeader/ExplorerHeader'

import styles from './styles'
import getTemplateData from '../../../../util/template/get-template-data'
import useOip5RecordsByTxid from '../../../hooks/useOip5RecordByTxid'
import useIpfsRecord from '../../../hooks/useIpfsRecord'
import createObjectUrl from '../../../../util/file/create-object-url'
import ActionBar from '../RecordRow/Actionbar/index'

const ArticleRecordRow = ({
  record: recordPayload,
  purchasedData,
  className,
  style,
  searchInput,
  handleSearchInput,
  details,
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
  terms
}) => {
  const classes = styles()

  // TODO: implement verification of social media
  const [verified, setVerified] = useState({ twitter: false, gab: false })

  const { meta } = recordPayload
  const timeUnix = meta?.time
  let datePublished
  if (timeUnix) {
    datePublished = new Date(timeUnix * 1e3)
  }
  const articleTemplateData = getTemplateData(recordPayload, TMP_ARTICLE)

  const basicTemplateData = getTemplateData(recordPayload, TMP_BASIC)
  const title = basicTemplateData?.name

  const bylineWriterOipRef = articleTemplateData?.bylineWriter
  const imageListOipRef = articleTemplateData?.imageList
  const imageCaptionList = articleTemplateData?.imageCaptionList
  const articleTextOipRef = articleTemplateData?.articleText

  const [bylineWriterRecord, writerQuery] = useOip5RecordsByTxid(bylineWriterOipRef)
  // eslint-disable-next-line no-unused-vars
  const [imageListRecord, imageListQuery] = useOip5RecordsByTxid(imageListOipRef)
  // eslint-disable-next-line no-unused-vars
  const [articleTextRecord, articleTextQuery] = useOip5RecordsByTxid(articleTextOipRef)
  // const previewTemplate = getTemplateData(articleTextRecord, TMP_TEXT_IS_PREVIEW)
  // const isPreview = previewTemplate?.isPreview || false

  /**
   * Byline caption
   */
  const byLineWriterTemplateData = getTemplateData(bylineWriterRecord, TMP_PERSON)
  const byLineWriterFirstName = getTemplateData(bylineWriterRecord, TMP_BASIC)
  const firstName = byLineWriterFirstName?.name
  const byLineWriter = byLineWriterTemplateData?.surname

  /**
   * IMAGE
   */
  const imageListTemplateData = getTemplateData(imageListRecord, TMP_IMAGE)
  const imageListIpfsAddress = imageListTemplateData?.imageAddress
  const [imageBlob, imageListIpfsQuery] = useIpfsRecord(imageListIpfsAddress, { responseType: 'blob' })
  const imageLoading = imageListIpfsQuery.isLoading
  const imageUrl = createObjectUrl({ blob: imageBlob })

  useEffect(() => {
    if(imageUrl) {
      console.log(imageUrl, imageListIpfsAddress)
    }
  }, [imageUrl, imageListIpfsAddress])

  // const imageThumbnailIpfsAddress = imageListTemplateData?.thumbnailAddress
  // const [thumbnailBlob, imageThumbnailIpfsQuery] = useIpfsRecord(imageThumbnailIpfsAddress, 'blob')
  // const thumbnailUrl = createObjectUrl({ blob: imageBlob })

  /**
   * TEXT BODY
   */
  const articleTextTemplateData = getTemplateData(articleTextRecord, TMP_TEXT_IS_PREVIEW)
  const isPreview = articleTextTemplateData?.isPreview && !purchasedData?.paid

  const articleTextIpfsAddress = articleTextTemplateData?.textAddress
  const [articleTextIpfsRecord, articleTextIpfsQuery] = useIpfsRecord(articleTextIpfsAddress)

  const [purchasedText, purchaseTextQuery] = useIpfsRecord(purchasedData?.data?.location)

  const textLoading = purchaseTextQuery.isLoading || articleTextIpfsQuery.isLoading

  const articleTextDoesNotExists = articleTextIpfsQuery?.isSettled && !articleTextIpfsRecord
  const articleTextLoaded = articleTextIpfsQuery.isSettled && articleTextIpfsRecord

  //console.log("REEEEEEE: ", articleTextIpfsRecord)

  return (
    <div className={clsx(className, classes.root)} style={style}>
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
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>{title}</h2>
      </div>
      <div className={classes.summaryContainer}>
        <p className={classes.summary}>{articleTextLoaded && articleTextIpfsRecord.substr(0, 250)} 
          ... 
        </p>  
      </div>
      
      <img src={imageUrl} alt="string" className={classes.image}/>
    </div>
  )
}

ArticleRecordRow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default ArticleRecordRow
