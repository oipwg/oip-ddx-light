import React from 'react'
import clsx from 'clsx'
import * as PropTypes from 'prop-types'
import Article from './Article'
import { TMP_ARTICLE, TMP_BASIC, TMP_IMAGE, TMP_PERSON, TMP_TEXT } from '../../../../templates'

import styles from './styles'
import getTemplateData from '../../../../util/template/get-template-data'
import useOip5RecordsByTxid from '../../../hooks/useOip5RecordByTxid'
import useIpfsRecord from '../../../hooks/useIpfsRecord'
import createObjectUrl from '../../../../util/file/create-object-url'

const ArticleViewer = ({
  recordPayload,
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

  // eslint-disable-next-line no-unused-vars
  const [bylineWriterRecord, writerQuery] = useOip5RecordsByTxid(bylineWriterOipRef)
  // eslint-disable-next-line no-unused-vars
  const [imageListRecord, imageListQuery] = useOip5RecordsByTxid(imageListOipRef)
  // eslint-disable-next-line no-unused-vars
  const [articleTextRecord, articleTextQuery] = useOip5RecordsByTxid(articleTextOipRef)

  const byLineWriterTemplateData = getTemplateData(bylineWriterRecord, TMP_PERSON)
  const byLineWriterFirstName = getTemplateData(bylineWriterRecord, TMP_BASIC)
  const firstName = byLineWriterFirstName?.name
  const byLineWriter = byLineWriterTemplateData?.surname

  /**
   * IMAGE
   */
  const imageListTemplateData = getTemplateData(imageListRecord, TMP_IMAGE)
  const imageListIpfsAddress = imageListTemplateData?.imageAddress
  // eslint-disable-next-line no-unused-vars
  const [imageBlob, imageListIpfsQuery] = useIpfsRecord(imageListIpfsAddress, { responseType: 'blob' })
  const imageUrl = createObjectUrl({ blob: imageBlob })

  // const imageThumbnailIpfsAddress = imageListTemplateData?.thumbnailAddress
  // const [thumbnailBlob, imageThumbnailIpfsQuery] = useIpfsRecord(imageThumbnailIpfsAddress, 'blob')
  // const thumbnailUrl = createObjectUrl({ blob: imageBlob })

  /**
   * TEXT BODY
   */
  const articleTextTemplateData = getTemplateData(articleTextRecord, TMP_TEXT)
  const articleTextIpfsAddress = articleTextTemplateData?.textAddress
  const [articleTextIpfsRecord, articleTextIpfsQuery] = useIpfsRecord(articleTextIpfsAddress)

  const articleTextDoesNotExists = articleTextIpfsQuery?.isSettled && !articleTextIpfsRecord
  const articleTextLoaded = articleTextIpfsQuery.isSettled && articleTextIpfsRecord

  return <div className={clsx(className, c.root)} style={style}>
    <Article className={c.article}>
      <Article.Header
        title={
          <h1 className={c.title}>
            {title}
          </h1>
        }
        subtitle={
          <>
            <span>
              {firstName} {byLineWriter}, {articleTemplateData.bylineWritersTitle}, {articleTemplateData.bylineWritersLocation} / Published {datePublished.toUTCString()}
            </span>
          </>
        }
      />
      <Article.MediaView
        body={<img alt={'article-image'} src={imageUrl}/>}
        caption={<span>
          {imageCaptionList?.join(', ')}
        </span>}
      >
      </Article.MediaView>
      <Article.Body>
        {articleTextIpfsQuery.isLoading && 'Loading article text...'}
        {articleTextDoesNotExists &&
        <p>
          Failed to load article text at ipfs address: {articleTextIpfsAddress}
          Error?: {articleTextIpfsQuery.isError}
        </p>}
        {articleTextLoaded && <div className={c.body} dangerouslySetInnerHTML={{ __html: articleTextIpfsRecord }}/>}
      </Article.Body>
    </Article>
  </div>
}

ArticleViewer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
}

export default ArticleViewer
