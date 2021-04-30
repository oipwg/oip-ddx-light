import React from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles'
import ArticleHeader from './ArticleHeader'
import ArticleMediaView from './ArticleMediaView'
import ArticleBody from './ArticleBody'

const Article = ({
	children,
	className,
	style
}) => {
	const c = styles()
	return <div className={clsx(c.root, className)} style={style}>
		{children}
	</div>
}

Article.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
}

Article.Header = ArticleHeader
Article.Body = ArticleBody
Article.MediaView = ArticleMediaView

export default Article
