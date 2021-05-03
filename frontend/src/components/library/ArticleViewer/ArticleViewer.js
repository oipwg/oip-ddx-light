import React from 'react'
import clsx from 'clsx'
import * as PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Article from './Article'
import { TMP_ARTICLE, TMP_BASIC, TMP_IMAGE, TMP_PERSON, TMP_TEXT_IS_PREVIEW } from '../../../../templates'

import styles from './styles'
import getTemplateData from '../../../../util/template/get-template-data'
import useOip5RecordsByTxid from '../../../hooks/useOip5RecordByTxid'
import useIpfsRecord from '../../../hooks/useIpfsRecord'
import createObjectUrl from '../../../../util/file/create-object-url'

const ArticleViewer = ({
  recordPayload,
  purchasedData,
  className,
  style
}) => {
  const c = styles()

  const { meta } = recordPayload
  const timeUnix = meta?.time
  let datePublished
  if (timeUnix) {
    datePublished = new Date(timeUnix * 1e3)
  }
  const articleTemplateData = getTemplateData(recordPayload, TMP_ARTICLE)
  const basicTemplateData = getTemplateData(recordPayload, TMP_BASIC)
  const title = basicTemplateData?.name

  const bylineWriterOipRef = articleTemplateData.bylineWriter
  const imageListOipRef = articleTemplateData.imageList
  const imageCaptionList = articleTemplateData.imageCaptionList
  const articleTextOipRef = articleTemplateData.articleText

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
  const imageUrl = createObjectUrl({ blob: imageBlob })

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

  return <div className={clsx(className, c.root)} style={style}>
    <Article className={c.article}>
      <Article.Header
        title={
          <h1 className={c.title}>
            {title || '[Title missing in record]'}
          </h1>
        }
        subtitle={
          <>
            {writerQuery.isLoading && 'Loading byline writer...'}
            {writerQuery.isError && <span style={{ color: 'red' }}>'Error fetching byline writer...'}</span>}
            {writerQuery.isSettled && !writerQuery.isError && <span>
              {firstName} {byLineWriter}, {articleTemplateData.bylineWritersTitle}, {articleTemplateData.bylineWritersLocation} / Published {datePublished.toUTCString()}
            </span>}
          </>
        }
      />
      <Article.MediaView
        body={
          <>
            { imageListIpfsQuery.isLoading && <div style={{ height: 300, width: '100%', backgroundColor: '#b8c6db', backgroundImage: 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)' }} /> }
            { imageListIpfsQuery.isSettled && !imageListIpfsQuery.isError && <img alt={'article-image'} src={imageUrl}/> }
            { imageListIpfsQuery.isError && <span style={{ color: 'red' }}>Error fetching image at location: {imageListIpfsAddress}</span> }
          </>
        }
        caption={<span>
          {imageCaptionList?.join(', ')}
        </span>}
      >
      </Article.MediaView>
      <Article.Body>
        {textLoading && 'Loading article text...'}
        {articleTextDoesNotExists &&
        <p>
          Failed to load article text at ipfs address: {articleTextIpfsAddress || 'unknown'}
          <br />
          Error: {articleTextIpfsQuery.isError}
        </p>}
        {articleTextLoaded && <div
          className={c.body}
          // dangerouslySetInnerHTML={{ __html: purchasedText || articleTextIpfsRecord }}
        >
          <div className={clsx(isPreview && c.preview)} />
          <ReactMarkdown>{purchasedText || articleTextIpfsRecord}</ReactMarkdown>
        </div>}
      </Article.Body>
    </Article>
  </div>
}

ArticleViewer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default ArticleViewer
