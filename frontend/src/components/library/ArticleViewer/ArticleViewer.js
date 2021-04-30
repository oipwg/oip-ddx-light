import React, { useEffect, useState } from 'react'
import * as PropTypes from 'prop-types'
import Article from './Article'
import { TMP_ARTICLE, TMP_IMAGE, TMP_PERSON, TMP_TEXT } from '../../../../templates'

import styles from './styles'
import getTemplateData from '../../../../util/template/get-template-data'
import useOip5RecordsByTxid from '../../../hooks/useOip5RecordByTxid'
import useIpfsRecord from '../../../hooks/useIpfsRecord'

const ArticleViewer = ({
	recordPayload,
	className,
	style
}) => {
	// console.log('record payload', recordPayload)
	const c = styles()
	const articleTemplateData = getTemplateData(recordPayload, TMP_ARTICLE)

	const bylineWriterOipRef = articleTemplateData.bylineWriter
	const imageListOipRef = articleTemplateData.imageList
	const articleTextOipRef = articleTemplateData.articleText

	const [bylineWriterRecord, writerQuery] = useOip5RecordsByTxid(bylineWriterOipRef)
	const [imageListRecord, imageListQuery] = useOip5RecordsByTxid(imageListOipRef)
	const [articleTextRecord, articleTextQuery] = useOip5RecordsByTxid(articleTextOipRef)

	const byLineWriterTemplateData = getTemplateData(bylineWriterRecord, TMP_PERSON)
	const byLineWriter = byLineWriterTemplateData?.surname

	const imageListTemplateData = getTemplateData(imageListRecord, TMP_IMAGE)
	const imageListIpfsAddress = imageListTemplateData?.imageAddress
	const imageThumbnailIpfsAddress = imageListTemplateData?.thumbnailAddress

	const articleTextTemplateData = getTemplateData(articleTextRecord, TMP_TEXT)
	const articleTextIpfsAddress = articleTextTemplateData?.textAddress

	const [articleTextIpfsRecord, articleTextIpfsQuery] = useIpfsRecord(articleTextIpfsAddress, 'articleTextIpfsAddress')
	const [imageListIpfsRecord, imageListIpfsQuery] = useIpfsRecord(imageListIpfsAddress, 'imageListIpfsAddress')
	const [imageThumbnailIpfsRecord, imageThumbnailIpfsQuery] = useIpfsRecord(imageThumbnailIpfsAddress, 'imageThumbnailIpfsAddress')

	// console.log('Article Text', articleTextIpfsRecord)
	// console.log('Image', imageListIpfsRecord)
	// console.log('Thumbnail', imageThumbnailIpfsRecord)


	// console.log('writer', bylineWriterRecord)
	// console.log('imagelist', imageListRecord)
	// console.log('articletext', articleTextRecord)

	const loadingOr = (data, loading) => {
		return loading ? 'Loading...' : data
	}
	return <div className={className} style={style}>
		<Article className={c.article}>
			<Article.Header
				bylineWritersTitle={
					<h1>
						{articleTemplateData.bylineWritersTitle}
					</h1>
				}
				bylineWriter={<span>{loadingOr(byLineWriter, writerQuery.isLoading)}</span>}
				bylineWritersLocation={<span>{articleTemplateData.bylineWritersLocation}</span>}
			/>
			<Article.MediaView
				imageList={articleTemplateData.imageList}
				imageCaptionList={articleTemplateData.imageCaptionList}
			/>
			<Article.Body
				articleText={
					<pre>
						{loadingOr('Body', articleTextQuery.isLoading)}
					</pre>
				}
			/>
		</Article>
	</div>
}

ArticleViewer.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
}

export default ArticleViewer
