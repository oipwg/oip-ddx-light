import React, { useEffect, useState } from 'react'
import * as PropTypes from 'prop-types'
import Article from './Article'
import { TMP_ARTICLE, TMP_IMAGE, TMP_PERSON, TMP_TEXT } from '../../../../templates'

import styles from './styles'
import getTemplateData from '../../../../util/template/get-template-data'
import useOip5RecordsByTxid from '../../../hooks/useOip5RecordByTxid'
import useIpfsRecord from '../../../hooks/useIpfsRecord'
import clsx from 'clsx'

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

	const [bylineWriterRecord, writerQuery] = useOip5RecordsByTxid(bylineWriterOipRef, 'bylineWriterOipRef')
	const [imageListRecord, imageListQuery] = useOip5RecordsByTxid(imageListOipRef, 'imageListOipRef')
	const [articleTextRecord, articleTextQuery] = useOip5RecordsByTxid(articleTextOipRef, 'articleTextOipRef')

	const byLineWriterTemplateData = getTemplateData(bylineWriterRecord, TMP_PERSON)
	const byLineWriter = byLineWriterTemplateData?.surname

	const imageListTemplateData = getTemplateData(imageListRecord, TMP_IMAGE)
	const imageListIpfsAddress = imageListTemplateData?.imageAddress
	const imageThumbnailIpfsAddress = imageListTemplateData?.thumbnailAddress

	const articleTextTemplateData = getTemplateData(articleTextRecord, TMP_TEXT)
	const articleTextIpfsAddress = articleTextTemplateData?.textAddress

	const [articleTextIpfsRecord, articleTextIpfsQuery] = useIpfsRecord(articleTextIpfsAddress)
	const [imageListIpfsRecord, imageListIpfsQuery] = useIpfsRecord(imageListIpfsAddress, 'imageListIpfsAddress')
	const [imageThumbnailIpfsRecord, imageThumbnailIpfsQuery] = useIpfsRecord(imageThumbnailIpfsAddress, 'imageThumbnailIpfsAddress')

	const loadingOr = (data, loading) => {
		return loading ? 'Loading...' : data
	}
	return <div className={clsx(className, c.root)} style={style}>
		<Article className={c.article}>
			<Article.Header
				title={
					<h1 className={c.title}>
						{articleTemplateData.bylineWritersTitle}
					</h1>
				}
				subtitle={
					<>
						<span style={{ marginRight: 5 }}>{byLineWriter},</span>
						<span>{articleTemplateData.bylineWritersLocation}</span>
					</>
				}
			/>
			<Article.MediaView
				imageList={articleTemplateData.imageList}
				imageCaptionList={articleTemplateData.imageCaptionList}
			/>
			<Article.Body>
				<div className={c.body} dangerouslySetInnerHTML={{ __html: articleTextIpfsRecord }} />
			</Article.Body>
		</Article>
	</div>
}

ArticleViewer.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
}

export default ArticleViewer
